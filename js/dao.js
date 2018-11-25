// Artists
const artists = [];
const albumsPerYear = {};
const albumsPerCountry = {};
const criteriaOccurences = {};
let gemsNb = 0;

for (let i = 0; i < albums.length; i++) {

    // Albums
    albums[i].index = i;

    // Artists
    if (!artists.includes(albums[i].artist)) {
        artists.push(albums[i].artist);
    }

    // Gems
    if(albums[i].isAGem) {
        gemsNb++;
    }

    // Albums per year
    const year = albums[i].year;
    albumsPerYear[year] ? albumsPerYear[year]++ : albumsPerYear[year] = 1;
    
    // Albums per country
    const country = albums[i].country;
    albumsPerCountry[country] ? albumsPerCountry[country]++ : albumsPerCountry[country] = 1;

    // Most used criteria
    for (let j = 0; j < albums[i].criteria.length; j++) {
        const criterium = albums[i].criteria[j];
        if(criteriaOccurences.hasOwnProperty(criterium)) {
            criteriaOccurences[criterium]++;
        } else {
            criteriaOccurences[criterium] = 0;
        }
    }
}

const albumsSortedByYear = albums.slice(0);
albumsSortedByYear.sort(Utils.sortByYear);

// USE THIS OBJECT IN SNACK TO SIMULATE THE DB
const Db = {
    albums: albums,
    artists: artists,
    criteria: criteria,
    criteriaOrder: criteriaOrder,
    albumsPerYear: albumsPerYear,
    albumsPerCountry: albumsPerCountry,
    criteriaOccurences: criteriaOccurences,
    gemsNb: gemsNb,
    albumsSortedByYear: albumsSortedByYear,
    subgenres: subgenres,
    regions: regions
}

// Other

function getRandomAlbumsByLength(numberOfAlbumsInRandomVue, idToAvoid) {

    let randomAlbumIds = [];

    // Make sure that the databse is big enough... Otherwise infinite loop
    while (randomAlbumIds.length < numberOfAlbumsInRandomVue) {
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