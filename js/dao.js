// // Below code for firestore
// const dbRegions = [];
// database.collection("regions").get().then((querySnapshot) => {
// 	querySnapshot.forEach((doc) => {
// 			dbRegions.push(doc.data().name);
// 	});
// });

// const dbArtists = [];
// database.collection("artists").get().then((querySnapshot) => {
// 	querySnapshot.forEach((doc) => {
// 			dbArtists.push(doc.data().name);
// 	});
// });

// const dbAlbums = [];
// database.collection("albums").get().then((querySnapshot) => {
// 	querySnapshot.forEach((doc) => {
// 			dbAlbums.push(doc.data());
// 	});
// });

// const dbGems = [];
// database.collection("albums").where("is_gem", "==", "true").get().then((querySnapshot) => {
// 	querySnapshot.forEach((doc) => {
// 			dbGems.push(doc.data());
// 	});
// });
// console.log(dbGems);
// const stCovers = storage.ref("covers/abedul_nosotros.jpg").getDownloadURL().then(url => {
// 		// url; // TODO pas besoin d epromesse, garder le fonctionneent actuel et au mpoment de faire v-src, juste maj le pathToCovers
// });

// BELOW TODO old code to remove

// Artists
const artists = [];
const designers = {};
const albumsPerYear = {};
const albumsPerCountry = {};
const criteriaOccurences = {};
const mostUsedCriteriaPerYear = {};
let gemsNb = 0;
const artistsWithMostGems = {}

for (let i = 0; i < albums.length; i++) {

    // Albums
    albums[i].index = i;
		const album = albums[i]

    // Artists
    if (!artists.includes(album.artist)) {
        artists.push(album.artist);
    }

    // Designers
    for (let j = 0; j < album.designers.length; j++) {
        const designer = album.designers[j];
        if (!designers[designer]) {
            designers[designer] = {};
            designers[designer].name = designer;
            designers[designer].works = [];
        }
        designers[designer].works.push(album);
    }

    // Gems
    if(album.isAGem) {
        gemsNb++;

				// Gems per artists
				const artist = album.artist
				artistsWithMostGems[artist] ? artistsWithMostGems[artist]++ : artistsWithMostGems[artist] = 1
    }

    // Albums per year
    const year = album.year;
    albumsPerYear[year] ? albumsPerYear[year]++ : albumsPerYear[year] = 1;
    
    // Albums per country
    const country = album.country;
    albumsPerCountry[country] ? albumsPerCountry[country]++ : albumsPerCountry[country] = 1;

    // Most used criteria
    for (let j = 0; j < album.criteria.length; j++) {
        const criterium = album.criteria[j];
				if(criteriaOccurences.hasOwnProperty(criterium)) {
            criteriaOccurences[criterium]++;
        } else {
						if (criterium === undefined) {
							console.error('Wrong criterium used in album with id: ', album.id)
						}
            criteriaOccurences[criterium] = 1;
        }

        // Per year
        const year = album.year;
        if(!mostUsedCriteriaPerYear.hasOwnProperty(year)) {
            mostUsedCriteriaPerYear[year] = [];
            mostUsedCriteriaPerYear[year].push({
                criterium: criterium,
                occurences: 1,
            });
        } else {
            let isFirstOccurence = true;
            for (let k = 0; k < mostUsedCriteriaPerYear[year].length; k++) {
                if(mostUsedCriteriaPerYear[year][k].criterium === criterium) {
                    mostUsedCriteriaPerYear[year][k].occurences++;
                    isFirstOccurence = false;
                    break;
                }
            }
            if(isFirstOccurence) {
                mostUsedCriteriaPerYear[year].push({
                    criterium: criterium,
                    occurences: 1,
                });
            }
        }
    }
}

const albumsSortedByYear = albums.slice(0);
albumsSortedByYear.sort(Utils.sortByYear);

for (let [year, obj] of Object.entries(mostUsedCriteriaPerYear)){
    obj.sort(Utils.sortByOccurences);
}

const designersSortedByCoverNumber = [];
for (const designer in designers) {
    designersSortedByCoverNumber.push([designer, designers[designer]]);
}
designersSortedByCoverNumber.sort(function(a, b) {
    return b[1].works.length - a[1].works.length;
});

// USE THIS OBJECT IN SNACK TO SIMULATE THE DB
const Db = {
    albums: albums,
    artists: artists,
    criteria: criteria,
    criteriaOrder: criteriaOrder,
    albumsPerYear: albumsPerYear,
    albumsPerCountry: albumsPerCountry,
    criteriaOccurences: criteriaOccurences,
    mostUsedCriteriaPerYear: mostUsedCriteriaPerYear,
    gemsNb: gemsNb,
	artistsWithMostGems: artistsWithMostGems,
    albumsSortedByYear: albumsSortedByYear,
    subgenres: subgenres,
    regions: regions,
    designers: designersSortedByCoverNumber
}

// Other

function getRandomAlbumsByLength(numberOfAlbumsInRandomView, idToAvoid) {

    let randomAlbumIds = [];

    // Make sure that the databse is big enough... Otherwise infinite loop
    while (randomAlbumIds.length < numberOfAlbumsInRandomView) {
        let randomId = Utils.randomize(albums.length);
        if(!randomAlbumIds.includes(randomId) && albums[randomId].id != idToAvoid) {
            randomAlbumIds.push(randomId);
        }
    }

    let randomAlbums = [];
    for (let i = 0; i < randomAlbumIds.length; i++) {
        randomAlbums.push(albums[randomAlbumIds[i]]);
    }
    return randomAlbums;
}