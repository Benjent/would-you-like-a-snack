const criteria = [
    
    "Concept album",                                // 0
    "Storyline",                                    // 1

    "Odd rhythm signatures",                        // 2
    "Technical",                                    // 3
    "Experimental",                                 // 4
    "Mainly instrumental",                          // 5
    "Jam-oriented",                                 // 6
    "Lengthy tracks",                               // 7
    "Tracks have transitions",                      // 8
    "Symphonic",                                    // 9
    "Rather soft",                                  // 10
    "Live album",                                   // 11
    "Oriental",                                   // 11
    "Ambient",                                   // 11
    "Uncommon instruments",                                   // 11

    "Uses sound collages",                          // 12
    "Blends many music genres",                     // 13
    "Contains psychedelic elements",                // 14
    "Contains jazz elements",                       // 15
    "Contains electronic elements",                 // 16
    "Contains folk elements",                       // 17
    "Rock-based with a Prog touch",                 // 18
    "Jazz-based with a Prog touch",                 // 19

    "Old-school",                                   // 20
    "Sound of the late 60's",                       // 20
    "Sound of the early 70's",                      // 21
    "Sound of the late 70's",                       // 22
    "Sound of the 80's",                            // 23
    "Modern",                                       // 24

    "Spectacular",                                  // 25
    "Humble",                                       // 26

    "Sci-fi",                                       // 27
    "Medieval",                                     // 28
    "Fantasy",                                      // 
    "Funny",                                      // 

    "Italian sung",                                      // 
    "French sung",                                      // 
    "Spanish sung",                                      // 
    "Zeuhl",                                      // 

    "Easy to grasp musically"                       // 29
]

// TODO penser à faire une Map ?

const albums = [
    {
        "id": "pink_floyd_dark_side_of_the_moon",
        "title": "Dark Side Of The Moon",
        "artist": "Pink Floyd",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/pink_floyd_dark_side_of_the_moon.jpg",
        "criteria": [0, 2, 10, 12, 16, 21],
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
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "alpha_ralpha",
        "title": "Alpha Ralpha",
        "artist": "Alpha Ralpha",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/alpha_ralpha.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "camel_moonmadness",
        "title": "Moonmadness",
        "artist": "Camel",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/camel_moonmadness.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "camel_mirage",
        "title": "Mirage",
        "artist": "Camel",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/camel_mirage.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "jade_warrior_waves",
        "title": "Waves",
        "artist": "Jade Warrior",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/jade_warrior_waves.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "focus_focus_3",
        "title": "Focus 3",
        "artist": "Focus",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/focus_focus_3.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "focus_moving_waves",
        "title": "Moving Waves",
        "artist": "Focus",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/focus_moving_waves.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "shakti_natural_elements",
        "title": "Natural Elements",
        "artist": "Shakti",
        "year": 1977,
        "country": "India",
        "cover": "img/covers/shakti_natural_elements.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "pink_floyd_the_wall",
        "title": "The Wall",
        "artist": "Pink Floyd",
        "year": 1979,
        "country": "England",
        "cover": "img/covers/pink_floyd_the_wall.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "captain_beyond",
        "title": "Captain Beyond",
        "artist": "Captain Beyond",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/captain_beyond.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "frank_zappa_hot_rats",
        "title": "Hot Rats",
        "artist": "Frank Zappa",
        "year": 1969,
        "country": "USA",
        "cover": "img/covers/frank_zappa_hot_rats.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "frank_zappa_apostrophe",
        "title": "Apostrophe (')",
        "artist": "Frank Zappa",
        "year": 1974,
        "country": "USA",
        "cover": "img/covers/frank_zappa_apostrophe.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "frank_zappa_one_size_fits_all",
        "title": "One Size Fits All",
        "artist": "Frank Zappa",
        "year": 1975,
        "country": "USA",
        "cover": "img/covers/frank_zappa_one_size_fits_all.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    },
    {
        "id": "supertramp_crime_of_the_century",
        "title": "Crime Of The Century",
        "artist": "Supertramp",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/supertramp_crime_of_the_century.jpg",
        "criteria": [2, 6, 11, 18, 21, 29],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "To2NXcCRC58"
    }
]

function getAlbumById(id) {
    for (let i = 0; i < albums.length; i++) {
        if(albums[i].id == id) {
            return albums[i]
        }
    }
}