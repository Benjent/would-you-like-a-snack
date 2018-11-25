const subgenres = [
    {
        "name": "Art Pop / Crossover Prog",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("supertramp_crime_of_the_century"),
        "albums": [
            getAlbumById("peter_gabriel_car"),
            getAlbumById("david_bowie_the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars"),
            getAlbumById("the_doors_the_soft_parade"),
            getAlbumById("kate_bush_never_for_ever")
        ],
        "criteria": [criteria.ART_POP, criteria.BLENDS, criteria.ROCK_OPERA, criteria.FANFARE, criteria.TOUCHING_VOCALS, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE]
    },
    {
        "name": "Avant-Prog / Experimental",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("henry_cow_legend"),
        "albums": [
            getAlbumById("area_arbeit_macht_frei"),
            getAlbumById("faust_faust"),
            getAlbumById("baba_yaga_collage"),
            getAlbumById("soft_machine_third")
        ],
        "criteria": [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.C_ELECTRO, criteria.C_PSYCHEDELIC, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES]
    },
    {
        "name": "Canterbury School / Folk Rock",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("caravan_in_the_land_of_grey_and_pink"),
        "albums": [
            getAlbumById("national_health_national_health"),
            getAlbumById("jethro_tull_thick_as_a_brick"),
            getAlbumById("camel_camel")
        ],
        "criteria": [criteria.FOLK, criteria.C_FOLK, criteria.C_JAZZ, criteria.JAM, criteria.JAZZY_GROOVY, criteria.SOFT, criteria.FUNNY]
    },
    {
        "name": "Eclectic",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("gentle_giant_acquiring_the_taste"),
        "albums": [
            getAlbumById("king_crimson_red"),
            getAlbumById("alpha_ralpha_alpha_ralpha"),
            getAlbumById("jade_warrior_way_of_the_sun")
        ],
        "criteria": [criteria.CONCEPT, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.SOPHISTICATED, criteria.UNCOMMON_INSTRUMENTS]
    },
    {
        "name": "Electro Rock",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("electric_light_orchestra_time"),
        "albums": [
            getAlbumById("asia_asia"),
            getAlbumById("happy_the_man_happy_the_man"),
            getAlbumById("ml_bongers_project_pacific_prison"),
            getAlbumById("triumvirat_spartacus")
        ],
        "criteria": [criteria.ELECTRO, criteria.C_ELECTRO, criteria.GLITTER, criteria.SCI_FI, criteria.SPECTACULAR]
    },
    {
        "name": "Fantasy / Baroque",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("deep_purple_the_book_of_taliesyn"),
        "albums": [
            getAlbumById("the_moody_blues_days_of_future_passed"),
            getAlbumById("the_beatles_yellow_submarine"),
            getAlbumById("pink_floyd_the_piper_at_the_gates_of_dawn"),
            getAlbumById("fantasy_paint_a_picture"),
            // Procol Harum
        ],
        "criteria": [criteria.C_FOLK, criteria.C_ELECTRO, criteria.FANTASY, criteria.BAROQUE, criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.FANFARE]
    },
    {
        "name": "Folk",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("spirogyra_old_boot_wine"),
        "albums": [
        ],
        "criteria": [criteria.FOLK, criteria.FANTASY, criteria.SOFT, criteria.HUMBLE, criteria.C_PSYCHEDELIC]
    },
    {
        "name": "Glitter",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("windchase_symphinity"),
        "albums": [
            getAlbumById("starcastle_starcastle"),
            getAlbumById("yes_going_for_the_one"),
            getAlbumById("nightwinds_nightwinds"),
            getAlbumById("ramses_light_fantastic")
        ],
        "criteria": [criteria.GLITTER, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.C_ELECTRO]
    },
    {
        "name": "Heavy",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("uriah_heep_demons_and_wizards"),
        "albums": [
            getAlbumById("rainbow_rising"),
            getAlbumById("winterhawk_revival"),
            getAlbumById("badger_one_live_badger")
        ],
        "criteria": [criteria.HEAVY, criteria.ROCK, criteria.JAM, criteria.FANTASY, criteria.ODD_RHYTHM]
    },
    {
        "name": "Jazz Rock / Jazz Fusion",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("frank_zappa_hot_rats"),
        "albums": [
            getAlbumById("return_to_forever_romantic_warrior"),
            getAlbumById("weather_report_black_market"),
            getAlbumById("gong_gazeuse"),
            getAlbumById("herbie_hancock_thrust")
        ],
        "criteria": [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.SOFT]
    },
    {
        "name": "New Age / Electronic Ambient",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("jean_michel_jarre_oxygene"),
        "albums": [
            getAlbumById("zanov_in_course_of_time"),
            getAlbumById("tangerine_dream_phaedra"),
            getAlbumById("ralph_lundsten_alpha_ralpha_boulevard"),
            getAlbumById("anna_sjalv_tredje_tussilago_fanfara"),
            getAlbumById("vangelis_beaubourg"),
            getAlbumById("pythagoras_journey_to_the_vast_unknown")
        ],
        "criteria": [criteria.ELECTRO, criteria.AMBIENT, criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.SOFT, criteria.C_PSYCHEDELIC, criteria.SCI_FI, criteria.SOUND_COLLAGES]
    },
    {
        "name": "Neo-Prog",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("marillion_script_for_a_jesters_tear"),
        "albums": [
            getAlbumById("king_crimson_three_of_a_perfect_pair"),
            getAlbumById("low_flying_aircraft_low_flying_aircraft"),
            getAlbumById("camel_nude"),
            getAlbumById("eskaton_4_visions"),
            getAlbumById("kaipa_nattdjurstid")
        ],
        "criteria": [criteria.ELECTRO, criteria.C_ELECTRO, criteria.ART_POP, criteria.SOFT, criteria.CONCEPT, criteria.TOUCHING_VOCALS, criteria.NEO_EIGHTIES]
    },
    {
        "name": "Occult / Heavy",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("black_widow_sacrifice"),
        "albums": [
            getAlbumById("black_sabbath_black_sabbath"),
            getAlbumById("coven_witchcraft_destroys_minds_and_reaps_souls"),
            getAlbumById("sir_lord_baltimore_kingdom_come"),
            getAlbumById("warhorse_warhorse"),
            getAlbumById("aphrodites_child_666")
        ],
        "criteria": [criteria.OCCULT, criteria.HEAVY, criteria.C_PSYCHEDELIC, criteria.ROCK, criteria.C_FOLK, criteria.JAM]
    },
    {
        "name": "Opera Rock / Fanfare",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("roger_glover_the_butterfly_ball_and_the_grasshoppers_feast"),
        "albums": [
            getAlbumById("queen_queen_ii"),
            getAlbumById("the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown"),
            getAlbumById("frank_zappa_joes_garage"),
            getAlbumById("roy_wood_mustard"),
            getAlbumById("wizzard_wizzard_brew"),
            getAlbumById("andrew_lloyd_webber_and_tim_rice_jesus_christ_superstar"),
            getAlbumById("la_revolution_francaise_la_revolution_francaise"),
        ],
        "criteria": [criteria.ROCK_OPERA, criteria.ART_POP, criteria.BLENDS, criteria.FANFARE, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE, criteria.TRANSITION, criteria.STORYLINE]
    },
    {
        "name": "Progcore / Small Symphonic",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("kaipa_kaipa"),
        "albums": [
            getAlbumById("alphataurus_alphataurus"),
            getAlbumById("camel_moonmadness"),
            getAlbumById("canamii_concept"),
            getAlbumById("circus_movin_on"),
            getAlbumById("emerson_lake_and_palmer_emerson_lake_and_palmer"),
            getAlbumById("focus_moving_waves"),
            getAlbumById("fuchsia_fuchsia"),
            getAlbumById("genesis_a_trick_of_the_tail"),
            getAlbumById("gnidrolog_lady_lake"),
            getAlbumById("harmonium_si_on_avait_besoin_dune_cinquieme_saison"),
            getAlbumById("ikarus_ikarus"),
            getAlbumById("khan_space_shanty"),
            getAlbumById("miklagard_miklagard"),
            getAlbumById("pink_floyd_dark_side_of_the_moon"),
            getAlbumById("robert_connolly_plateau"),
            getAlbumById("zyma_brave_new_world"),
        ],
        "criteria": [criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.SOPHISTICATED, criteria.TECHNICAL, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.ODD_RHYTHM]
    },
    {
        "name": "Psychedelic",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("gong_flying_teapot"),
        "albums": [
            getAlbumById("can_tago_mago"),
            getAlbumById("sweet_smoke_just_a_poke"),
            getAlbumById("frank_zappa_were_only_in_it_for_the_money"),
            getAlbumById("amon_duul_paradieswarts_duul"),
            getAlbumById("the_incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion"),
            getAlbumById("jefferson_airplane_crown_of_creation"),
            getAlbumById("ultimate_spinach_ultimate_spinach"),
            getAlbumById("may_blitz_may_blitz")
        ],
        "criteria": [criteria.C_PSYCHEDELIC, criteria.AMBIENT, criteria.PATCHWORK, criteria.C_FOLK, criteria.CRISPY_SIXTIES, criteria.SOFT]
    },
    {
        "name": "Renaissance",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("semiramis_dedicato_a_frazz"),
        "albums": [
            getAlbumById("ange_au_dela_du_delire")
        ],
        "criteria": []
    },
    {
        "name": "Space Rock",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("hawkwind_doremi_fasol_latido"),
        "albums": [
            getAlbumById("nektar_a_tab_in_the_ocean"),
            getAlbumById("ozric_tentacles_strangeitude"),
        ],
        "criteria": []
    },
    {
        "name": "Symphonic",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("yes_close_to_the_edge"),
        "albums": [
            getAlbumById("mike_oldfield_hergest_ridge"),
            getAlbumById("bubu_anabelas"),
            getAlbumById("van_der_graaf_generator_h_to_he_who_am_the_only_one"),
            getAlbumById("emerson_lake_and_palmer_tarkus"),
            getAlbumById("eloy_ocean")
        ],
        "criteria": []
    },
    {
        "name": "Zeuhl",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("magma_mekanik_destruktiw_kommandoh"),
        "albums": [
            getAlbumById("weidorje_weidorje")
        ],
        "criteria": [criteria.ZEUHL, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.SCI_FI, criteria.LENGTHY_TRACKS, criteria.CONCEPT, criteria.C_PSYCHEDELIC, criteria.EXPERIMENTAL, criteria.FANFARE, criteria.C_JAZZ, criteria.SYMPHONIC]
    }
    
];