
// TODO penser à faire une Map ?
const albums = [
    {
        "id": "alpha_ralpha_alpha_ralpha",
        "title": "Alpha Ralpha",
        "artist": "Alpha Ralpha",
        "year": 1977,
        "country": "France",
        "cover": "img/covers/alpha_ralpha_alpha_ralpha.jpg",
        "criteria": [6, 11, 14, 19],
        "selectedTrackTitle": "Genèse",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=jTS5f1nSurQ"
    },
    {
        "id": "badger_one_live_badger",
        "title": "One Live Badger",
        "artist": "Badger",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/badger_one_live_badger.jpg",
        "criteria": [0, 3, 7, 12, 22],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=To2NXcCRC58"
    },
    {
        "id": "camel_mirage",
        "title": "Mirage",
        "artist": "Camel",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/camel_mirage.jpg",
        "criteria": [3, 8, 11, 42],
        "selectedTrackTitle": "Freefall",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Gcagz8epRN8"
    },
    {
        "id": "camel_moonmadness",
        "title": "Moonmadness",
        "artist": "Camel",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/camel_moonmadness.jpg",
        "criteria": [3, 11, 19],
        "selectedTrackTitle": "Air Born",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=JR4aCz-JZrY"
    },
    {
        "id": "captain_beyond_captain_beyond",
        "title": "Captain Beyond",
        "artist": "Captain Beyond",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/captain_beyond_captain_beyond.jpg",
        "criteria": [2, 3, 9, 40, 41],
        "selectedTrackTitle": "As The Moon Speaks (Part I)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=wm61ROOZ5ek"
    },
    {
        "id": "focus_moving_waves",
        "title": "Moving Waves",
        "artist": "Focus",
        "year": 1971,
        "country": "Netherlands",
        "cover": "img/covers/focus_moving_waves.jpg",
        "criteria": [6, 8, 10, , 11, 19, 35],
        "selectedTrackTitle": "Janis",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vx-JzRzsCss"
    },
    {
        "id": "focus_focus_3",
        "title": "Focus 3",
        "artist": "Focus",
        "year": 1972,
        "country": "Netherlands",
        "cover": "img/covers/focus_focus_3.jpg",
        "criteria": [3, 4, 6, 7, 8, 19, 35, 42],
        "selectedTrackTitle": "Sylvia",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=aig4mWJUpLw"
    },
    {
        "id": "frank_zappa_hot_rats",
        "title": "Hot Rats",
        "artist": "Frank Zappa",
        "year": 1969,
        "country": "USA",
        "cover": "img/covers/frank_zappa_hot_rats.jpg",
        "criteria": [6, 7, 15, 23, 35, 42],
        "selectedTrackTitle": "Peaches En Regalia",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=zprYyWMcUGY"
    },
    {
        "id": "frank_zappa_waka_jawaka",
        "title": "Waka/Jawaka",
        "artist": "Frank Zappa",
        "year": 1972,
        "country": "USA",
        "cover": "img/covers/frank_zappa_waka_jawaka.jpg",
        "criteria": [3, 4, 6, 7, 8, 15, 23, 35, 42],
        "selectedTrackTitle": "It Just Might Be A One-Shot Deal",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3expVNVi6Gw"
    },
    {
        "id": "frank_zappa_apostrophe",
        "title": "Apostrophe (')",
        "artist": "Frank Zappa",
        "year": 1974,
        "country": "USA",
        "cover": "img/covers/frank_zappa_apostrophe.jpg",
        "criteria": [2, 3, 9, 17, 22, 35],
        "selectedTrackTitle": "Father O'blivion",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=2XO7xSwYVZI"
    },
    {
        "id": "frank_zappa_one_size_fits_all",
        "title": "One Size Fits All",
        "artist": "Frank Zappa",
        "year": 1975,
        "country": "USA",
        "cover": "img/covers/frank_zappa_one_size_fits_all.jpg",
        "criteria": [3, 15, 17, 35],
        "selectedTrackTitle": "Andy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3hAUvgZmjlg"
    },
    {
        "id": "frank_zappa_zoot_allures",
        "title": "Zoot Allures",
        "artist": "Frank Zappa",
        "year": 1976,
        "country": "USA",
        "cover": "img/covers/frank_zappa_zoot_allures.jpg",
        "criteria": [18, 22, 35],
        "selectedTrackTitle": "Zoot Allures",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=fdQmhhi5cLI"
    },
    {
        "id": "jade_warrior_waves",
        "title": "Waves",
        "artist": "Jade Warrior",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/jade_warrior_waves.jpg",
        "criteria": [1, 6, 8, 9, 11, 13, 14, 19],
        "selectedTrackTitle": "Waves (Part II)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uGYpyLxDzlk"
    },
    {
        "id": "museo_rosenbach_zarathustra",
        "title": "Zarathustra",
        "artist": "Museo Rosenbach",
        "year": 1973,
        "country": "Italy",
        "cover": "img/covers/museo_rosenbach_zarathustra.jpg",
        "criteria": [1, 9, 10, 30, 36],
        "selectedTrackTitle": "Zarathustra I: L'ultimo Uomo",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uC9hegZIC2g"
    },
    {
        "id": "pink_floyd_dark_side_of_the_moon",
        "title": "Dark Side Of The Moon",
        "artist": "Pink Floyd",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/pink_floyd_dark_side_of_the_moon.jpg",
        "criteria": [1, 3, 9, 11, 16, 20],
        "selectedTrackTitle": "Time",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=rL3AgkwbYgo"
    },
    {
        "id": "pink_floyd_the_wall",
        "title": "The Wall",
        "artist": "Pink Floyd",
        "year": 1979,
        "country": "England",
        "cover": "img/covers/pink_floyd_the_wall.jpg",
        "criteria": [1, 9, 16, 17, 30, 43],
        "selectedTrackTitle": "The Trial",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=4fa7AtI1msk"
    },
    {
        "id": "shakti_natural_elements",
        "title": "Natural Elements",
        "artist": "Shakti",
        "year": 1977,
        "country": "India",
        "cover": "img/covers/shakti_natural_elements.jpg",
        "criteria": [1, 3, 4, 6, 7, 13, 15, 19, 21],
        "selectedTrackTitle": "Mind Ecology",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=d_DajSHROJA"
    },
    {
        "id": "supertramp_crime_of_the_century",
        "title": "Crime Of The Century",
        "artist": "Supertramp",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/supertramp_crime_of_the_century.jpg",
        "criteria": [1, 2, 11, 17, 19],
        "selectedTrackTitle": "Rudy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gxW3s_Qk1dk"
    }

]

let artists = [];

for (let i = 0; i < albums.length; i++) {
    if (!artists.includes(albums[i].artist)) {
        artists.push(albums[i].artist);
    }
}

function getAlbumById(id) {
    for (let i = 0; i < albums.length; i++) {
        if(albums[i].id == id) {
            return albums[i]
        }
    }
}

function getRandomAlbumsByLength(numberOfAlbumsInRandomVue, idToAvoid) {

    let randomAlbumIds = [];

    // Make sure that the databse is big enough... Otherwise infinite loop
    while (randomAlbumIds.length < numberOfAlbumsInRandomVue) {
        let randomId = randomize();
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