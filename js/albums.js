
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
        "id": "camel_camel",
        "title": "Camel",
        "artist": "Camel",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/camel_camel.jpg",
        "criteria": [7, 22, 42],
        "selectedTrackTitle": "Slow Yourself Down",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=8wN89VZGz8s"
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
        "id": "camel_the_snow_goose",
        "title": "The Snow Goose",
        "artist": "Camel",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/camel_the_snow_goose.jpg",
        "criteria": [2, 6, 9, 11, 41],
        "selectedTrackTitle": "La Princesse Perdue",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=dhkWnxNzHig"
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
        "id": "camel_rain_dances",
        "title": "Rain Dances",
        "artist": "Camel",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/camel_rain_dances.jpg",
        "criteria": [3, 11, 20],
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
        "id": "electric_light_orchestra_time",
        "title": "Time",
        "artist": "Electric Light Orchestra",
        "year": 1981,
        "country": "England",
        "cover": "img/covers/electric_light_orchestra_time.jpg",
        "criteria": [2, 9, 20, 22, 43],
        "selectedTrackTitle": "Ticket To The Moon",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=CJdZTNLkpuA"
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
        "id": "frank_zappa_joes_garage",
        "title": "Joe's Garage",
        "artist": "Frank Zappa",
        "year": 1979,
        "country": "USA",
        "cover": "img/covers/frank_zappa_joes_garage.jpg",
        "criteria": [2, 3, 9, 17, 35, 43],
        "selectedTrackTitle": "A Token Of My Extreme",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=tnSF36PBxbk"
    },
    {
        "id": "frank_zappa_broadway_the_hard_way",
        "title": "Broadway The Hard Way",
        "artist": "Frank Zappa",
        "year": 1988,
        "country": "USA",
        "cover": "img/covers/frank_zappa_broadway_the_hard_way.jpg",
        "criteria": [12, 17, 35],
        "selectedTrackTitle": "Why Don't You Like Me",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=emEOePwK0ok"
    },
    {
        "id": "fuzzy_duck_fuzzy_duck",
        "title": "Fuzzy Duck",
        "artist": "Fuzzy Duck",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/fuzzy_duck_fuzzy_duck.jpg",
        "criteria": [3, 22],
        "selectedTrackTitle": "Country Boy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=odP44_gNdNU"
    },
    {
        "id": "genesis_trespass",
        "title": "Trespass",
        "artist": "Genesis",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/genesis_trespass.jpg",
        "criteria": [3, 10, 30, 43],
        "selectedTrackTitle": "Dusk",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=R8fq7djQAnQ"
    },
    {
        "id": "genesis_nursery_cryme",
        "title": "Nursery Cryme",
        "artist": "Genesis",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/genesis_nursery_cryme.jpg",
        "criteria": [3, 10, 30, 43],
        "selectedTrackTitle": "Harold The Barrel",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=qT7k7keej0k"
    },
    {
        "id": "genesis_foxtrot",
        "title": "Foxtrot",
        "artist": "Genesis",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/genesis_foxtrot.jpg",
        "criteria": [3, 8, 10, 30, 43],
        "selectedTrackTitle": "Get 'Em Out By Friday",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Kp-TwWnn0dk"
    },
    {
        "id": "genesis_selling_england_by_the_pound",
        "title": "Selling England By The Pound",
        "artist": "Genesis",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/genesis_selling_england_by_the_pound.jpg",
        "criteria": [3, 8, 10, 30, 43],
        "selectedTrackTitle": "Firth Of Fifth",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=SD5engyVXe0"
    },
    {
        "id": "gong_gazeuse",
        "title": "Gazeuse !",
        "artist": "Gong",
        "year": 1976,
        "country": "France",
        "cover": "img/covers/gong_gazeuse.jpg",
        "criteria": [3, 6, 11, 15, 23, 42],
        "selectedTrackTitle": "Percolations",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=G0tsWMzmr-c"
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
        "id": "jade_warrior_way_of_the_sun",
        "title": "Way Of The Sun",
        "artist": "Jade Warrior",
        "year": 1978,
        "country": "England",
        "cover": "img/covers/jade_warrior_way_of_the_sun.jpg",
        "criteria": [1, 6, 9, 11, 13, 14, 15, 19],
        "selectedTrackTitle": "Heaven Stone",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=e0-VIz5MINU"
    },
    {
        "id": "magma_mekanik_destruktiw_kommandoh",
        "title": "Mëkanïk Dëstruktïẁ Kömmandöh",
        "artist": "Magma",
        "year": 1973,
        "country": "France",
        "cover": "img/covers/magma_mekanik_destruktiw_kommandoh.jpg",
        "criteria": [2, 5, 10, 19, 30, 39, 43],
        "selectedTrackTitle": "Da Zeuhl Ẁortz Mëkanïk",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=B5UZVtUC3V0"
    },
    {
        "id": "man_be_good_to_yourself_at_least_once_a_day",
        "title": "Be Good To Yourself At Least Once A Day",
        "artist": "Man",
        "year": 1972,
        "country": "Wales",
        "cover": "img/covers/man_be_good_to_yourself_at_least_once_a_day.jpg",
        "criteria": [0, 7, 22, 42],
        "selectedTrackTitle": "C'mon",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=pZIg-fJU7vI"
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
        "id": "pink_floyd_atom_heart_mother",
        "title": "Atom Heart Mother",
        "artist": "Pink Floyd",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/pink_floyd_atom_heart_mother.jpg",
        "criteria": [1, 5, 8, 16, 17, 18, 21],
        "selectedTrackTitle": "Atom Heart Mother",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=yusGUGTVAyw"
    },
    {
        "id": "pink_floyd_meddle",
        "title": "Meddle",
        "artist": "Pink Floyd",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/pink_floyd_meddle.jpg",
        "criteria": [5, 8, 16, 18, 20, 21],
        "selectedTrackTitle": "A Pillow Of Winds",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uThZ1uuLLWM"
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
        "id": "pink_floyd_wish_you_were_here",
        "title": "Wish You Were Here",
        "artist": "Pink Floyd",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/pink_floyd_wish_you_were_here.jpg",
        "criteria": [7, 8, 16, 20],
        "selectedTrackTitle": "Welcome To The Machine",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=lt-udg9zQSE"
    },
    {
        "id": "pink_floyd_animals",
        "title": "Animals",
        "artist": "Pink Floyd",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/pink_floyd_animals.jpg",
        "criteria": [1, 7, 8, 16, 21],
        "selectedTrackTitle": "Sheep",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=UqlsVZ1zxMk"
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
        "id": "pink_floyd_the_final_cut",
        "title": "The Final Cut",
        "artist": "Pink Floyd",
        "year": 1983,
        "country": "England",
        "cover": "img/covers/pink_floyd_the_final_cut.jpg",
        "criteria": [2, 9, 16, 43],
        "selectedTrackTitle": "Your Possible Pasts",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=E-ve_sgdgZs"
    },
    {
        "id": "pulsar_pollen",
        "title": "Pollen",
        "artist": "Pulsar",
        "year": 1975,
        "country": "France",
        "cover": "img/covers/pulsar_pollen.jpg",
        "criteria": [3, 6, 8, 11, 18, 20, 31, 37],
        "selectedTrackTitle": "Apaisement",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=21D_sVa_-p8"
    },
    {
        "id": "pulsar_the_strands_of_the_future",
        "title": "The Strands Of The Future",
        "artist": "Pulsar",
        "year": 1976,
        "country": "France",
        "cover": "img/covers/pulsar_the_strands_of_the_future.jpg",
        "criteria": [3, 6, 8, 11, 18, 20, 31, 37],
        "selectedTrackTitle": "The Strands Of The Future",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=KpL5htneI-c"
    },
    {
        "id": "queen_queen_II",
        "title": "Queen II",
        "artist": "Queen",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/queen_queen_II.jpg",
        "criteria": [2, 9, 10, 17, 43, 45],
        "selectedTrackTitle": "The March Of The Black Queen",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=SoBMhx_ap_g"
    },
    {
        "id": "return_to_forever_romantic_warrior",
        "title": "Romantic Warrior",
        "artist": "Return To Forever",
        "year": 1976,
        "country": "USA",
        "cover": "img/covers/return_to_forever_romantic_warrior.png",
        "criteria": [1, 3, 4, 6, 7, 8, 11, 23, 42],
        "selectedTrackTitle": "Duel Of The Jester And The Tyrant",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=sa21WPH4_U4"
    },
    {
        "id": "roger_glover_the_butterfly_ball_and_the_grasshoppers_feast",
        "title": "The Butterfly Ball And The Grasshopper's Feast",
        "artist": "Roger Glover",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/roger_glover_the_butterfly_ball_and_the_grasshoppers_feast.jpg",
        "criteria": [2, 3, 9, 17, 41, 43, 45],
        "selectedTrackTitle": "Love Is All",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=YK2Pltm8ZsQ"
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
        "criteria": [1, 11, 17, 19, 43],
        "selectedTrackTitle": "Rudy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gxW3s_Qk1dk"
    },
    {
        "id": "sweet_smoke_just_a_poke",
        "title": "Just A Poke",
        "artist": "Sweet Smoke",
        "year": 1970,
        "country": "USA",
        "cover": "img/covers/sweet_smoke_just_a_poke.jpg",
        "criteria": [7, 8, 11, 18, 19, 42],
        "selectedTrackTitle": "Baby Night",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=s6L8ZCAt3DA"
    },
    {
        "id": "sweet_smoke_darkness_to_light",
        "title": "Darkness To Light",
        "artist": "Sweet Smoke",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/sweet_smoke_darkness_to_light.jpg",
        "criteria": [8, 13, 16, 18, 21],
        "selectedTrackTitle": "Baby Night",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=s6L8ZCAt3DA"
    },
    {
        "id": "trapeze_trapeze",
        "title": "Trapeze",
        "artist": "Trapeze",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/trapeze_trapeze.jpg",
        "criteria": [11, 46],
        "selectedTrackTitle": "The Giant's Dead Hoorah!",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=zqekc2zaw9A"
    },
    {
        "id": "winterhawk_revival",
        "title": "Revival",
        "artist": "Winterhawk",
        "year": 1982,
        "country": "USA",
        "cover": "img/covers/winterhawk_revival.jpg",
        "criteria": [7, 22, 40],
        "selectedTrackTitle": "Period Of Change",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=zDW3m-LaaRc"
    },
    {
        "id": "yes_fragile",
        "title": "Fragile",
        "artist": "Yes",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/yes_fragile.jpg",
        "criteria": [3, 4, 5, 10, 16, 17, 30, 41],
        "selectedTrackTitle": "Roundabout",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-Tdu4uKSZ3M"
    },
    {
        "id": "yes_close_to_the_edge",
        "title": "Close To The Edge",
        "artist": "Yes",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/yes_close_to_the_edge.jpg",
        "criteria": [3, 4, 8, 10, 17, 30],
        "selectedTrackTitle": "Siberian Khatru",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=r0HnIr6jYWU"
    },
    {
        "id": "yes_relayer",
        "title": "Relayer",
        "artist": "Yes",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/yes_relayer.jpg",
        "criteria": [3, 4, 8, 10, 17, 30],
        "selectedTrackTitle": "The Gates Of Delirium",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=EdmUAsU2eXI"
    },
    {
        "id": "yes_going_for_the_one",
        "title": "Going For The One",
        "artist": "Yes",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/yes_going_for_the_one.jpg",
        "criteria": [10, 17, 30],
        "selectedTrackTitle": "Going For The One",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=f9GAkA7W5Qg"
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