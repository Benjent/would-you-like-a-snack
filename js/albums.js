
// TODO penser à faire une Map ?
const albums = [
    // ************************************************************************************ //
    // **************************************** A **************************************** //
    // ********************************************************************************** //
    {
        "id": "acqua_fragile_acqua_fragile",
        "title": "Acqua Fragile",
        "artist": "Acqua Fragile",
        "year": 1973,
        "country": "Italy",
        "cover": "img/covers/acqua_fragile_acqua_fragile.jpg",
        "criteria": [3, 7, 10, 19, 21],
        "selectedTrackTitle": "Morning Comes",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=kUrl0QQyO3w"
    },
    {
        "id": "acqua_fragile_mass_media_stars",
        "title": "Mass-Media Stars",
        "artist": "Acqua Fragile",
        "year": 1974,
        "country": "Italy",
        "cover": "img/covers/acqua_fragile_mass_media_stars.jpg",
        "criteria": [3, 7, 10],
        "selectedTrackTitle": "Professor",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=kHeIgl7WMvY"
    },
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
        "id": "the_alan_parsons_project_tales_of_mystery_and_imagination",
        "title": "Tales Of Mystery And Imagination",
        "artist": "The Alan Parsons Project",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/the_alan_parsons_project_tales_of_mystery_and_imagination.jpg",
        "criteria": [1, 9, 18, 20, 42, 48],
        "selectedTrackTitle": "The Raven",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=YAE1XTvKLXA"
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
        "id": "albatross_albatross",
        "title": "Albatross",
        "artist": "Albatross",
        "year": 1976,
        "country": "USA",
        "cover": "img/covers/albatross_albatross.jpg",
        "criteria": [3, 8, 16, 18, 20],
        "selectedTrackTitle": "Four Horsemen Of The Apocalypse",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=g_RT7NV74Tk"
    },
    {
        "id": "alice_cooper_schools_out",
        "title": "School's Out",
        "artist": "Alice Cooper",
        "year": 1972,
        "country": "USA",
        "cover": "img/covers/alice_cooper_schools_out.jpg",
        "criteria": [1, 16, 22, 35, 40],
        "selectedTrackTitle": "Alma Mater",
        "selectedTrackYtId": ""
    },
    {
        "id": "alice_cooper_billion_dollar_babies",
        "title": "Billion Dollar Babies",
        "artist": "Alice Cooper",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/alice_cooper_billion_dollar_babies.png",
        "criteria": [19, 22, 25],
        "selectedTrackTitle": "Hello Hooray",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=80bqSzONHP4"
    },
    {
        "id": "alice_cooper_muscle_of_love",
        "title": "Muscle Of Love",
        "artist": "Alice Cooper",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/alice_cooper_muscle_of_love.jpg",
        "criteria": [19, 22],
        "selectedTrackTitle": "Hard Hearted Alice",
        "selectedTrackYtId": ""
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
        "id": "alphataurus_alphataurus",
        "title": "Alphataurus",
        "artist": "Alphataurus",
        "year": 1973,
        "country": "Italy",
        "cover": "img/covers/alphataurus_alphataurus.jpg",
        "criteria": [6, 7, 8, 15, 19, 36],
        "selectedTrackTitle": "La Mente Vola",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=W3_5gl9DHfs"
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
        "id": "ange_guet_apens",
        "title": "Guet-Apens",
        "artist": "Ange",
        "year": 1978,
        "country": "France",
        "cover": "img/covers/ange_guet_apens.jpg",
        "criteria": [3, 8, 37, 43],
        "selectedTrackTitle": "Réveille-Toi",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=F_66uMKNZC8"
    },
    {
        "id": "anna_sjalv_tredje_tussilago_fanfara",
        "title": "Tussilago Fanfara",
        "artist": "Anna Själv Tredje",
        "year": 1977,
        "country": "Sweden",
        "cover": "img/covers/anna_sjalv_tredje_tussilago_fanfara.jpg",
        "criteria": [6, 8, 14, 18, 44],
        "selectedTrackTitle": "Den Barbariska Söndagen",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=WfLqv6liuiQ"
    },
    {
        "id": "anthony_phillips_the_geese_and_the_ghost",
        "title": "The Gees & The Ghost",
        "artist": "Anthony Philips",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/anthony_phillips_the_geese_and_the_ghost.jpg",
        "criteria": [8, 11, 33, 46],
        "selectedTrackTitle": "Which Way The Wind Blows",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=E-zErxaZxh8"
    },
    {
        "id": "anthony_phillips_wise_after_the_event",
        "title": "Wise After The Event",
        "artist": "Anthony Philips",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/anthony_phillips_wise_after_the_event.jpg",
        "criteria": [11, 46],
        "selectedTrackTitle": "Birdsong And Reprise",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=tSEqbHSUZJU"
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
        "id": "area_arbeit_macht_frei",
        "title": "Arbeit Macht Frei",
        "artist": "Area",
        "year": 1973,
        "country": "Italy",
        "cover": "img/covers/area_arbeit_macht_frei.jpg",
        "criteria": [3, 5, 6, 7, 15, 16, 18, 23],
        "selectedTrackTitle": "L'abbattimento Dello Zeppelin",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=433wf2jDkhA"
    },
    {
        "id": "area_caution_radiation_area",
        "title": "Caution Radiation Area!",
        "artist": "Area",
        "year": 1974,
        "country": "Italy",
        "cover": "img/covers/area_caution_radiation_area.jpg",
        "criteria": [3, 5, 6, 7, 16, 18, 23],
        "selectedTrackTitle": "Cometa Rossa",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=KuTOacIIf-I"
    },
    {
        "id": "area_crac",
        "title": "Crac!",
        "artist": "Area",
        "year": 1975,
        "country": "Italy",
        "cover": "img/covers/area_crac.jpg",
        "criteria": [3, 5, 6, 7, 18, 23],
        "selectedTrackTitle": "Megalopoli",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=VVugC2gOMFs"
    },
    {
        "id": "area_maledetti",
        "title": "Maledetti",
        "artist": "Area",
        "year": 1976,
        "country": "Italy",
        "cover": "img/covers/area_maledetti.jpg",
        "criteria": [1, 3, 5, 6, 7, 18, 23, 42],
        "selectedTrackTitle": "Diforisma Urbano",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=zrX2WtAMPLU"
    },
    {
        "id": "artcane_odyssee",
        "title": "Odyssée",
        "artist": "Artcane",
        "year": 1977,
        "country": "France",
        "cover": "img/covers/artcane_odyssee.jpg",
        "criteria": [6, 19, 20, 37],
        "selectedTrackTitle": "Le Chant D'Orphée",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vzmYFSSPfeQ"
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
        "id": "arti_mestieri_quinto_stato",
        "title": "Quinto Stato",
        "artist": "Arti & Mestieri",
        "year": 1979,
        "country": "Italy",
        "cover": "img/covers/arti_mestieri_quinto_stato.jpg",
        "criteria": [3, 7, 19, 36, 42],
        "selectedTrackTitle": "Torino Nella Mente",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=skOYf_P1BP4"
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
        "id": "atomic_rooster_death_walks_behind_you",
        "title": "Death Walks Behind You",
        "artist": "Atomic Rooster",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/atomic_rooster_death_walks_behind_you.jpg",
        "criteria": [7, 22, 40],
        "selectedTrackTitle": "Death Walks Behind You",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=8yO7l6TmIRI"
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
    {
        "id": "axis_axis",
        "title": "Axis",
        "artist": "Axis",
        "year": 1973,
        "country": "Greece",
        "cover": "img/covers/axis_axis.jpg",
        "criteria": [3, 6, 7, 18, 19, 42],
        "selectedTrackTitle": "Roads",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=a7sBh6MMFwU"
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
        "id": "bakerloo_bakerloo",
        "title": "Bakerloo",
        "artist": "Bakerloo",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/bakerloo_bakerloo.jpg",
        "criteria": [6, 7, 22],
        "selectedTrackTitle": "Drivin' Bachwards",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uWrdCYBMh0E"
    },
    {
        "id": "barclay_james_harvest_barclay_james_harvest",
        "title": "Barclay James Harvest",
        "artist": "Barclay James Harvest",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/barclay_james_harvest_barclay_james_harvest.jpg",
        "criteria": [10, 21, 22],
        "selectedTrackTitle": "Mother Dear",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=bRj4G6M5K_w"
    },
    {
        "id": "barclay_james_harvest_once_again",
        "title": "Once Again",
        "artist": "Barclay James Harvest",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/barclay_james_harvest_once_again.jpg",
        "criteria": [10, 21, 22],
        "selectedTrackTitle": "Galadriel",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=H2AWFbMiRTQ"
    },
    {
        "id": "barclay_james_harvest_barclay_james_harvest_and_other_short_stories",
        "title": "Barclay James Harvest And Other Short Stories",
        "artist": "Barclay James Harvest",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/barclay_james_harvest_barclay_james_harvest_and_other_short_stories.jpg",
        "criteria": [10, 21, 22],
        "selectedTrackTitle": "Song With No Meaning",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vsONUkg4Gg4"
    },
    {
        "id": "be_bop_deluxe_axe_victim",
        "title": "Axe Victim",
        "artist": "Be-Bop Deluxe",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/be_bop_deluxe_axe_victim.jpg",
        "criteria": [7, 21, 22],
        "selectedTrackTitle": "Love Is Swift Arrows",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Bvi5Vv7E1nI"
    },
    {
        "id": "be_bop_deluxe_futurama",
        "title": "Futurama",
        "artist": "Be-Bop Deluxe",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/be_bop_deluxe_futurama.jpg",
        "criteria": [7, 21, 22, 48],
        "selectedTrackTitle": "Swan Song",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=ArDJ0LT5gA8"
    },
    {
        "id": "be_bop_deluxe_sunburst_finish",
        "title": "Sunburst Finish",
        "artist": "Be-Bop Deluxe",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/be_bop_deluxe_sunburst_finish.jpg",
        "criteria": [7, 21, 22, 48],
        "selectedTrackTitle": "Heavenly Homes",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=_Ao_Ao2191I"
    },
    {
        "id": "be_bop_deluxe_modern_music",
        "title": "Modern Music",
        "artist": "Be-Bop Deluxe",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/be_bop_deluxe_modern_music.jpg",
        "criteria": [9, 16, 21, 22, 48],
        "selectedTrackTitle": "Dancing In The Moonlight",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=p65uMNG43V4"
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
        "id": "the_beatles_the_beatles",
        "title": "The Beatles",
        "artist": "The Beatles",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/the_beatles_the_beatles.jpg",
        "criteria": [3, 9, 16, 17, 21, 22, 35],
        "selectedTrackTitle": "The Continuing Story Of Bungalow Bill",
        "selectedTrackYtId": ""
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
        "criteria": [6, 8, 10, 18, 19, 38, 42],
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
        "id": "burning_candle_burning_candle",
        "title": "Burning Candle",
        "artist": "Burning Candle",
        "year": 1981,
        "country": "Germany",
        "cover": "img/covers/burning_candle_burning_candle.jpg",
        "criteria": [3, 8, 20, 42],
        "selectedTrackTitle": "Expedition To The Sun",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=c2N8B1nC3R4"
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
        "criteria": [1, 6, 9, 11, 41],
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
        "id": "camel_nude",
        "title": "Nude",
        "artist": "Camel",
        "year": 1981,
        "country": "England",
        "cover": "img/covers/camel_nude.jpg",
        "criteria": [1, 3, 6, 9, 11, 41],
        "selectedTrackTitle": "Beached",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=GD-IY4LfGfc"
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
        "id": "canamii_concept",
        "title": "Concept",
        "artist": "Canamii",
        "year": 1980,
        "country": "South Africa",
        "cover": "img/covers/canamii_concept.jpg",
        "criteria": [3, 11, 20, 21],
        "selectedTrackTitle": "Rain",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=yutpOHSsdOA"
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
        "id": "captain_beyond_sufficiently_breathless",
        "title": "Sufficiently Breathless",
        "artist": "Captain Beyond",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/captain_beyond_sufficiently_breathless.jpg",
        "criteria": [3, 7, 22, 40, 42],
        "selectedTrackTitle": "Starglow Energy",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=x5D_6GHBBVg"
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
        "id": "carmen_fandagos_in_space",
        "title": "Fandagos In Space",
        "artist": "Carmen",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/carmen_fandagos_in_space.jpg",
        "criteria": [1, 3, 38],
        "selectedTrackTitle": "Bulerias",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gjFs0Iy6yAc"
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
        "id": "claude_leveillee_black_sun",
        "title": "Black Sun",
        "artist": "Claude Léveillée",
        "year": 1978,
        "country": "Quebec",
        "cover": "img/covers/claude_leveillee_black_sun.jpg",
        "criteria": [6, 11, 15, 16, 18, 20, 21],
        "selectedTrackTitle": "Requiem Pour Un Astronaute",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=dtsi7kNIApo"
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
        "criteria": [1, 9, 18, 41, 45],
        "selectedTrackTitle": "Fire",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=FaHEusBG20c"
    },
    {
        "id": "crucis_crucis",
        "title": "Crucis",
        "artist": "Crucis",
        "year": 1976,
        "country": "Argentina",
        "cover": "img/covers/crucis_crucis.jpg",
        "criteria": [3, 10, 20, 38],
        "selectedTrackTitle": "Mes",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=oeVNf_Ugpb8"
    },
    {
        "id": "crucis_los_delirios_del_mariscal",
        "title": "Los Delirios Del Mariscal",
        "artist": "Crucis",
        "year": 1976,
        "country": "Argentina",
        "cover": "img/covers/crucis_los_delirios_del_mariscal.jpg",
        "criteria": [3, 10, 20, 38],
        "selectedTrackTitle": "No Me Separen De Mí",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=XvdxYyYbc84"
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
        "id": "dominique_guiot_lunivers_de_la_mer",
        "title": "L'univers De La Mer",
        "artist": "Dominique Guiot",
        "year": 1978,
        "country": "France",
        "cover": "img/covers/dominique_guiot_lunivers_de_la_mer.jpg",
        "criteria": [1, 6, 11, 21, 41, 44],
        "selectedTrackTitle": "Les Deux Poissons",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gOwuBTGwrco"
    },
    {
        "id": "dominique_guiot_la_dame_a_la_licorne",
        "title": "La Dame À La Licorne",
        "artist": "Dominique Guiot",
        "year": 1983,
        "country": "France",
        "cover": "img/covers/dominique_guiot_la_dame_a_la_licorne.jpg",
        "criteria": [1, 6, 11, 15, 33, 41, 46],
        "selectedTrackTitle": "La Dame À La Licorne",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=O5s_o1Pc6bA"
    },
    {
        "id": "the_doors_the_doors",
        "title": "The Doors",
        "artist": "The Doors",
        "year": 1967,
        "country": "USA",
        "cover": "img/covers/the_doors_the_doors.jpg",
        "criteria": [19, 42, 48],
        "selectedTrackTitle": "The End",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=JSUIQgEVDM4"
    },
    {
        "id": "the_doors_strange_days",
        "title": "Strange Days",
        "artist": "The Doors",
        "year": 1967,
        "country": "USA",
        "cover": "img/covers/the_doors_strange_days.jpg",
        "criteria": [18, 19, 42, 48],
        "selectedTrackTitle": "When The Music's Over",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=YkKRU1ajKFA"
    },
    {
        "id": "the_doors_waiting_for_the_sun",
        "title": "Waiting For The Sun",
        "artist": "The Doors",
        "year": 1968,
        "country": "USA",
        "cover": "img/covers/the_doors_waiting_for_the_sun.jpg",
        "criteria": [19, 42, 48],
        "selectedTrackTitle": "Yes, The River Knows",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=v6boHOX8r60"
    },
    {
        "id": "the_doors_the_soft_parade",
        "title": "The Soft Parade",
        "artist": "The Doors",
        "year": 1969,
        "country": "USA",
        "cover": "img/covers/the_doors_the_soft_parade.jpg",
        "criteria": [19, 42, 48],
        "selectedTrackTitle": "The Soft Parade",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=8p-AUo1w45w"
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
    {
        "id": "dr_dopo_jam_fat_dogs_and_danishmen",
        "title": "Fat Dogs & Danishmen",
        "artist": "Dr. Dopo Jam",
        "year": 1974,
        "country": "Denmark",
        "cover": "img/covers/dr_dopo_jam_fat_dogs_and_danishmen.jpg",
        "criteria": [3, 7, 15, 18, 19, 35, 42],
        "selectedTrackTitle": "Nova Bossa Nova",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=wkViMhydlkc"
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
        "id": "egg_egg",
        "title": "Egg",
        "artist": "Egg",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/egg_egg.jpg",
        "criteria": [3, 6, 7, 8, 19, 35, 42],
        "selectedTrackTitle": "Symphony No. 2",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gR1TYEOVpJ0"
    },
    {
        "id": "egg_the_polite_force",
        "title": "The Polite Force",
        "artist": "Egg",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/egg_the_polite_force.jpg",
        "criteria": [3, 6, 7, 19, 42],
        "selectedTrackTitle": "A Visit To Newport Hospital",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=DanChmmX4k0"
    },
    {
        "id": "egg_the_civil_surface",
        "title": "The Civil Surface",
        "artist": "Egg",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/egg_the_civil_surface.jpg",
        "criteria": [3, 6, 7, 19, 42],
        "selectedTrackTitle": "Enneagram",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=QS96H34Ywv4"
    },
    {
        "id": "elder_kindred_kindred_spirits",
        "title": "Kindred Spirits",
        "artist": "Elder Kindred",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/elder_kindred_kindred_spirits.jpg",
        "criteria": [42, 46],
        "selectedTrackTitle": "Castles",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Tw9Ksxrm7hg"
    },
    {
        "id": "electric_light_orchestra_out_of_the_blue",
        "title": "Out Of The Blue",
        "artist": "Electric Light Orchestra",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/electric_light_orchestra_out_of_the_blue.jpg",
        "criteria": [1, 9, 20, 43, 45],
        "selectedTrackTitle": "Mr. Blue Sky",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=aQUlA8Hcv4s"
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
        "id": "eloy_floating",
        "title": "Floating",
        "artist": "Eloy",
        "year": 1974,
        "country": "Germany",
        "cover": "img/covers/eloy_floating.jpg",
        "criteria": [7, 8, 10, 20],
        "selectedTrackTitle": "Castle In The Air",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=K_oPTaKCjcY"
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
    {
        "id": "emerson_lake_and_palmer_emerson_lake_and_palmer",
        "title": "Emerson, Lake & Palmer",
        "artist": "Emerson, Lake & Palmer",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/emerson_lake_and_palmer_emerson_lake_and_palmer.jpg",
        "criteria": [3, 4, 6, 8, 10, 18, 21, 30],
        "selectedTrackTitle": "Take A Pebble",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=tVz35uXqFYw"
    },
    {
        "id": "emerson_lake_and_palmer_tarkus",
        "title": "Tarkus",
        "artist": "Emerson, Lake & Palmer",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/emerson_lake_and_palmer_tarkus.jpg",
        "criteria": [3, 4, 6, 8, 10, 18, 21, 30],
        "selectedTrackTitle": "Tarkus",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=WKNOlDtZluU"
    },
    {
        "id": "eskaton_4_visions",
        "title": "4 Visions",
        "artist": "Eskaton",
        "year": 1979,
        "country": "France",
        "cover": "img/covers/eskaton_4_visions.jpg",
        "criteria": [8, 18, 19, 20, 42],
        "selectedTrackTitle": "Le Cri",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=aMpmbXRIu28"
    },
    {
        "id": "eskaton_ardeur",
        "title": "Ardeur",
        "artist": "Eskaton",
        "year": 1980,
        "country": "France",
        "cover": "img/covers/eskaton_ardeur.jpg",
        "criteria": [3, 8, 18, 19, 20, 42],
        "selectedTrackTitle": "Eskaton",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=YRrKHFxLRh4"
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
        "id": "focus_focus",
        "title": "Focus",
        "artist": "Focus",
        "year": 1985,
        "country": "Netherlands",
        "cover": "img/covers/focus_focus.jpg",
        "criteria": [6, 7, 8, 11, 20],
        "selectedTrackTitle": "King Kong",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=26b_f-KriRQ"
    },
    {
        "id": "frank_zappa_absolutely_free",
        "title": "Absolutely Free",
        "artist": "Frank Zappa",
        "year": 1967,
        "country": "USA",
        "cover": "img/covers/frank_zappa_absolutely_free.jpg",
        "criteria": [3, 18, 19, 35, 41],
        "selectedTrackTitle": "Invocation & Ritual Dance Of The Young Pumpkin",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7gw2qqcsxlE"
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
        "id": "frank_zappa_roxy_and_elsewhere",
        "title": "Roxy & Elsewhere",
        "artist": "Frank Zappa",
        "year": 1974,
        "country": "USA",
        "cover": "img/covers/frank_zappa_roxy_and_elsewhere.jpg",
        "criteria": [3, 4, 7, 8, 12, 19, 30, 42, 45],
        "selectedTrackTitle": "Echidna's Arf (Of You)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=NeCGm8VipUU"
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
        "criteria": [12, 17, 35, 45],
        "selectedTrackTitle": "Why Don't You Like Me",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=emEOePwK0ok"
    },
    {
        "id": "fuhrs_and_frohling_ammerland",
        "title": "Ammerland",
        "artist": "Führs & Fröhling",
        "year": 1978,
        "country": "Germany",
        "cover": "img/covers/fuhrs_and_frohling_ammerland.jpg",
        "criteria": [6, 8, 21, 44],
        "selectedTrackTitle": "Ammerland",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=RV0RD6SthNI"
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
        "criteria": [3, 7, 22],
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
        "id": "gentle_giant_acquiring_the_taste",
        "title": "Acquiring The Taste",
        "artist": "Gentle Giant",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/gentle_giant_acquiring_the_taste.jpg",
        "criteria": [3, 18, 19, 21],
        "selectedTrackTitle": "Pantagruel's Nativity",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=ODWYJyJh6cg"
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
        "criteria": [2, 9, 15, 18, 19, 20, 42, 50],
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
    {
        "id": "guns_and_butter_guns_and_butter",
        "title": "Guns & Butter",
        "artist": "Guns & Butter",
        "year": 1972,
        "country": "USA",
        "cover": "img/covers/guns_and_butter_guns_and_butter.jpg",
        "criteria": [7, 19, 21, 42],
        "selectedTrackTitle": "The Wanderer",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=EcBm-TXBjM9ts11w"
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
        "id": "harmonium_lheptade",
        "title": "L'heptade",
        "artist": "Harmonium",
        "year": 1976,
        "country": "Quebec",
        "cover": "img/covers/harmonium_lheptade.jpg",
        "criteria": [1, 8, 10, 19, 21, 43, 47],
        "selectedTrackTitle": "Le Premier Ciel",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=G8qda-s8Yks"
    },
    {
        "id": "hatfield_and_the_north_hatfield_and_the_north",
        "title": "Hatfield And The North",
        "artist": "Hatfield And The North",
        "year": 1974,
        "country": "England",
        "cover": "img/covers/hatfield_and_the_north_hatfield_and_the_north.jpg",
        "criteria": [3, 6, 7, 11, 19, 35, 41],
        "selectedTrackTitle": "Son Of \"There's No Place Like Homerton\"",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Qk04cGkff44"
    },
    {
        "id": "hatfield_and_the_north_the_rotters_club",
        "title": "The Rotter's Club",
        "artist": "Hatfield And The North",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/hatfield_and_the_north_the_rotters_club.jpg",
        "criteria": [3, 6, 7, 8, 11, 19, 35],
        "selectedTrackTitle": "Mumps",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=h_MUajIs9Vs"
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
    {
        "id": "the_incredible_string_band_the_incredible_string_band",
        "title": "The Incredible String Band",
        "artist": "The Incredible String Band",
        "year": 1966,
        "country": "Scotland",
        "cover": "img/covers/the_incredible_string_band_the_incredible_string_band.jpg",
        "criteria": [15, 46],
        "selectedTrackTitle": "Dandelion Blues",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=QF2pR4hq02k"
    },
    {
        "id": "the_incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion",
        "title": "The 5000 Spirits Or The Layers Of The Onion",
        "artist": "The Incredible String Band",
        "year": 1967,
        "country": "Scotland",
        "cover": "img/covers/the_incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion.jpg",
        "criteria": [13, 15, 18, 46],
        "selectedTrackTitle": "Painting Box",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=UoQ3tmohEX4"
    },
    {
        "id": "the_incredible_string_band_the_hangmans_beautiful_daughter",
        "title": "The Hangman's Beautiful Daughter",
        "artist": "The Incredible String Band",
        "year": 1968,
        "country": "Scotland",
        "cover": "img/covers/the_incredible_string_band_the_hangmans_beautiful_daughter.jpg",
        "criteria": [8, 13, 15, 18, 46],
        "selectedTrackTitle": "A Very Cellular Song",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-90rrjR6Wvk"
    },
    {
        "id": "the_incredible_string_band_wee_tam",
        "title": "Wee Tam",
        "artist": "The Incredible String Band",
        "year": 1968,
        "country": "Scotland",
        "cover": "img/covers/the_incredible_string_band_wee_tam.jpg",
        "criteria": [13, 15, 18, 46],
        "selectedTrackTitle": "Job's Tears",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Dd5yq76q51c"
    },
    {
        "id": "the_incredible_string_band_the_big_huge",
        "title": "The Big Huge",
        "artist": "The Incredible String Band",
        "year": 1968,
        "country": "Scotland",
        "cover": "img/covers/the_incredible_string_band_the_big_huge.jpg",
        "criteria": [13, 15, 18, 46],
        "selectedTrackTitle": "Cousin Caterpillar",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=nu0brlGGQ2Y"
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
        "criteria": [1, 6, 11, 14, 44],
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
        "criteria": [1, 6, 11, 14, 44],
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
        "id": "jethro_tull_aqualung",
        "title": "Aqualung",
        "artist": "Jethro Tull",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/jethro_tull_aqualung.jpg",
        "criteria": [3, 7, 46],
        "selectedTrackTitle": "Aqualung",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=B0jMPI_pUec"
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
    {
        "id": "jethro_tull_minstrel_in_the_gallery",
        "title": "Minstrel In The Gallery",
        "artist": "Jethro Tull",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/jethro_tull_minstrel_in_the_gallery.jpg",
        "criteria": [3, 8, 46],
        "selectedTrackTitle": "Baker St. Muse",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=B-7yVIJ7wE4"
    },
    {
        "id": "jethro_tull_songs_from_the_wood",
        "title": "Songs From The Wood",
        "artist": "Jethro Tull",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/jethro_tull_songs_from_the_wood.jpg",
        "criteria": [3, 46],
        "selectedTrackTitle": "Velvet Green",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=JG77YHX5yYE"
    },
    {
        "id": "the_jimi_hendrix_experience_electric_ladyland",
        "title": "Electric Ladyland",
        "artist": "The Jimi Hendrix Experience",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/the_jimi_hendrix_experience_electric_ladyland.jpg",
        "criteria": [7, 8, 18, 22, 42],
        "selectedTrackTitle": "Burning Of The Midnight Lamp",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=j60OzzR7mMk"
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
        "id": "khan_space_shanty",
        "title": "Space Shanty",
        "artist": "Khan",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/khan_space_shanty.jpg",
        "criteria": [3, 6, 7],
        "selectedTrackTitle": "Stranded",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=tHkYXKlwB9s"
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
        "id": "led_zeppelin_led_zeppelin_iv",
        "title": "Led Zeppelin IV",
        "artist": "Led Zeppelin",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/led_zeppelin_led_zeppelin_iv.jpg",
        "criteria": [3, 15, 21, 22],
        "selectedTrackTitle": "Four Sticks",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=T8GP2j7NdSo"
    },
    {
        "id": "led_zeppelin_houses_of_the_holy",
        "title": "Houses Of The Holy",
        "artist": "Led Zeppelin",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/led_zeppelin_houses_of_the_holy.jpg",
        "criteria": [3, 17, 22],
        "selectedTrackTitle": "No Quarter",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Pu94mWlgzMY"
    },
    {
        "id": "led_zeppelin_physical_graffiti",
        "title": "Physical Graffiti",
        "artist": "Led Zeppelin",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/led_zeppelin_physical_graffiti.jpg",
        "criteria": [3, 7, 22, 42],
        "selectedTrackTitle": "Ten Years Gone",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=kWbO9a1_Z3U"
    },
    {
        "id": "led_zeppelin_presence",
        "title": "Presence",
        "artist": "Led Zeppelin",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/led_zeppelin_presence.jpg",
        "criteria": [3, 7, 22, 42],
        "selectedTrackTitle": "Achilles Last Stand",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Rf1I9htJk"
    },
    {
        "id": "locanda_dell_fate_forse_le_lucciole_non_si_amano_piu",
        "title": "Forse Le Lucciole Non Si Amano Più",
        "artist": "Locanda Delle Fate",
        "year": 1977,
        "country": "Italy",
        "cover": "img/covers/locanda_dell_fate_forse_le_lucciole_non_si_amano_piu.jpg",
        "criteria": [3, 10, 36],
        "selectedTrackTitle": "Forse Le Lucciole Non Si Amano Più",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=QbaJfSEehns"
    },
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
    {
        "id": "low_flying_aircraft_low_flying_aircraft",
        "title": "Low Flying Aircraft",
        "artist": "Low Flying Aircraft",
        "year": 1987,
        "country": "England",
        "cover": "img/covers/low_flying_aircraft_low_flying_aircraft.jpg",
        "criteria": [3, 6, 18, 19, 20],
        "selectedTrackTitle": "Poolside",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7sspuSlsL1Q"
    },
    // ************************************************************************************ //
    // **************************************** M **************************************** //
    // ********************************************************************************** //
    {
        "id": "ml_bongers_project_pacific_prison",
        "title": "Pacific Prison",
        "artist": "M.L. Bongers Project",
        "year": 1978,
        "country": "Germany",
        "cover": "img/covers/ml_bongers_project_pacific_prison.jpg",
        "criteria": [2, 9, 16, 20],
        "selectedTrackTitle": "A Deadly Smile",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=px1CIxbSN0o"
    },
    {
        "id": "magma_magma",
        "title": "Magma",
        "artist": "Magma",
        "year": 1970,
        "country": "France",
        "cover": "img/covers/magma_magma.jpg",
        "criteria": [2, 5, 8, 10, 19, 30, 39, 43],
        "selectedTrackTitle": "Kobaïa",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=TAtaaxb2TVU"
    },
    {
        "id": "magma_1001_centigrades",
        "title": "1001° Centigrades",
        "artist": "Magma",
        "year": 1971,
        "country": "France",
        "cover": "img/covers/magma_1001_centigrades.jpg",
        "criteria": [2, 5, 8, 10, 19, 30, 39, 43],
        "selectedTrackTitle": "Ki Ïahl Ö Lïahk",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=gbVas9ZMVgk"
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
        "id": "mahavishnu_orchestra_the_inner_mounting_flame",
        "title": "The Inner Mounting Flame",
        "artist": "Mahavishnu Orchestra",
        "year": 1971,
        "country": "USA",
        "cover": "img/covers/mahavishnu_orchestra_the_inner_mounting_flame.jpg",
        "criteria": [3, 4, 6, 7, 15, 23, 42],
        "selectedTrackTitle": "A Lotus On Irish Streams",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=1m5V8zbyR2M"
    },
    {
        "id": "mahavishnu_orchestra_birds_of_fire",
        "title": "Birds Of Fire",
        "artist": "Mahavishnu Orchestra",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/mahavishnu_orchestra_birds_of_fire.jpg",
        "criteria": [3, 4, 6, 7, 15, 23, 42],
        "selectedTrackTitle": "Sanctuary",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=d08lMTHzYdY"
    },
    {
        "id": "mahavishnu_orchestra_between_nothingness_and_eternity",
        "title": "Between Nothingness And Eternity",
        "artist": "Mahavishnu Orchestra",
        "year": 1973,
        "country": "USA",
        "cover": "img/covers/mahavishnu_orchestra_between_nothingness_and_eternity.jpg",
        "criteria": [4, 6, 7, 8, 12, 15, 23, 42],
        "selectedTrackTitle": "La Mère De La Mer",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=8YrPXjladAw"
    },
    {
        "id": "mahavishnu_orchestra_apocalypse",
        "title": "Apocalypse",
        "artist": "Mahavishnu Orchestra",
        "year": 1974,
        "country": "USA",
        "cover": "img/covers/mahavishnu_orchestra_apocalypse.jpg",
        "criteria": [4, 6, 8, 10, 15, 17, 42],
        "selectedTrackTitle": "Hymn To Him",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=M9eegi9dd6g"
    },
    {
        "id": "mahavishnu_orchestra_visions_of_emerald_beyond",
        "title": "Visions Of Emerald Beyond",
        "artist": "Mahavishnu Orchestra",
        "year": 1975,
        "country": "USA",
        "cover": "img/covers/mahavishnu_orchestra_visions_of_emerald_beyond.jpg",
        "criteria": [3, 4, 6, 7, 15, 23, 42],
        "selectedTrackTitle": "Lila's Dance",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=ZSh0nmretso"
    },
    {
        "id": "mahogany_rush_child_of_the_novelty",
        "title": "Child Of The Novelty",
        "artist": "Mahogany Rush",
        "year": 1974,
        "country": "Quebec",
        "cover": "img/covers/mahogany_rush_child_of_the_novelty.jpg",
        "criteria": [7, 22, 42],
        "selectedTrackTitle": "Child Of The Novelty",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=4fVfpcHMxWg"
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
        "id": "matching_mole_matching_mole",
        "title": "Matching Mole",
        "artist": "Matching Mole",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/matching_mole_matching_mole.jpg",
        "criteria": [3, 18, 19],
        "selectedTrackTitle": "Part Of The Dance",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7pvk1eIhFeM"
    },
    {
        "id": "matching_mole_little_red_record",
        "title": "Little Red Record",
        "artist": "Matching Mole",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/matching_mole_little_red_record.jpg",
        "criteria": [3, 18, 19],
        "selectedTrackTitle": "Brandy As In Benj",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3pRLir_Evds"
    },
    {
        "id": "may_blitz_may_blitz",
        "title": "May Blitz",
        "artist": "May Blitz",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/may_blitz_may_blitz.jpg",
        "criteria": [11, 18],
        "selectedTrackTitle": "Tomorrow May Come",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-JKaFlLHcQ8"
    },
    {
        "id": "may_blitz_the_2nd_of_may",
        "title": "The 2nd Of May",
        "artist": "May Blitz",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/may_blitz_the_2nd_of_may.jpg",
        "criteria": [7, 18, 42],
        "selectedTrackTitle": "Snakes And Ladders",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=OKy6SGSGQbw"
    },
    {
        "id": "michel_madore_le_komuso_a_cordes",
        "title": "Le Komuso À Cordes",
        "artist": "Michel Madore",
        "year": 1976,
        "country": "Quebec",
        "cover": "img/covers/michel_madore_le_komuso_a_cordes.jpg",
        "criteria": [6, 18, 19],
        "selectedTrackTitle": "Calligraphie",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=MMnA_1jYPCU"
    },
    {
        "id": "michel_madore_la_chambre_nuptiale",
        "title": "La Chambre Nuptiale",
        "artist": "Michel Madore",
        "year": 1979,
        "country": "Quebec",
        "cover": "img/covers/michel_madore_la_chambre_nuptiale.jpg",
        "criteria": [6, 8, 14, 16, 18, 44, 49],
        "selectedTrackTitle": "Les Anges Qui Passent",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-XR_7DT0E-c"
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
        "id": "miklagard_miklagard",
        "title": "Miklagård",
        "artist": "Miklagård",
        "year": 1979,
        "country": "Sweden",
        "cover": "img/covers/miklagard_miklagard.jpg",
        "criteria": [8, 11, 51],
        "selectedTrackTitle": "Soldaten",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=qcLbMdv1Ht0"
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
        "id": "the_moody_blues_in_search_of_the_lost_chord",
        "title": "In Search Of The Lost Chord",
        "artist": "The Moody Blues",
        "year": 1968,
        "country": "England",
        "cover": "img/covers/the_moody_blues_in_search_of_the_lost_chord.jpg",
        "criteria": [1, 18, 46],
        "selectedTrackTitle": "The Actor",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=29ihZ_TbFqY"
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
    {
        "id": "nazareth_hair_of_the_dog",
        "title": "Hair Of The Dog",
        "artist": "Nazareth",
        "year": 1975,
        "country": "Scotland",
        "cover": "img/covers/nazareth_hair_of_the_dog.jpg",
        "criteria": [7, 22, 40],
        "selectedTrackTitle": "Please Don't Judas Me",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=PdiIu1RwGhA"
    },
    {
        "id": "nightwinds_nightwinds",
        "title": "Nightwinds",
        "artist": "Nightwinds",
        "year": 1979,
        "country": "Canada",
        "cover": "img/covers/nightwinds_nightwinds.jpg",
        "criteria": [10, 20],
        "selectedTrackTitle": "As The Crow Flies",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=EmtT_l7MYsE"
    },
    // ************************************************************************************ //
    // **************************************** O **************************************** //
    // ********************************************************************************** //
    {
        "id": "ozric_tentacles_phalarn_dawn",
        "title": "Pungent Effulgent",
        "artist": "Ozric Tentacles",
        "year": 1989,
        "country": "England",
        "cover": "img/covers/ozric_tentacles_phalarn_dawn.jpg",
        "criteria": [6, 7, 8, 18, 19, 42, 44, 50],
        "selectedTrackTitle": "Phalarn Dawn",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=UQCYvIbznkw"
    },
    // ************************************************************************************ //
    // **************************************** P **************************************** //
    // ********************************************************************************** //
    {
        "id": "pangee_hymnemonde",
        "title": "Hymnemonde",
        "artist": "Pangée",
        "year": 1995,
        "country": "Quebec",
        "cover": "img/covers/pangee_hymnemonde.jpg",
        "criteria": [3, 6, 8, 18, 20],
        "selectedTrackTitle": "Cataracte",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=TVkcSh3COMc"
    },
    {
        "id": "peter_gabriel_car",
        "title": "Car",
        "artist": "Peter Gabriel",
        "year": 1977,
        "country": "England",
        "cover": "img/covers/peter_gabriel_car.jpg",
        "criteria": [48],
        "selectedTrackTitle": "Here Comes The Flood",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=vb7htoJAK7g"
    },
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
        "id": "pink_floyd_ummagumma",
        "title": "Ummagumma",
        "artist": "Pink Floyd",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/pink_floyd_ummagumma.jpg",
        "criteria": [9, 16, 18, 21],
        "selectedTrackTitle": "The Narrow Way",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=85Iz-_xigS8"
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
        "id": "plat_du_jour_plat_du_jour",
        "title": "Plat Du Jour",
        "artist": "Plat Du Jour",
        "year": 1977,
        "country": "France",
        "cover": "img/covers/plat_du_jour_plat_du_jour.jpg",
        "criteria": [3, 18, 19, 37, 40, 42],
        "selectedTrackTitle": "Zilbra",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=NnSnwsz9aXs"
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
        "id": "pythagoras_journey_to_the_vast_unknown",
        "title": "Journey To The Vast Unknown",
        "artist": "Pythagoras",
        "year": 1980,
        "country": "Netherlands",
        "cover": "img/covers/pythagoras_journey_to_the_vast_unknown.jpeg",
        "criteria": [6, 7, 14, 18, 44],
        "selectedTrackTitle": "Journey To The Vast Unknown (Part II)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=qLWSAGAjUqw"
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
    {
        "id": "quicksilver_messenger_service_happy_trails",
        "title": "Happy Trails",
        "artist": "Quicksilver Messenger Service",
        "year": 1969,
        "country": "USA",
        "cover": "img/covers/quicksilver_messenger_service_happy_trails.jpg",
        "criteria": [0, 6, 7, 12, 22, ],
        "selectedTrackTitle": "When Do You Love",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Rng54UMoxy8"
    },
    // ************************************************************************************ //
    // **************************************** R **************************************** //
    // ********************************************************************************** //
    {
        "id": "rainbow_rainbow",
        "title": "Rainbow",
        "artist": "Rainbow",
        "year": 1975,
        "country": "England",
        "cover": "img/covers/rainbow_rainbow.jpg",
        "criteria": [7, 22, 40],
        "selectedTrackTitle": "Catch The Rainbow",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=p3VgV31vmUE"
    },
    {
        "id": "rainbow_rising",
        "title": "Rising",
        "artist": "Rainbow",
        "year": 1976,
        "country": "England",
        "cover": "img/covers/rainbow_rising.jpg",
        "criteria": [7, 22, 30, 40],
        "selectedTrackTitle": "Stargazer",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=rVXy1OhaERY"
    },
    {
        "id": "rainbow_long_live_rock_n_roll",
        "title": "Long Live Rock 'N' Roll",
        "artist": "Rainbow",
        "year": 1978,
        "country": "England",
        "cover": "img/covers/rainbow_long_live_rock_n_roll.jpg",
        "criteria": [7, 22, 30, 40],
        "selectedTrackTitle": "Gates Of Babylon",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=MHCdCbTxypU"
    },
    {
        "id": "ralph_lundsten_shangri_la",
        "title": "Shangri-La",
        "artist": "Ralph Lundsten",
        "year": 1975,
        "country": "Sweden",
        "cover": "img/covers/ralph_lundsten_shangri_la.jpg",
        "criteria": [1, 6, 9, 11, 14, 18, 44],
        "selectedTrackTitle": "Shangri-La",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Gg0dopo1q4U"
    },
    {
        "id": "ralph_lundsten_ralph_lundstens_universe",
        "title": "Ralph Lundsten's Universe",
        "artist": "Ralph Lundsten",
        "year": 1976,
        "country": "Sweden",
        "cover": "img/covers/ralph_lundsten_ralph_lundstens_universe.jpg",
        "criteria": [1, 6, 9, 11, 14, 18, 44],
        "selectedTrackTitle": "The Blue Planet",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=nc207RhZQDQ"
    },
    {
        "id": "ralph_lundsten_discophrenia",
        "title": "Discophrenia",
        "artist": "Ralph Lundsten",
        "year": 1978,
        "country": "Sweden",
        "cover": "img/covers/ralph_lundsten_discophrenia.jpg",
        "criteria": [1, 6, 11, 14, 18, 42, 44],
        "selectedTrackTitle": "Discophrenia",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=wgWUJBJ4Tt8"
    },
    {
        "id": "ralph_lundsten_alpha_ralpha_boulevard",
        "title": "Alpha Ralpha Boulevard",
        "artist": "Ralph Lundsten",
        "year": 1979,
        "country": "Sweden",
        "cover": "img/covers/ralph_lundsten_alpha_ralpha_boulevard.jpg",
        "criteria": [1, 6, 11, 14, 18, 44],
        "selectedTrackTitle": "Alpha Ralpha Boulevard",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uKL5tj0FHDk"
    },
    {
        "id": "ralph_lundsten_paradissymfonin",
        "title": "Paradissymfonin",
        "artist": "Ralph Lundsten",
        "year": 1980,
        "country": "Sweden",
        "cover": "img/covers/ralph_lundsten_paradissymfonin.jpg",
        "criteria": [1, 6, 10, 11, 14, 44],
        "selectedTrackTitle": "Himmelens Port",
        "selectedTrackYtId": ""
    },
    {
        "id": "ralph_lundsten_the_new_age",
        "title": "The New Age",
        "artist": "Ralph Lundsten",
        "year": 1982,
        "country": "Sweden",
        "cover": "img/covers/ralph_lundsten_the_new_age.jpg",
        "criteria": [1, 6, 11, 14, 18, 42, 44],
        "selectedTrackTitle": "Time Storm",
        "selectedTrackYtId": ""
    },
    {
        "id": "ramses_la_leyla",
        "title": "La Leyla",
        "artist": "Ramses",
        "year": 1976,
        "country": "Germany",
        "cover": "img/covers/ramses_la_leyla.jpg",
        "criteria": [11, 20, 31],
        "selectedTrackTitle": "La Leyla",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=FmiSuG7PuVs"
    },
    {
        "id": "ramses_eternity_rise",
        "title": "Eternity Rise",
        "artist": "Ramses",
        "year": 1978,
        "country": "Germany",
        "cover": "img/covers/ramses_eternity_rise.jpg",
        "criteria": [11, 20, 31],
        "selectedTrackTitle": "Only Yesterday",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=KYfxukQkw10"
    },
    {
        "id": "ramses_light_fantastic",
        "title": "Light Fantastic",
        "artist": "Ramses",
        "year": 1981,
        "country": "Germany",
        "cover": "img/covers/ramses_light_fantastic.jpg",
        "criteria": [11, 20, 31],
        "selectedTrackTitle": "Across The Everglades",
        "selectedTrackYtId": ""
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
        "id": "return_to_forever_musicmagic",
        "title": "Musicmagic",
        "artist": "Return To Forever",
        "year": 1977,
        "country": "USA",
        "cover": "img/covers/return_to_forever_musicmagic.jpg",
        "criteria": [3, 7, 15, 23, 42],
        "selectedTrackTitle": "The Endless Night",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=STXJFzaAj0U"
    },
    {
        "id": "robert_connolly_plateau",
        "title": "Plateau",
        "artist": "Robert Connolly",
        "year": 1978,
        "country": "Canada",
        "cover": "img/covers/robert_connolly_plateau.jpg",
        "criteria": [6, 8, 20],
        "selectedTrackTitle": "Journey",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=c4t_ThUzI48"
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
        "id": "schicke_fuhrs_and_frohling_symphonic_pictures",
        "title": "Symphonic Pictures",
        "artist": "Schicke, Führs & Fröhling",
        "year": 1976,
        "country": "Germany",
        "cover": "img/covers/schicke_fuhrs_and_frohling_symphonic_pictures.jpg",
        "criteria": [6, 8, 10, 18, 44],
        "selectedTrackTitle": "Pictures",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=xvnRkJdbm6w"
    },
    {
        "id": "schicke_fuhrs_and_frohling_sunburst",
        "title": "Sunburst",
        "artist": "Schicke, Führs & Fröhling",
        "year": 1977,
        "country": "Germany",
        "cover": "img/covers/schicke_fuhrs_and_frohling_sunburst.jpg",
        "criteria": [3, 20],
        "selectedTrackTitle": "Troja",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=1AfQ2w-fY40"
    },
    {
        "id": "semiramis_dedicato_a_frazz",
        "title": "Dedicato A Frazz",
        "artist": "Semiramis",
        "year": 1973,
        "country": "Italy",
        "cover": "img/covers/semiramis_dedicato_a_frazz.jpg",
        "criteria": [3, 4, 10, 30, 36],
        "selectedTrackTitle": "Luna Park",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=T2PVgfv0OR4"
    },
    {
        "id": "serge_ramses_secret",
        "title": "Secret",
        "artist": "Serge Ramses",
        "year": 1978,
        "country": "France",
        "cover": "img/covers/serge_ramses_secret.jpg",
        "criteria": [6, 8, 11, 14, 44],
        "selectedTrackTitle": "Secret",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3K0UOKOdDvE"
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
        "id": "sir_lord_baltimore_kingdom_come",
        "title": "Kingdom Come",
        "artist": "Sir Lord Baltimore",
        "year": 1970,
        "country": "USA",
        "cover": "img/covers/sir_lord_baltimore_kingdom_come.jpg",
        "criteria": [7, 22, 40],
        "selectedTrackTitle": "Master Heartache",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=wQSz64rU9mM"
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
        "id": "spirogyra_st_radigunds",
        "title": "St. Radigunds",
        "artist": "Spirogyra",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/spirogyra_st_radigunds.jpg",
        "criteria": [18, 46],
        "selectedTrackTitle": "The Duke Of Beaufoot",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=D1jNLR9tjXE"
    },
    {
        "id": "spirogyra_old_boot_wine",
        "title": "Old Boot Wine",
        "artist": "Spirogyra",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/spirogyra_old_boot_wine.jpg",
        "criteria": [18, 46],
        "selectedTrackTitle": "A Canterbury Tale",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=o7Z5SIYACAU"
    },
    {
        "id": "spirogyra_bells_boots_and_shambles",
        "title": "Bells, Boots And Shambles",
        "artist": "Spirogyra",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/spirogyra_bells_boots_and_shambles.jpg",
        "criteria": [8, 18, 46],
        "selectedTrackTitle": "Old Boot Wine",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=-Q0rh2uESWY"
    },
    {
        "id": "starcastle_starcastle",
        "title": "Starcastle",
        "artist": "Starcastle",
        "year": 1976,
        "country": "USA",
        "cover": "img/covers/starcastle_starcastle.jpg",
        "criteria": [1, 3, 10, 20, 30],
        "selectedTrackTitle": "Elliptical Seasons",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=sSZepYc219Y"
    },
    {
        "id": "starcastle_fountains_of_light",
        "title": "Fountains Of Light",
        "artist": "Starcastle",
        "year": 1977,
        "country": "USA",
        "cover": "img/covers/starcastle_fountains_of_light.jpg",
        "criteria": [1, 3, 10, 20, 30],
        "selectedTrackTitle": "Silver Winds",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=0tmM4X3HnDk"
    },
    {
        "id": "starcastle_citadel",
        "title": "Citadel",
        "artist": "Starcastle",
        "year": 1977,
        "country": "USA",
        "cover": "img/covers/starcastle_citadel.jpg",
        "criteria": [1, 3, 10, 20, 30],
        "selectedTrackTitle": "Wings Of White",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Z8qyuL_wpXQ"
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
        "id": "supertramp_supertramp",
        "title": "Supertramp",
        "artist": "Supertramp",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/supertramp_supertramp.jpg",
        "criteria": [7, 11, 22, 48],
        "selectedTrackTitle": "Words Unspoken",
        "selectedTrackYtId": ""
    },
    {
        "id": "supertramp_indelibly_stamped",
        "title": "Indelibly Stamped",
        "artist": "Supertramp",
        "year": 1971,
        "country": "England",
        "cover": "img/covers/supertramp_indelibly_stamped.jpg",
        "criteria": [22, 48],
        "selectedTrackTitle": "Travelled",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=OzihNqVYElA"
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
        "id": "tangerine_dream_phaedra",
        "title": "Phaedra",
        "artist": "Tangerine Dream",
        "year": 1974,
        "country": "Germany",
        "cover": "img/covers/tangerine_dream_phaedra.jpg",
        "criteria": [6, 8, 11, 14, 18, 44],
        "selectedTrackTitle": "Sequent 'C'",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=Jb_hDcNr5KQ"
    },
    {
        "id": "tangerine_dream_rubycon",
        "title": "Rubycon",
        "artist": "Tangerine Dream",
        "year": 1975,
        "country": "Germany",
        "cover": "img/covers/tangerine_dream_rubycon.png",
        "criteria": [6, 8, 11, 14, 18, 44],
        "selectedTrackTitle": "Rubycon (Part I)",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=4xl6zlD_hlE"
    },
    {
        "id": "tea_and_symphony_jo_sago",
        "title": "Jo Sago",
        "artist": "Tea And Symphony",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/tea_and_symphony_jo_sago.jpg",
        "criteria": [2, 15, 42, 43, 46],
        "selectedTrackTitle": "Yourself",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=YlyCN0xb37g"
    },
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
        "id": "triumvirat_mediterranean_tales",
        "title": "Mediterranean Tales",
        "artist": "Triumvirat",
        "year": 1972,
        "country": "Germany",
        "cover": "img/covers/triumvirat_mediterranean_tales.jpg",
        "criteria": [3, 8, 10, 20, 30],
        "selectedTrackTitle": "Across The Waters",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=msni0_j51IU"
    },
    {
        "id": "triumvirat_illusions_on_a_double_dimple",
        "title": "Illusions On A Double Dimple",
        "artist": "Triumvirat",
        "year": 1973,
        "country": "Germany",
        "cover": "img/covers/triumvirat_illusions_on_a_double_dimple.jpg",
        "criteria": [3, 8, 10, 20, 30],
        "selectedTrackTitle": "Mister Ten Percent",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=7VAA7M5nXx8"
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
    {
        "id": "ultimate_spinach_ultimate_spinach",
        "title": "Ultimate Spinach",
        "artist": "Ultimate Spinach",
        "year": 1968,
        "country": "USA",
        "cover": "img/covers/ultimate_spinach_ultimate_spinach.jpg",
        "criteria": [18, 22],
        "selectedTrackTitle": "Ego Trip",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=uIy3WOK2-iY"
    },
    {
        "id": "uriah_heep_demons_and_wizards",
        "title": "Demons And Wizards",
        "artist": "Uriah Heep",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/uriah_heep_demons_and_wizards.jpg",
        "criteria": [22, 40],
        "selectedTrackTitle": "The Spell",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=w5L-AOGt7qw"
    },
    {
        "id": "uriah_heep_the_magicians_birthday",
        "title": "The Magician's Birthday",
        "artist": "Uriah Heep",
        "year": 1972,
        "country": "England",
        "cover": "img/covers/uriah_heep_the_magicians_birthday.jpg",
        "criteria": [22, 40],
        "selectedTrackTitle": "The Magician's Birthday",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=apWKh3D9oVw"
    },
    // ************************************************************************************ //
    // **************************************** V **************************************** //
    // ********************************************************************************** //
    {
        "id": "van_der_graaf_generator_the_aerosol_grey_machine",
        "title": "The Aerosol Grey Machine",
        "artist": "Van Der Graaf Generator",
        "year": 1969,
        "country": "England",
        "cover": "img/covers/van_der_graaf_generator_the_aerosol_grey_machine.jpg",
        "criteria": [18, 21],
        "selectedTrackTitle": "Octopus",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=N91EyGMzvgc"
    },
    {
        "id": "van_der_graaf_generator_the_least_that_we_can_do_is_wave_to_each_other",
        "title": "The Least We Can Do Is Wave To Each Other",
        "artist": "Van Der Graaf Generator",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/van_der_graaf_generator_the_least_that_we_can_do_is_wave_to_each_other.jpg",
        "criteria": [3, 10, 19, 21],
        "selectedTrackTitle": "After The Flood",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=oJUu9-s15PQ"
    },
    {
        "id": "van_der_graaf_generator_h_to_he_who_am_the_only_one",
        "title": "H To He, Who Am The Only One",
        "artist": "Van Der Graaf Generator",
        "year": 1970,
        "country": "England",
        "cover": "img/covers/van_der_graaf_generator_h_to_he_who_am_the_only_one.jpg",
        "criteria": [3, 8, 10, 19],
        "selectedTrackTitle": "The Emperor In His War Room",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=4wtUFJPGE0I"
    },
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
        "id": "weidorje_weidorje",
        "title": "Weidorje",
        "artist": "Weidorje",
        "year": 1978,
        "country": "France",
        "cover": "img/covers/weidorje_weidorje.jpg",
        "criteria": [3, 6, 8, 18, 19, 20, 39],
        "selectedTrackTitle": "Booldemug",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=3UyB0hlR6nw"
    },
    {
        "id": "windchase_symphinity",
        "title": "Simphinity",
        "artist": "Windchase",
        "year": 1977,
        "country": "Australia",
        "cover": "img/covers/windchase_symphinity.jpg",
        "criteria": [3, 7, 10, 16],
        "selectedTrackTitle": "Glad To Be Alive",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=grqGzuSak2s"
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
    {
        "id": "wizzard_wizzard_brew",
        "title": "Wizzard Brew",
        "artist": "Wizzard",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/wizzard_wizzard_brew.jpg",
        "criteria": [7, 8, 18, 22, 40, 45],
        "selectedTrackTitle": "Meet Me At The Jailhouse",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=sBzeB36zYvU"
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
        "id": "yes_tales_from_topographic_oceans",
        "title": "Tales From Topographic Oceans",
        "artist": "Yes",
        "year": 1973,
        "country": "England",
        "cover": "img/covers/yes_tales_from_topographic_oceans.jpg",
        "criteria": [1, 3, 5, 8, 10, 13, 18, 42],
        "selectedTrackTitle": "The Ancient",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=fMoE_2lV-bk"
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
        "id": "zanov_in_course_of_time",
        "title": "In Course Of Time",
        "artist": "Zanov",
        "year": 1982,
        "country": "France",
        "cover": "img/covers/zanov_in_course_of_time.jpg",
        "criteria": [6, 8, 11, 14, 44],
        "selectedTrackTitle": "Lost Message",
        "selectedTrackYtId": "https://www.youtube.com/watch?v=sYzgqOIkVS8"
    },
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

// Below is the list of prog artists that I listened and should be part of this project
// TODO fill some discographies, like Zappa, King Crimson, ...
/*  
Banco Del Mutuo Soccorso   
Delirium      
Fruupp 
Goblin
Grateful Dead
Happy The Man
Henry Cow 
Jane  
Nektar   
Premiata Forneria Marconi
Quatermass
Sloche  
Strawbs 
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