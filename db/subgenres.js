const subgenres = [
    {
        "name": "Art Pop / Crossover Prog",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("supertramp_crime_of_the_century"),
        "albums": [
            getAlbumById("peter_gabriel_car"),
            getAlbumById("david_bowie_the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars"),
            getAlbumById("the_doors_the_soft_parade"),
            getAlbumById("raymond_vincent_metronomics")
        ]
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
        ]
    },
    {
        "name": "Canterbury School / Folk Rock",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("caravan_in_the_land_of_grey_and_pink"),
        "albums": [
            getAlbumById("national_health_national_health"),
            getAlbumById("jethro_tull_thick_as_a_brick"),
            getAlbumById("camel_camel")
        ]
    },
    {
        "name": "Eclectic",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("gentle_giant_acquiring_the_taste"),
        "albums": [
            getAlbumById("king_crimson_red"),
            getAlbumById("alpha_ralpha_alpha_ralpha"),
            getAlbumById("jade_warrior_way_of_the_sun")
        ]
    },
    {
        "name": "Electro Rock",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("eloy_ocean"),
        "albums": [
            getAlbumById("electric_light_orchestra_time"),
            getAlbumById("asia_asia"),
            getAlbumById("happy_the_man_happy_the_man"),
            getAlbumById("ml_bongers_project_pacific_prison"),
            getAlbumById("triumvirat_spartacus")
        ]
    },
    {
        "name": "Fantasy / Baroque",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("deep_purple_the_book_of_taliesyn"),
        "albums": [
            getAlbumById("the_moody_blues_days_of_future_passed"),
            getAlbumById("the_beatles_yellow_submarine"),
            getAlbumById("pink_floyd_the_piper_at_the_gates_of_dawn")
            // Fantasy paint a picture
            // Procol Harum
        ]
    },
    {
        "name": "Folk",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("spirogyra_old_boot_wine"),
        "albums": [
        ]
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
        ]
    },
    {
        "name": "Heavy",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("uriah_heep_demons_and_wizards"),
        "albums": [
            getAlbumById("rainbow_rising"),
            getAlbumById("winterhawk_revival"),
            getAlbumById("badger_one_live_badger")
        ]
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
        ]
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
        ]
    },
    {
        "name": "Neo-Prog",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("marillion_script_for_a_jesters_tear"),
        "albums": [
            getAlbumById("king_crimson_three_of_a_perfect_pair"),
            getAlbumById("low_flying_aircraft_low_flying_aircraft"),
            getAlbumById("camel_nude"),
            getAlbumById("eskaton_4_visions")
        ]
    },
    {
        "name": "Opera Rock / Fanfare",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("roger_glover_the_butterfly_ball_and_the_grasshoppers_feast"),
        "albums": [
            getAlbumById("queen_queen_II"),
            getAlbumById("the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown"),
            getAlbumById("frank_zappa_joes_garage")
            // "jesus christ superstar"
        ]
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
        ]
    },
    {
        "name": "Renaissance",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("semiramis_dedicato_a_frazz"),
        "albums": [
        ]
    },
    {
        "name": "Space Rock",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("hawkwind_doremi_fasol_latido"),
        "albums": [
            // "ozric"
        ]
    },
    {
        "name": "Symphonic",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("yes_close_to_the_edge"),
        "albums": [
            getAlbumById("mike_oldfield_hergest_ridge"),
            getAlbumById("bubu_anabelas"),
            getAlbumById("van_der_graaf_generator_h_to_he_who_am_the_only_one"),
            getAlbumById("emerson_lake_and_palmer_tarkus")
        ]
    },
    {
        "name": "Zeuhl",
        "description": "TODO",
        "mostRepresentativeAlbum": getAlbumById("magma_mekanik_destruktiw_kommandoh"),
        "albums": [
            getAlbumById("weidorje_weidorje")
        ]
    }
    
];