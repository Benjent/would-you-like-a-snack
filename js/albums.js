
// TODO penser à faire une Map ?
const albums = [
    {
        "id": "pink_floyd_dark_side_of_the_moon",
        "title": "Dark Side Of The Moon",
        "artist": "Pink Floyd",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/pink_floyd_dark_side_of_the_moon.jpg",
        "criteria": [1, 3, 9, 11, 16, 20],
        "selectedTrackTitle": "Time",
        "selectedTrackYtId": "rL3AgkwbYgo"
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
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "alpha_ralpha_alpha_ralpha",
        "title": "Alpha Ralpha",
        "artist": "Alpha Ralpha",
        "year": 1977,
        "country": "France",
        "cover": "img/covers/alpha_ralpha_alpha_ralpha.jpg",
        "criteria": [6, 11, 14, 19],
        "selectedTrackTitle": "Genèse",
        "selectedTrackYtId": "jTS5f1nSurQ"
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
        "selectedTrackYtId": "JR4aCz-JZrY"
    },
    {
        "id": "camel_mirage",
        "title": "Mirage",
        "artist": "Camel",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/camel_mirage.jpg",
        "criteria": [3, 8, 11],
        "selectedTrackTitle": "Freefall",
        "selectedTrackYtId": "Gcagz8epRN8"
    },
    {
        "id": "jade_warrior_waves",
        "title": "Waves",
        "artist": "Jade Warrior",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/jade_warrior_waves.jpg",
        "criteria": [1, 6, 8, 9, 11, 13, 14, 19],
        "selectedTrackTitle": "Waves II",
        "selectedTrackYtId": "uGYpyLxDzlk"
    },
    {
        "id": "focus_focus_3",
        "title": "Focus 3",
        "artist": "Focus",
        "year": 1972,
        "country": "Netherlands",
        "cover": "img/covers/focus_focus_3.jpg",
        "criteria": [3, 4, 6, 7, 8, 19, 35],
        "selectedTrackTitle": "Sylvia",
        "selectedTrackYtId": "aig4mWJUpLw"
    },
    // {
    //     "id": "focus_moving_waves",
    //     "title": "Moving Waves",
    //     "artist": "Focus",
    //     "year": 1971,
    //     "country": "Netherlands",
    //     "cover": "img/covers/focus_moving_waves.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "shakti_natural_elements",
    //     "title": "Natural Elements",
    //     "artist": "Shakti",
    //     "year": 1977,
    //     "country": "India",
    //     "cover": "img/covers/shakti_natural_elements.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "pink_floyd_the_wall",
    //     "title": "The Wall",
    //     "artist": "Pink Floyd",
    //     "year": 1979,
    //     "country": "England",
    //     "cover": "img/covers/pink_floyd_the_wall.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "captain_beyond",
    //     "title": "Captain Beyond",
    //     "artist": "Captain Beyond",
    //     "year": 1972,
    //     "country": "England",
    //     "cover": "img/covers/captain_beyond.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "frank_zappa_hot_rats",
    //     "title": "Hot Rats",
    //     "artist": "Frank Zappa",
    //     "year": 1969,
    //     "country": "USA",
    //     "cover": "img/covers/frank_zappa_hot_rats.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "frank_zappa_apostrophe",
    //     "title": "Apostrophe (')",
    //     "artist": "Frank Zappa",
    //     "year": 1974,
    //     "country": "USA",
    //     "cover": "img/covers/frank_zappa_apostrophe.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "frank_zappa_one_size_fits_all",
    //     "title": "One Size Fits All",
    //     "artist": "Frank Zappa",
    //     "year": 1975,
    //     "country": "USA",
    //     "cover": "img/covers/frank_zappa_one_size_fits_all.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // },
    // {
    //     "id": "supertramp_crime_of_the_century",
    //     "title": "Crime Of The Century",
    //     "artist": "Supertramp",
    //     "year": 1974,
    //     "country": "England",
    //     "cover": "img/covers/supertramp_crime_of_the_century.jpg",
    //     "criteria": [2, 6, 11, 18, 21, 29],
    //     "selectedTrackTitle": "Fountain",
    //     "selectedTrackYtId": "To2NXcCRC58"
    // }
]

function getAlbumById(id) {
    for (let i = 0; i < albums.length; i++) {
        if(albums[i].id == id) {
            return albums[i]
        }
    }
}