
// TODO penser à faire une Map ?
const albums = [
    // ************************************************************************************ //
    // **************************************** A **************************************** //
    // ********************************************************************************** //
    {
        "id": "agora_live_in_montreux",
        "title": "Live In Montreux",
        "artist": "Agorà",
        "year": 1975,
        "country": "Italy",
        "cover": "img/covers/agora_live_in_montreux.jpg",
        "criteria": [6, 7, 11, 12, 14, 23],
        "selectedTrackTitle": "L'Orto Di Ovidio",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=IoBMXLfGAuo"
    },
    {
        "id": "agora_agora_2",
        "title": "Agorà 2",
        "artist": "Agorà",
        "year": 1976,
        "country": "Italy",
        "cover": "img/covers/agora_agora_2.jpg",
        "criteria": [6, 7, 11, 14, 15, 23],
        "selectedTrackTitle": "Tall El Zaatar",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=9AvuK3lwNuM"
    },
    {
        "id": "the_alan_parsons_project_i_robot",
        "title": "I Robot",
        "artist": "The Alan Parsons Project",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/the_alan_parsons_project_i_robot.jpg",
        "criteria": [9, 15, 18, 20, 42, 48],
        "selectedTrackTitle": "I Robot",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=u7oAuba3Ekg"
    },
    {
        "id": "the_alan_parsons_project_pyramid",
        "title": "Pyramid",
        "artist": "The Alan Parsons Project",
        "year": 1978,
        "country": "England",
        "cover": "img/covers/the_alan_parsons_project_pyramid.jpg",
        "criteria": [20, 42, 48],
        "selectedTrackTitle": "Hyper-Gamma-Spaces",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Am5Rloqqk0U"
    },
    {
        "id": "alice_cooper_from_the_inside",
        "title": "From The Inside",
        "artist": "Alice Cooper",
        "year": 1978,
        "country": "USA",
        "cover": "img/covers/alice_cooper_from_the_inside.jpg",
        "criteria": [2, 43, 48],
        "selectedTrackTitle": "Nurse Rozetta",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=R-h13lDzGNo"
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
        "selectedTrackYtId": "https://www.youtube.com/watch?v=jTS5f1nSurQ"
    },
    {
        "id": "amon_duul_paradieswarts_duul",
        "title": "Paradieswärts Düül",
        "artist": "Amon Düül",
        "year": 1970,
        "country": "Germany",
        "cover": "img/covers/amon_duul_paradieswarts_duul.jpg",
        "criteria": [6, 7, 8, 11, 18, 46],
        "selectedTrackTitle": "Love Is Peace",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=oUNxXhzF0fw"
    },
    {
        "id": "aphrodites_child_666",
        "title": "666",
        "artist": "Aphrodite's Child",
        "year": 1972,
        "country": "Greece",
        "cover": "img/covers/aphrodites_child_666.png",
        "criteria": [1, 5, 6, 8, 9, 10, 15, 18, 20, 41],
        "selectedTrackTitle": "The Lamb",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=hbTHgL4pu_A"
    },
    {
        "id": "arachnoid_arachnoid",
        "title": "Arachnoïd",
        "artist": "Arachnoïd",
        "year": 1979,
        "country": "France",
        "cover": "img/covers/arachnoid_arachnoid.jpg",
        "criteria": [1, 18, 19, 37],
        "selectedTrackTitle": "Le Chamadère",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=6v5NjAeKNE0"
    },
    {
        "id": "arti_mestieri_tilt",
        "title": "Tilt",
        "artist": "Arti & Mestieri",
        "year": 1974,
        "country": "Italy",
        "cover": "img/covers/arti_mestieri_tilt.jpg",
        "criteria": [3, 4, 6, 7, 9, 15, 19, 36, 42],
        "selectedTrackTitle": "Positivo/Negativo",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=DC_K3w6gi2Q"
    },
    {
        "id": "arti_mestieri_giro_di_valzer_per_domani",
        "title": "Giro Di Valzer Per Domani",
        "artist": "Arti & Mestieri",
        "year": 1975,
        "country": "Italy",
        "cover": "img/covers/arti_mestieri_giro_di_valzer_per_domani.jpg",
        "criteria": [3, 4, 6, 7, 15, 19, 30, 36, 41, 42],
        "selectedTrackTitle": "Valzer Per Domani",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=NDBj39DGVRw"
    },
    {
        "id": "asia_asia",
        "title": "Asia",
        "artist": "Asia",
        "year": 1982,
        "country": "England",
        "cover": "img/covers/asia_asia.jpg",
        "criteria": [7, 20, 22],
        "selectedTrackTitle": "Time Again",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=YCWNYKRtRFs"
    },
    {
        "id": "asia_alpha",
        "title": "Alpha",
        "artist": "Asia",
        "year": 1983,
        "country": "England",
        "cover": "img/covers/asia_alpha.jpg",
        "criteria": [7, 20, 22],
        "selectedTrackTitle": "The Heat Goes On",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Hbw3HA3lMMU"
    },
    {
        "id": "asia_astra",
        "title": "Astra",
        "artist": "Asia",
        "year": 1985,
        "country": "England",
        "cover": "img/covers/asia_astra.jpg",
        "criteria": [7, 20, 22],
        "selectedTrackTitle": "Go",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=9TiGDuI9d6Y"
    },
    {
        "id": "atomic_rooster_in_hearing_of_atomic_rooster",
        "title": "In Hearing Of Atomic Rooster",
        "artist": "Atomic Rooster",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/atomic_rooster_in_hearing_of_atomic_rooster.jpg",
        "criteria": [7, 22],
        "selectedTrackTitle": "Breakthrough",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=lgqFPcKpfEg"
    },
    {
        "id": "atoll_musiciens_magiciens",
        "title": "Musiciens-Magiciens",
        "artist": "Atoll",
        "year": 1974,
        "country": "France",
        "cover": "img/covers/atoll_musiciens_magiciens.jpg",
        "criteria": [9, 19, 37, 42],
        "selectedTrackTitle": "Au-Delà Des Écrans De Cristal",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7FqCY8N06HU"
    },
    {
        "id": "atoll_laraignee_mal",
        "title": "L'araignée-Mal",
        "artist": "Atoll",
        "year": 1975,
        "country": "France",
        "cover": "img/covers/atoll_laraignee_mal.jpg",
        "criteria": [9, 19, 37, 42],
        "selectedTrackTitle": "L'araignée-Mal",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Wm6vFufqm6s"
    },
    // ************************************************************************************ //
    // **************************************** B **************************************** //
    // ********************************************************************************** //
    {
        "id": "badger_one_live_badger",
        "title": "One Live Badger",
        "artist": "Badger",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/badger_one_live_badger.jpg",
        "criteria": [0, 3, 7, 12, 22, 47],
        "selectedTrackTitle": "Fountain",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=To2NXcCRC58"
    },
    {
        "id": "bachdenkel_lemmings",
        "title": "Lemmings",
        "artist": "Bachdenkel",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/bachdenkel_lemmings.jpg",
        "criteria": [11, 18],
        "selectedTrackTitle": "Translation",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=FSaajW7QHwk"
    },
    {
        "id": "bachdenkel_cталинград",
        "title": "Сталинград",
        "artist": "Bachdenkel",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/bachdenkel_cталинград.jpg",
        "criteria": [11, 18],
        "selectedTrackTitle": "The Whole World",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=qZQ4WaJe90g"
    },
    {
        "id": "the_beatles_sgt_peppers_lonely_hearts_club_band",
        "title": "Sgt. Pepper's Lonely Hearts Club Band",
        "artist": "The Beatles",
        "year": 1967,
        "country": "England",
        "cover": "img/covers/the_beatles_sgt_peppers_lonely_hearts_club_band.jpg",
        "criteria": [1, 9, 15, 16, 17, 41, 45],
        "selectedTrackTitle": "A Day In The Life",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=usNsCeOV4GM"
    },
    {
        "id": "the_beatles_yellow_submarine",
        "title": "Yellow Submarine",
        "artist": "The Beatles",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/the_beatles_yellow_submarine.jpg",
        "criteria": [1, 10, 15, 16, 18, 45, 49],
        "selectedTrackTitle": "Yellow Submarine",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=m2uTFF_3MaA"
    },
    {
        "id": "the_beatles_abbey_road",
        "title": "Abbey Road",
        "artist": "The Beatles",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/the_beatles_abbey_road.jpg",
        "criteria": [9, 18, 35, 41],
        "selectedTrackTitle": "She Came In Through The Bathroom Window",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=o14wVjw3HfQ"
    },
    {
        "id": "black_sabbath_sabotage",
        "title": "Sabotage",
        "artist": "Black Sabbath",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/black_sabbath_sabotage.jpg",
        "criteria": [9, 40],
        "selectedTrackTitle": "The Writ",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=iyXqWzZ_8sM"
    },
    {
        "id": "black_widow_sacrifice",
        "title": "Sacrifice",
        "artist": "Black Widow",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/black_widow_sacrifice.jpg",
        "criteria": [1, 15, 18, 42],
        "selectedTrackTitle": "In Ancient Days",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=yGKt65hTItU"
    },
    {
        "id": "black_widow_black_widow",
        "title": "Black Widow",
        "artist": "Black Widow",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/black_widow_black_widow.jpg",
        "criteria": [18],
        "selectedTrackTitle": "Tears And Wine",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=bDk2hX1hsUc"
    },
    {
        "id": "bloodrock_passage",
        "title": "Passage",
        "artist": "Bloodrock",
        "year": 1972,
        "country": "USA",
        "cover": "img/covers/bloodrock_passage.jpg",
        "criteria": [3, 18, 21, 22],
        "selectedTrackTitle": "Lost Fame",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=5n_a4wR972M"
    },
    {
        "id": "bloodrock_whirlwind_tongues",
        "title": "Whirlwind",
        "artist": "Bloodrock",
        "year": 1974,
        "country": "USA",
        "cover": "img/covers/bloodrock_whirlwind_tongues.jpg",
        "criteria": [3, 18, 21, 22],
        "selectedTrackTitle": "Stilled By Whirlwind Tongues",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=CfwD6SCQtjE"
    },
    {
        "id": "brave_new_world_impressions_on_reading_aldous_huxley",
        "title": "Impressions On Reading Aldous Huxley",
        "artist": "Brave New World",
        "year": 1972,
        "country": "Germany",
        "cover": "img/covers/brave_new_world_impressions_on_reading_aldous_huxley.jpg",
        "criteria": [1, 6, 7, 8, 9, 15, 18, 19, 20],
        "selectedTrackTitle": "Lenina",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3eHj2-iltEg"
    },
    {
        "id": "bubu_anabelas",
        "title": "Anabelas",
        "artist": "Bubu",
        "year": 1978,
        "country": "Argentina",
        "cover": "img/covers/bubu_anabelas.jpg",
        "criteria": [6, 8, 18, 19, 38, 42],
        "selectedTrackTitle": "El Viaje De Anabelas",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-5pmx5tZ-80"
    },
    {
        "id": "budgie_budgie",
        "title": "Budgie",
        "artist": "Budgie",
        "year": 1971,
        "country": "Wales",
        "cover": "img/covers/budgie_budgie.jpg",
        "criteria": [7, 22, 40],
        "selectedTrackTitle": "The Author",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=lrQd56l4adE"
    },
    {
        "id": "busqueda_busqueda",
        "title": "Búsqueda",
        "artist": "Búsqueda",
        "year": 1978,
        "country": "Argentina",
        "cover": "img/covers/busqueda_busqueda.jpg",
        "criteria": [11, 31, 38, 46],
        "selectedTrackTitle": "La Forma De Tu Vita",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=npJ--wejC6c"
    },
    // ************************************************************************************ //
    // **************************************** C **************************************** //
    // ********************************************************************************** //
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
        "id": "can_future_days",
        "title": "Future Days",
        "artist": "Can",
        "year": 1973,
        "country": "Germany",
        "cover": "img/covers/can_future_days.jpg",
        "criteria": [6, 7, 8, 11, 14, 15, 19, 42],
        "selectedTrackTitle": "Future Days",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-JKb5xbYkYg"
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
        "id": "caravan_in_the_land_of_grey_and_pink",
        "title": "In The Land Of Grey And Pink",
        "artist": "Caravan",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/caravan_in_the_land_of_grey_and_pink.jpg",
        "criteria": [7, 8, 11, 21],
        "selectedTrackTitle": "Winter Wine",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=l2ZrJdmnHIw"
    },
    {
        "id": "cat_stevens_foreigner",
        "title": "Foreigner",
        "artist": "Cat Stevens",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/cat_stevens_foreigner.jpg",
        "criteria": [8, 19, 21, 47],
        "selectedTrackTitle": "Foreigner Suite",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=KOC_LkgNAHU"
    },
    {
        "id": "coma_financial_tycoon",
        "title": "Financial Tycoon",
        "artist": "Coma",
        "year": 1977,
        "country": "Denmark",
        "cover": "img/covers/coma_financial_tycoon.jpg",
        "criteria": [1, 3, 6, 7, 15, 18, 19, 35, 42],
        "selectedTrackTitle": "Foreigner Suite",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=QOJXZbwHPNI"
    },
    {
        "id": "coven_witchcraft_destroys_minds_and_reaps_souls",
        "title": "Witchcraft Destroys Minds & Reaps Souls",
        "artist": "Coven",
        "year": 1969,
        "country": "USA",
        "cover": "img/covers/coven_witchcraft_destroys_minds_and_reaps_souls.jpg",
        "criteria": [1, 18, 22, 40, 42],
        "selectedTrackTitle": "The White Witch Of Rose Hall",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=TSKJ9C_QX18"
    },
    {
        "id": "the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown",
        "title": "The Crazy World Of Arthur Brown",
        "artist": "The Crazy World Of Arthur Brown",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown.png",
        "criteria": [1, 9, 18, 35, 41, 45],
        "selectedTrackTitle": "Fire",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=FaHEusBG20c"
    },
    {
        "id": "curved_air_air_cut",
        "title": "Air Cut",
        "artist": "Curved Air",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/curved_air_air_cut.jpg",
        "criteria": [21],
        "selectedTrackTitle": "Metamorphosis",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uZAImsmFGhk"
    },
    // ************************************************************************************ //
    // **************************************** D **************************************** //
    // ********************************************************************************** //
    {
        "id": "david_bowie_space_oddity",
        "title": "Space Oddity",
        "artist": "David Bowie",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/david_bowie_space_oddity.jpg",
        "criteria": [21, 48],
        "selectedTrackTitle": "Space Oddity",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=iYYRH4apXDo"
    },
    {
        "id": "david_bowie_the_man_who_sold_the_world",
        "title": "The Man Who Sold The World",
        "artist": "David Bowie",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/david_bowie_the_man_who_sold_the_world.jpg",
        "criteria": [21, 48],
        "selectedTrackTitle": "The Width Of A Circle",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=s2L4hL2IvUk"
    },
    {
        "id": "david_bowie_hunky_dory",
        "title": "Hunky Dory",
        "artist": "David Bowie",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/david_bowie_hunky_dory.jpg",
        "criteria": [3, 21, 48],
        "selectedTrackTitle": "Life On Mars?",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=v--IqqusnNQ"
    },
    {
        "id": "david_bowie_the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars",
        "title": "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars",
        "artist": "David Bowie",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/david_bowie_the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars.jpg",
        "criteria": [1, 21, 43, 48],
        "selectedTrackTitle": "Starman",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=EYQTGF1hXVI"
    },
    {
        "id": "deep_purple_the_book_of_taliesyn",
        "title": "The Book Of Taliesyn",
        "artist": "Deep Purple",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/deep_purple_the_book_of_taliesyn.jpg",
        "criteria": [7, 18, 20],
        "selectedTrackTitle": "Listen, Learn, Read On",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uYZaXo4jOu0"
    },
    {
        "id": "deep_purple_deep_purple",
        "title": "Deep Purple",
        "artist": "Deep Purple",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/deep_purple_deep_purple.jpg",
        "criteria": [7, 18, 20],
        "selectedTrackTitle": "April",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=2eRTQnSzoUI"
    },
    {
        "id": "deep_purple_machine_head",
        "title": "Machine Head",
        "artist": "Deep Purple",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/deep_purple_machine_head.jpg",
        "criteria": [3, 7, 22, 40],
        "selectedTrackTitle": "Lazy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=STFWapwyqMo"
    },
    {
        "id": "dr_dopo_jam_entree",
        "title": "Entrée",
        "artist": "Dr. Dopo Jam",
        "year": 1973,
        "country": "Denmark",
        "cover": "img/covers/dr_dopo_jam_entree.jpg",
        "criteria": [3, 7, 8, 15, 18, 19, 35, 42],
        "selectedTrackTitle": "Opening",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=ymeBpnDr4Lw"
    },
    // ************************************************************************************ //
    // **************************************** E **************************************** //
    // ********************************************************************************** //
    {
        "id": "earthrise_earthrise",
        "title": "Earthrise",
        "artist": "Earthrise",
        "year": 1978,
        "country": "USA",
        "cover": "img/covers/earthrise_earthrise.jpg",
        "criteria": [1, 3, 6, 7, 11, 19, 20, 42],
        "selectedTrackTitle": "Arcturus",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=4YDGiubWxvw"
    },
    {
        "id": "electric_light_orchestra_time",
        "title": "Time",
        "artist": "Electric Light Orchestra",
        "year": 1981,
        "country": "England",
        "cover": "img/covers/electric_light_orchestra_time.jpg",
        "criteria": [2, 9, 43, 44],
        "selectedTrackTitle": "Ticket To The Moon",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=CJdZTNLkpuA"
    },
    {
        "id": "eloy_ocean",
        "title": "Ocean",
        "artist": "Eloy",
        "year": 1977,
        "country": "Germany",
        "cover": "img/covers/eloy_ocean.jpg",
        "criteria": [1, 7, 8, 10, 20, 43],
        "selectedTrackTitle": "Poseidon's Creation",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=NIeO4IAhpGM"
    },
    {
        "id": "eloy_silent_cries_and_mighty_echoes",
        "title": "Silent Cries And Mighty Echoes",
        "artist": "Eloy",
        "year": 1979,
        "country": "Germany",
        "cover": "img/covers/eloy_silent_cries_and_mighty_echoes.jpg",
        "criteria": [7, 8, 10, 20],
        "selectedTrackTitle": "Master Of Sensation",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=GzJ8a29jvMU"
    },
    {
        "id": "eloy_colours",
        "title": "Colours",
        "artist": "Eloy",
        "year": 1980,
        "country": "Germany",
        "cover": "img/covers/eloy_colours.jpg",
        "criteria": [7, 10, 20],
        "selectedTrackTitle": "Giant",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=E1X0euUgYgA"
    },
    // ************************************************************************************ //
    // **************************************** F **************************************** //
    // ********************************************************************************** //
    {
        "id": "fm_black_noise",
        "title": "Black Noise",
        "artist": "FM",
        "year": 1978,
        "country": "Canada",
        "cover": "img/covers/fm_black_noise.jpg",
        "criteria": [2, 7, 43, 44],
        "selectedTrackTitle": "Slaughter In Robot Village",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vx-8oTLXkIvu7M"
    },
    {
        "id": "focus_in_and_out_of_focus",
        "title": "In And Out Of Focus",
        "artist": "Focus",
        "year": 1970,
        "country": "Netherlands",
        "cover": "img/covers/focus_in_and_out_of_focus.jpg",
        "criteria": [6, 11, 19, 22, 31, 42],
        "selectedTrackTitle": "House Of The King",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vx-g0C4iHTEJ9o"
    },
    {
        "id": "focus_moving_waves",
        "title": "Moving Waves",
        "artist": "Focus",
        "year": 1971,
        "country": "Netherlands",
        "cover": "img/covers/focus_moving_waves.jpg",
        "criteria": [6, 8, 10, 11, 19, 35],
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
        "criteria": [3, 4, 6, 7, 8, 19, 33, 35, 42],
        "selectedTrackTitle": "Sylvia",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=aig4mWJUpLw"
    },
    {
        "id": "focus_hamburger_concerto",
        "title": "Hamburger Concerto",
        "artist": "Focus",
        "year": 1974,
        "country": "Netherlands",
        "cover": "img/covers/focus_hamburger_concerto.jpg",
        "criteria": [6, 8, 10, 19, 33],
        "selectedTrackTitle": "La Cathédrale De Strasbourg",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=HowIDiFOHwY"
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
        "id": "frank_zappa_the_grand_wazoo",
        "title": "The Grand Wazoo",
        "artist": "Frank Zappa",
        "year": 1972,
        "country": "USA",
        "cover": "img/covers/frank_zappa_the_grand_wazoo.jpg",
        "criteria": [3, 6, 7, 8, 15, 23, 35, 42, 45],
        "selectedTrackTitle": "Cletus Awreetus-Awrightus",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=cu_kJ4jEJ9A"
    },
    {
        "id": "frank_zappa_over_nite_sensation",
        "title": "Over-Nite Sensation",
        "artist": "Frank Zappa",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/frank_zappa_over_nite_sensation.jpg",
        "criteria": [3, 18, 19, 22, 35, 40, 42],
        "selectedTrackTitle": "Zomby Woof",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=ksnwEsPKO5s"
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
        "id": "frank_zappa_sheik_yerbouti",
        "title": "Sheik Yerbouti",
        "artist": "Frank Zappa",
        "year": 1979,
        "country": "USA",
        "cover": "img/covers/frank_zappa_sheik_yerbouti.jpg",
        "criteria": [7, 12, 16, 18, 22, 35, 40, 41],
        "selectedTrackTitle": "City Of Tiny Lites",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=cMe7ZFMBGdo"
    },
    {
        "id": "frank_zappa_joes_garage",
        "title": "Joe's Garage",
        "artist": "Frank Zappa",
        "year": 1979,
        "country": "USA",
        "cover": "img/covers/frank_zappa_joes_garage.jpg",
        "criteria": [2, 3, 9, 17, 35, 42, 43],
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
        "id": "fuhrs_and_frohling_strings",
        "title": "Strings",
        "artist": "Führs & Fröhling",
        "year": 1979,
        "country": "Germany",
        "cover": "img/covers/fuhrs_and_frohling_strings.jpg",
        "criteria": [6, 7, 21, 44],
        "selectedTrackTitle": "Morning Bird",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=RV0RD6SthNI"
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
    // ************************************************************************************ //
    // **************************************** G **************************************** //
    // ********************************************************************************** //
    {
        "id": "genesis_trespass",
        "title": "Trespass",
        "artist": "Genesis",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/genesis_trespass.jpg",
        "criteria": [3, 10, 30, 43, 47],
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
        "criteria": [3, 10, 30, 43, 47],
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
        "criteria": [3, 8, 10, 30, 43, 47],
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
        "criteria": [3, 8, 10, 30, 43, 47],
        "selectedTrackTitle": "Firth Of Fifth",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=SD5engyVXe0"
    },
    {
        "id": "gnidrolog_lady_lake",
        "title": "Lady Lake",
        "artist": "Gnidrolog",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/gnidrolog_lady_lake.jpeg",
        "criteria": [19, 21],
        "selectedTrackTitle": "Lady Lake",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3LdNEFRkbGk"
    },
    {
        "id": "gong_flying_teapot",
        "title": "Flying Teapot",
        "artist": "Gong",
        "year": 1973,
        "country": "France",
        "cover": "img/covers/gong_flying_teapot.jpg",
        "criteria": [2, 3, 7, 9, 18, 19, 20, 35, 42, 50],
        "selectedTrackTitle": "Flying Teapot",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=SIgzP4Rj0Ns"
    },
    {
        "id": "gong_angels_egg",
        "title": "Angels Egg",
        "artist": "Gong",
        "year": 1973,
        "country": "France",
        "cover": "img/covers/gong_angels_egg.jpg",
        "criteria": [2, 3, 9, 18, 20, 41, 50],
        "selectedTrackTitle": "Oily Way",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=xZWW1ClYxYo"
    },
    {
        "id": "gong_you",
        "title": "You",
        "artist": "Gong",
        "year": 1974,
        "country": "France",
        "cover": "img/covers/gong_you.jpg",
        "criteria": [2, 9, 15, 18, 19, 20, 50],
        "selectedTrackTitle": "Master Builder",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=CKfTKNp_yUI"
    },
    {
        "id": "gong_shamal",
        "title": "Shamal",
        "artist": "Gong",
        "year": 1975,
        "country": "France",
        "cover": "img/covers/gong_shamal.jpg",
        "criteria": [3, 6, 11, 15, 23, 42],
        "selectedTrackTitle": "Mandrake",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Ks9YscGny8g"
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
        "id": "gryphon_red_queen_to_gryphon_three",
        "title": "Red Queen To Gryphon Three",
        "artist": "Gryphon",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/gryphon_red_queen_to_gryphon_three.jpg",
        "criteria": [1, 3, 6, 8, 15, 21, 33, 42],
        "selectedTrackTitle": "Second Spasm",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=EcBm-GbbEyI"
    },
    // ************************************************************************************ //
    // **************************************** H **************************************** //
    // ********************************************************************************** //
    {
        "id": "harmonium_si_on_avait_besoin_dune_cinquieme_saison",
        "title": "Si On Avait Besoin D'une Cinquième Saison",
        "artist": "Harmonium",
        "year": 1975,
        "country": "Quebec",
        "cover": "img/covers/harmonium_si_on_avait_besoin_dune_cinquieme_saison.jpg",
        "criteria": [8, 11, 19, 21, 42],
        "selectedTrackTitle": "Depuis L'automne",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=sCkkxr7tS7c"
    },
    {
        "id": "hawkwind_in_search_of_space",
        "title": "In Search Of Space",
        "artist": "Hawkwind",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/hawkwind_in_search_of_space.jpg",
        "criteria": [7, 8, 18, 20, 40, 50],
        "selectedTrackTitle": "Masters Of The Universe",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=X3W7ch0oLeA"
    },
    {
        "id": "hawkwind_doremi_fasol_latido",
        "title": "Doremi Fasol Latido",
        "artist": "Hawkwind",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/hawkwind_doremi_fasol_latido.jpg",
        "criteria": [7, 18, 20, 40, 50],
        "selectedTrackTitle": "Time We Left This World Today",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=X5SRYtPLDLI"
    },
    {
        "id": "hawkwind_hall_of_the_mountain_grill",
        "title": "Hall Of The Mountain Grill",
        "artist": "Hawkwind",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/hawkwind_hall_of_the_mountain_grill.jpg",
        "criteria": [7, 18, 20, 40, 50],
        "selectedTrackTitle": "The Psychedelic Warlords",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=MvHtfoqcDss"
    },
    {
        "id": "hawkwind_warriors_on_the_edge_of_time",
        "title": "Warriors On The Edge Of Time",
        "artist": "Hawkwind",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/hawkwind_warriors_on_the_edge_of_time.jpg",
        "criteria": [7, 18, 20, 40, 50],
        "selectedTrackTitle": "Assault And Battery / The Golden Void",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=1UIYMxZRLf0"
    },
    // ************************************************************************************ //
    // **************************************** I **************************************** //
    // ********************************************************************************** //
    {
        "id": "ikarus_ikarus",
        "title": "Ikarus",
        "artist": "Ikarus",
        "year": 1971,
        "country": "Germany",
        "cover": "img/covers/ikarus_ikarus.jpg",
        "criteria": [3, 6, 7, 8, 19],
        "selectedTrackTitle": "The Raven",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Q09vwl1A9CY"
    },
    // ************************************************************************************ //
    // **************************************** J **************************************** //
    // ********************************************************************************** //
    {
        "id": "jade_warrior_floating_world",
        "title": "Floating World",
        "artist": "Jade Warrior",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/jade_warrior_floating_world.jpg",
        "criteria": [1, 3, 6, 9, 11, 13, 14, 15, 19],
        "selectedTrackTitle": "Mountain Of Fruit And Flowers",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=P02f9snizbE"
    },
    {
        "id": "jade_warrior_waves",
        "title": "Waves",
        "artist": "Jade Warrior",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/jade_warrior_waves.jpg",
        "criteria": [1, 6, 8, 9, 11, 13, 14, 15, 19],
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
        "id": "jean_michel_jarre_oxygene",
        "title": "Oxygène",
        "artist": "Jean Michel Jarre",
        "year": 1976,
        "country": "France",
        "cover": "img/covers/jean_michel_jarre_oxygene.jpg",
        "criteria": [1, 6, 14, 44],
        "selectedTrackTitle": "Oxygène (Part IV)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=P_I2ch8_TXc"
    },
    {
        "id": "jean_michel_jarre_equinoxe",
        "title": "Équinoxe",
        "artist": "Jean Michel Jarre",
        "year": 1978,
        "country": "France",
        "cover": "img/covers/jean_michel_jarre_equinoxe.jpg",
        "criteria": [1, 6, 14, 44],
        "selectedTrackTitle": "Équinoxe (Part IV)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=fpWNimba344"
    },
    {
        "id": "jefferson_airplane_crown_of_creation",
        "title": "Crown Of Creation",
        "artist": "Jefferson Airplane",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/jefferson_airplane_crown_of_creation.jpg",
        "criteria": [18, 46],
        "selectedTrackTitle": "Lather",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=e0-9WF4FF8QrQE"
    },
    {
        "id": "jethro_tull_stand_up",
        "title": "Stand Up",
        "artist": "Jethro Tull",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/jethro_tull_stand_up.jpg",
        "criteria": [7, 46],
        "selectedTrackTitle": "Bourée",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=N2RNe2jwHE0"
    },
    {
        "id": "jethro_tull_thick_as_a_brick",
        "title": "Thick As A Brick",
        "artist": "Jethro Tull",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/jethro_tull_thick_as_a_brick.jpg",
        "criteria": [1, 3, 8, 43, 46],
        "selectedTrackTitle": "Thick As A Brick (Part I)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=l21p4Id40cU"
    },
    {
        "id": "jethro_tull_a_passion_play",
        "title": "A Passion Play",
        "artist": "Jethro Tull",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/jethro_tull_a_passion_play.jpg",
        "criteria": [1, 3, 8, 43, 46],
        "selectedTrackTitle": "A Passion Play (Part I)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gB_Ago8wDb8"
    },
    // ************************************************************************************ //
    // **************************************** K **************************************** //
    // ********************************************************************************** //
    {
        "id": "keef_hartley_band_the_time_is_near",
        "title": "The Time Is Near...",
        "artist": "Keef Hartley Band",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/keef_hartley_band_the_time_is_near.jpg",
        "criteria": [7, 21, 22, 42],
        "selectedTrackTitle": "The Time Is Near",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=SIm_uYzdcsA"
    },
    {
        "id": "keef_hartley_band_overdog",
        "title": "Overdog",
        "artist": "Keef Hartley Band",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/keef_hartley_band_overdog.jpg",
        "criteria": [7, 21, 22, 42],
        "selectedTrackTitle": "Theme Song / En Route",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=76upSLEWHL8"
    },
    {
        "id": "king_crimson_in_the_court_of_the_crimson_king",
        "title": "In The Court Of The Crimson King",
        "artist": "King Crimson",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/king_crimson_in_the_court_of_the_crimson_king.jpg",
        "criteria": [3, 8, 11, 15, 18, 19, 47],
        "selectedTrackTitle": "The Court Of The Crimson King",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gvCmtHDDuu0"
    },
    {
        "id": "king_crimson_in_the_wake_of_poseidon",
        "title": "In The Wake Of Poseidon",
        "artist": "King Crimson",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/king_crimson_in_the_wake_of_poseidon.jpg",
        "criteria": [3, 8, 11, 15, 18, 19, 47],
        "selectedTrackTitle": "In The Wake Of Poseidon",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=J1JjOpXsJ7A"
    },
    {
        "id": "king_crimson_lizard",
        "title": "Lizard",
        "artist": "King Crimson",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/king_crimson_lizard.jpg",
        "criteria": [3, 8, 18, 19],
        "selectedTrackTitle": "Cirkus",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=IYHjPE9ByS4"
    },
    {
        "id": "king_crimson_red",
        "title": "Red",
        "artist": "King Crimson",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/king_crimson_red.jpg",
        "criteria": [1, 3, 8, 11, 18, 19, 47],
        "selectedTrackTitle": "Starless",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=OfR6_V91fG8"
    },
    // ************************************************************************************ //
    // **************************************** L **************************************** //
    // ********************************************************************************** //
    {
        "id": "los_grillos_vibraciones_latinoamericanas",
        "title": "Vibraciones Latinoamericanas",
        "artist": "Los Grillos",
        "year": 1975,
        "country": "Bolivia",
        "cover": "img/covers/los_grillos_vibraciones_latinoamericanas.jpg",
        "criteria": [3, 6, 7, 11, 20, 38, 42],
        "selectedTrackTitle": "Pueblito",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=z8rtBgxvAfw"
    },
    // ************************************************************************************ //
    // **************************************** M **************************************** //
    // ********************************************************************************** //
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
        "id": "mike_oldfield_hergest_ridge",
        "title": "Hergest Ridge",
        "artist": "Mike Oldfield",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/mike_oldfield_hergest_ridge.jpg",
        "criteria": [6, 8, 10, 15, 20, 21, 45],
        "selectedTrackTitle": "Hergest Ridge (Part I)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=DPQPYwWgxTY"
    },
    {
        "id": "mike_oldfield_ommadawn",
        "title": "Ommadawn",
        "artist": "Mike Oldfield",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/mike_oldfield_ommadawn.jpg",
        "criteria": [6, 8, 10, 15, 20, 21, 45],
        "selectedTrackTitle": "Ommadawn (Part I)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vShVl_Xd_Tc"
    },
    {
        "id": "the_moody_blues_days_of_future_passed",
        "title": "Days Of Future Passed",
        "artist": "The Moody Blues",
        "year": 1967,
        "country": "England",
        "cover": "img/covers/the_moody_blues_days_of_future_passed.png",
        "criteria": [1, 6, 10, 15, 18, 43],
        "selectedTrackTitle": "Evening: The Sunset / Twilight Time",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=C012iKu9s-8"
    },
    {
        "id": "museo_rosenbach_zarathustra",
        "title": "Zarathustra",
        "artist": "Museo Rosenbach",
        "year": 1973,
        "country": "Italy",
        "cover": "img/covers/museo_rosenbach_zarathustra.jpg",
        "criteria": [1, 9, 10, 30, 36, 47],
        "selectedTrackTitle": "Zarathustra I: L'ultimo Uomo",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uC9hegZIC2g"
    },
    // ************************************************************************************ //
    // **************************************** N **************************************** //
    // ********************************************************************************** //
    // ************************************************************************************ //
    // **************************************** O **************************************** //
    // ********************************************************************************** //
    // ************************************************************************************ //
    // **************************************** P **************************************** //
    // ********************************************************************************** //
    {
        "id": "pink_floyd_a_saucerful_of_secrets",
        "title": "A Saucerful Of Secrets",
        "artist": "Pink Floyd",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/pink_floyd_a_saucerful_of_secrets.jpg",
        "criteria": [18],
        "selectedTrackTitle": "Set The Controls For The Heart Of The Sun",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=bbWOmh_rRq0"
    },
    {
        "id": "pink_floyd_more",
        "title": "More",
        "artist": "Pink Floyd",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/pink_floyd_more.jpg",
        "criteria": [18, 21, 41, 49],
        "selectedTrackTitle": "Cymbaline",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=ZM5iopSs_rI"
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
        "id": "pink_floyd_obscured_by_clouds",
        "title": "Obscured By Clouds",
        "artist": "Pink Floyd",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/pink_floyd_obscured_by_clouds.jpg",
        "criteria": [22, 49],
        "selectedTrackTitle": "When You're In",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=6vr07uuBjg4"
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
        "criteria": [7, 8, 16, 20, 47],
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
        "criteria": [1, 9, 16, 17, 30, 43, 47],
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
        "criteria": [2, 9, 16, 43, 47],
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
    // ************************************************************************************ //
    // **************************************** Q **************************************** //
    // ********************************************************************************** //
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
    // ************************************************************************************ //
    // **************************************** R **************************************** //
    // ********************************************************************************** //
    {
        "id": "return_to_forever_romantic_warrior",
        "title": "Romantic Warrior",
        "artist": "Return To Forever",
        "year": 1976,
        "country": "USA",
        "cover": "img/covers/return_to_forever_romantic_warrior.png",
        "criteria": [1, 3, 4, 6, 7, 8, 11, 23, 33, 42],
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
    // ************************************************************************************ //
    // **************************************** S **************************************** //
    // ********************************************************************************** //
    {
        "id": "santana_caravanserai",
        "title": "Caravanserai",
        "artist": "Santana",
        "year": 1972,
        "country": "USA",
        "cover": "img/covers/santana_caravanserai.jpg",
        "criteria": [1, 3, 6, 7, 9, 14, 18, 19, 42],
        "selectedTrackTitle": "Waves Within",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=VGbSw8dHR3w"
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
        "id": "soft_machine_third",
        "title": "Third",
        "artist": "Soft Machine",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/soft_machine_third.jpg",
        "criteria": [5, 6, 8, 18, 20, 23],
        "selectedTrackTitle": "Slightly All The Time",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=4RwLgA9U_3I"
    },
    {
        "id": "spirogyra_bells_boots_and_shambles",
        "title": "Bells, Boots And Shambles",
        "artist": "Spirogyra",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/spirogyra_bells_boots_and_shambles.jpg",
        "criteria": [8, 46],
        "selectedTrackTitle": "In The Western World",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=KBW2sheX8NI"
    },
    {
        "id": "sunhouse_sunhouse",
        "title": "Sunhouse",
        "artist": "Sunhouse",
        "year": 1977,
        "country": "Belgium",
        "cover": "img/covers/sunhouse_sunhouse.jpg",
        "criteria": [6, 7, 11, 19, 42],
        "selectedTrackTitle": "Don't Skimp With Us",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=1ABQLe-KfEo"
    },
    {
        "id": "supertramp_crime_of_the_century",
        "title": "Crime Of The Century",
        "artist": "Supertramp",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/supertramp_crime_of_the_century.jpg",
        "criteria": [1, 11, 17, 19, 43, 47, 48],
        "selectedTrackTitle": "Rudy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gxW3s_Qk1dk"
    },
    {
        "id": "supertramp_crisis_what_crisis",
        "title": "Crisis? What Crisis?",
        "artist": "Supertramp",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/supertramp_crisis_what_crisis.jpg",
        "criteria": [11, 47, 48],
        "selectedTrackTitle": "Another Man's Woman",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=MUPwN0MtY1Y"
    },
    {
        "id": "supertramp_even_in_the_quietest_moments",
        "title": "Even In The Quietest Moments",
        "artist": "Supertramp",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/supertramp_even_in_the_quietest_moments.jpg",
        "criteria": [11, 47, 48],
        "selectedTrackTitle": "Even In The Quietest Moments",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7CXcMPdVXp4"
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
        "id": "sweetwater_just_for_you",
        "title": "Just For You",
        "artist": "Sweetwater",
        "year": 1970,
        "country": "USA",
        "cover": "img/covers/sweetwater_just_for_you.jpg",
        "criteria": [11, 42, 46],
        "selectedTrackTitle": "Song Of Romeo",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=_LXdlWNrItQ"
    },
    // ************************************************************************************ //
    // **************************************** T **************************************** //
    // ********************************************************************************** //
    {
        "id": "titus_groan_titus_groan",
        "title": "Titus Groan",
        "artist": "Titus Groan",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/titus_groan_titus_groan.jpg",
        "criteria": [22],
        "selectedTrackTitle": "It Wasn't For You",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7QC1hQyn8-0"
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
        "id": "trefle_reflet",
        "title": "Reflet",
        "artist": "Trèfle",
        "year": 1978,
        "country": "France",
        "cover": "img/covers/trefle_reflet.jpg",
        "criteria": [2, 37, 43, 47],
        "selectedTrackTitle": "L'appel Du Temps",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=sGMIO4h7XMY"
    },
    {
        "id": "triumvirat_spartacus",
        "title": "Spartacus",
        "artist": "Triumvirat",
        "year": 1975,
        "country": "Germany",
        "cover": "img/covers/triumvirat_spartacus.jpg",
        "criteria": [1, 44, 48],
        "selectedTrackTitle": "The March To The Eternal City",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=TmTZpQYMzN8"
    },
    // ************************************************************************************ //
    // **************************************** U **************************************** //
    // ********************************************************************************** //
    // ************************************************************************************ //
    // **************************************** V **************************************** //
    // ********************************************************************************** //
    // ************************************************************************************ //
    // **************************************** W **************************************** //
    // ********************************************************************************** //
    {
        "id": "warhorse_warhorse",
        "title": "Warhorse",
        "artist": "Warhorse",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/warhorse_warhorse.jpg",
        "criteria": [0, 22, 40],
        "selectedTrackTitle": "Woman Of The Devil",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=zgWyveaejwI"
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
        "id": "wishbone_ash_pilgrimage",
        "title": "Pilgrimage",
        "artist": "Wishbone Ash",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/wishbone_ash_pilgrimage.jpg",
        "criteria": [3, 7, 22],
        "selectedTrackTitle": "Valediction",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=PILotugu-s4"
    },
    {
        "id": "wishbone_ash_argus",
        "title": "Argus",
        "artist": "Wishbone Ash",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/wishbone_ash_argus.jpg",
        "criteria": [7, 22],
        "selectedTrackTitle": "Sometime World",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=kvLVSPPLZZY"
    },
    // ************************************************************************************ //
    // **************************************** X **************************************** //
    // ********************************************************************************** //
    // ************************************************************************************ //
    // **************************************** Y **************************************** //
    // ********************************************************************************** //
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
    },
    // ************************************************************************************ //
    // **************************************** Z **************************************** //
    // ********************************************************************************** //
    {
        "id": "zoo_zoo",
        "title": "Zoo",
        "artist": "Zoo",
        "year": 1973,
        "country": "Netherlands",
        "cover": "img/covers/zoo_zoo.jpg",
        "criteria": [7, 22, 42],
        "selectedTrackTitle": "Cold Night",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=2gI_mUCPHO0"
    }
]

// TODO
// Below is the list of prog artists that I listened and should be part of this project
/*
Acid Mothers XXX
Acqua Fragile
Albatross
Ange 
Anna Själv Tredje
Anthony Philips 
Area 
Alphataurus 
Artcane  
Banco Del Mutuo Soccorso
Bakerloo 
Barclay James Harvest 
Burning Candle
Canamii
Carmen 
Crucis
Delirium
Dominique Guiot 
Egg 
Elder Kindred 
ELP
Eskaton  
Fruupp 
Gentle Giant
Goblin
Guns & Butter
Hatfield & The North
Happy The Man
Henry Cow 
Jane 
Jean Michel Jarre
Led Zeppelin
Locanda Dell Fante
Mahavishnu Orchestra
Matching Mole
Michel Madore
M.L. Bongers Project
Mike Oldfield
Miklagård 
Necktar 
Nightwinds 
Ozric Tentacles
Pangée 
Plat Du Jour
Premiata Forneria Marconi
Quatermass
Ralph Lundsten
Ramses 
Robert Connolly
Schicke, Führs & Fröhling
Serg Ramses 
Semiramis 
Sir Lord Baltimore
Sloche  
Starcastle
Strawbs
Tangerine Dream
Tea & Sympfony 
Triumvirat
Ultimate Spinach
Uriah Heep
Van der Graaf
Weidorje
Wizzard
Zanov
*/




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