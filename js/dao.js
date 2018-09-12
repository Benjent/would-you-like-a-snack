// Artists
let artists = [];
let albumsPerYear = {};
let albumsPerCountry = {};
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
}

// USE THIS OBJECT IN SNACK TO SIMULATE THE DB
const Db = {
    albums: albums,
    artists: artists,
    albumsPerYear: albumsPerYear,
    albumsPerCountry: albumsPerCountry,
    gemsNb: gemsNb
}

// Other
function getAlbumById(id) {
    for (let i = 0; i < albums.length; i++) {
        if(albums[i].id == id) {
            albums[i].index = i;
            return albums[i];
        }
    }
}

function getRandomAlbumsByLength(numberOfAlbumsInRandomVue, idToAvoid) {

    let randomAlbumIds = [];

    // Make sure that the databse is big enough... Otherwise infinite loop
    while (randomAlbumIds.length < numberOfAlbumsInRandomVue) {
        let randomId = Utils.randomize();
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