
const Attic = Vue.component('attic', {
    template: `
        <section id="atticVue">

            <section class="filter-section" data-simplebar>

                <div class="filter-section__panel">
                    <button
                        id="resetFilterButton"
                        @click="resetFilter()">
                        Reset filter
                    </button>
                </div>

                <div class="filter-section__title">
                    Region & Year
                </div>

                <div class="filter-section__panel" id="regionsYears">
                    <div class="select-wrapper">
                        <select
                            v-model="selectedRegion"
                            @change="selectRegion()">
                            <option value="All" selected>All</option>
                            <option
                                v-for="region in db.regions"
                                :value="region">{{region}}</option>
                        </select>
                    </div>
                    <div class="select-wrapper">
                        <select
                            v-model="selectedYear"
                            @change="selectYear()">
                            <option value="All" selected>All</option>
                            <option
                                v-for="year in years"
                                :value="year">{{year}}</option>
                        </select>
                    </div>
                </div>

                <template v-for="(filterSection, index) in filterModel">
                    <div
                        class="filter-section__title">
                        {{navItems[index]}}
                    </div>

                    <div
                        class="filter-section__panel">

                        <template
                            v-for="filterItem in filterSection">
    
                            <checkbox
                                :filter-item="filterItem"
                                @checkbox-clicked="toggleFilterItem(filterItem)">
                            </checkbox>
                        </template>
                        
                    </div>


                </template>

            </section>

            <section id="albumList" class="album-section">

                <div
                    class="album-wrapper"
                    v-for="album in db.albums"
                    :album-id="album.id"
                    @click="selectAlbumAndView(album)">

                    <album-thumb :album="album">
                    </album-thumb>

                </div>

            </section>

        </section>
    `,
    data() {
        const db = store.state.db; // Needs to be declared first to be used UNLESS refact in ENUM outside of DB

        const filter = [
            // Type panel
            [
                {
                    criterium: db.criteria.CONCEPT,
                    panel: 'Type',
                    string: this.$options.filters.criterium(db.criteria.CONCEPT),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'type',
                },
                {
                    criterium: db.criteria.STORYLINE,
                    panel: 'Type',
                    string: this.$options.filters.criterium(db.criteria.STORYLINE),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'type',
                },
                {
                    criterium: db.criteria.SOUNDTRACK,
                    panel: 'Type',
                    string: this.$options.filters.criterium(db.criteria.SOUNDTRACK),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'type',
                },
                {
                    criterium: db.criteria.LIVE,
                    panel: 'Type',
                    string: this.$options.filters.criterium(db.criteria.LIVE),
                    checked: false,
                    isRadio: false,
                },
            ],
            // Language panel
            [
                {
                    criterium: db.criteria.FRENCH_SUNG,
                    panel: 'Language',
                    string: this.$options.filters.criterium(db.criteria.FRENCH_SUNG),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'language',
                },
                {
                    criterium: db.criteria.ITALIAN_SUNG,
                    panel: 'Language',
                    string: this.$options.filters.criterium(db.criteria.ITALIAN_SUNG),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'language',
                },
                {
                    criterium: db.criteria.SPANISH_SUNG,
                    panel: 'Language',
                    string: this.$options.filters.criterium(db.criteria.SPANISH_SUNG),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'language',
                },
                {
                    criterium: db.criteria.SWEDISH_SUNG,
                    panel: 'Language',
                    string: this.$options.filters.criterium(db.criteria.SWEDISH_SUNG),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'language',
                },
                {
                    criterium: db.criteria.ZEUHL,
                    panel: 'Language',
                    string: this.$options.filters.criterium(db.criteria.ZEUHL),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'language',
                },
            ],
            // Theme panel
            [
                {
                    criterium: db.criteria.SCI_FI,
                    panel: 'Theme',
                    string: this.$options.filters.criterium(db.criteria.SCI_FI),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'theme',
                },
                {
                    criterium: db.criteria.FANTASY,
                    panel: 'Theme',
                    string: this.$options.filters.criterium(db.criteria.FANTASY),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'theme',
                },
                {
                    criterium: db.criteria.MEDIEVAL,
                    panel: 'Theme',
                    string: this.$options.filters.criterium(db.criteria.MEDIEVAL),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'theme',
                },
                {
                    criterium: db.criteria.OCCULT,
                    panel: 'Theme',
                    string: this.$options.filters.criterium(db.criteria.OCCULT),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'theme',
                },
                {
                    criterium: db.criteria.SPIRITUAL,
                    panel: 'Theme',
                    string: this.$options.filters.criterium(db.criteria.SPIRITUAL),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'theme',
                },
            ],
            // Main genre panel
            [
                {
                    criterium: db.criteria.ROCK,
                    panel: 'Main genre',
                    string: this.$options.filters.criterium(db.criteria.ROCK),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'mainGenre',
                },
                {
                    criterium: db.criteria.JAZZ,
                    panel: 'Main genre',
                    string: this.$options.filters.criterium(db.criteria.JAZZ),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'mainGenre',
                },
                {
                    criterium: db.criteria.FOLK,
                    panel: 'Main genre',
                    string: this.$options.filters.criterium(db.criteria.FOLK),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'mainGenre',
                },
                {
                    criterium: db.criteria.ELECTRO,
                    panel: 'Main genre',
                    string: this.$options.filters.criterium(db.criteria.ELECTRO),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'mainGenre',
                },
                {
                    criterium: db.criteria.ART_POP,
                    panel: 'Main genre',
                    string: this.$options.filters.criterium(db.criteria.ART_POP),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'mainGenre',
                },
            ],
            // Contains elements of panel
            [
                {
                    criterium: db.criteria.C_JAZZ,
                    panel: 'Contains elements of',
                    string: this.$options.filters.criterium(db.criteria.C_JAZZ),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.C_FOLK,
                    panel: 'Contains elements of',
                    string: this.$options.filters.criterium(db.criteria.C_FOLK),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.C_ELECTRO,
                    panel: 'Contains elements of',
                    string: this.$options.filters.criterium(db.criteria.C_ELECTRO),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.C_PSYCHEDELIC,
                    panel: 'Contains elements of',
                    string: this.$options.filters.criterium(db.criteria.C_PSYCHEDELIC),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.BLENDS,
                    panel: 'Contains elements of',
                    string: this.$options.filters.criterium(db.criteria.BLENDS),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'blends'
                },
            ],
            // Style panel
            [
                {
                    criterium: db.criteria.ODD_RHYTHM,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.ODD_RHYTHM),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.TECHNICAL,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.TECHNICAL),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.INSTRUMENTAL,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.INSTRUMENTAL),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.EXPERIMENTAL,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.EXPERIMENTAL),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.JAM,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.JAM),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.SOPHISTICATED,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.SOPHISTICATED),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.JAZZY_GROOVY,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.JAZZY_GROOVY),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.ROCK_OPERA,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.ROCK_OPERA),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.FANFARE,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.FANFARE),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.SPACY,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.SPACY),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.GLITTER,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.GLITTER),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.AMBIENT,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.AMBIENT),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.ORIENTAL,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.ORIENTAL),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.RENAISSANCE,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.RENAISSANCE),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.ARENA,
                    panel: 'Style',
                    string: this.$options.filters.criterium(db.criteria.ARENA),
                    checked: false,
                    isRadio: false,
                },
            ],
            // Album structuration
            [
                {
                    criterium: db.criteria.LENGTHY_TRACKS,
                    panel: 'Album structuration',
                    string: this.$options.filters.criterium(db.criteria.LENGTHY_TRACKS),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.PATCHWORK,
                    panel: 'Album structuration',
                    string: this.$options.filters.criterium(db.criteria.PATCHWORK),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.TRANSITION,
                    panel: 'Album structuration',
                    string: this.$options.filters.criterium(db.criteria.TRANSITION),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.SYMPHONIC,
                    panel: 'Album structuration',
                    string: this.$options.filters.criterium(db.criteria.SYMPHONIC),
                    checked: false,
                    isRadio: false,
                },
            ],
            // Era sound
            [
                {
                    criterium: db.criteria.CRISPY_SIXTIES,
                    panel: 'Era sound',
                    string: this.$options.filters.criterium(db.criteria.CRISPY_SIXTIES),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'eraSound'
                },
                {
                    criterium: db.criteria.GREASY_SEVENTIES,
                    panel: 'Era sound',
                    string: this.$options.filters.criterium(db.criteria.GREASY_SEVENTIES),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'eraSound'
                },
                {
                    criterium: db.criteria.SOFT_SEVENTIES,
                    panel: 'Era sound',
                    string: this.$options.filters.criterium(db.criteria.SOFT_SEVENTIES),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'eraSound'
                },
                {
                    criterium: db.criteria.NEO_EIGHTIES,
                    panel: 'Era sound',
                    string: this.$options.filters.criterium(db.criteria.NEO_EIGHTIES),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'eraSound'
                },
            ],
            // Loudness
            [
                {
                    criterium: db.criteria.SOFT,
                    panel: 'Loudness',
                    string: this.$options.filters.criterium(db.criteria.SOFT),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'softHeavy'
                },
                {
                    criterium: db.criteria.HEAVY,
                    panel: 'Loudness',
                    string: this.$options.filters.criterium(db.criteria.HEAVY),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'softHeavy'
                },
                {
                    criterium: db.criteria.HUMBLE,
                    panel: 'Loudness',
                    string: this.$options.filters.criterium(db.criteria.HUMBLE),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'humbleSpectacular'
                },
                {
                    criterium: db.criteria.SPECTACULAR,
                    panel: 'Loudness',
                    string: this.$options.filters.criterium(db.criteria.SPECTACULAR),
                    checked: false,
                    isRadio: true,
                    radioFamily: 'humbleSpectacular'
                },
            ],
            // Arrangement
            [
                {
                    criterium: db.criteria.UNCOMMON_INSTRUMENTS,
                    panel: 'Arrangement',
                    string: this.$options.filters.criterium(db.criteria.UNCOMMON_INSTRUMENTS),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.FEMALE,
                    panel: 'Arrangement',
                    string: this.$options.filters.criterium(db.criteria.FEMALE),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.SOUND_COLLAGES,
                    panel: 'Arrangement',
                    string: this.$options.filters.criterium(db.criteria.SOUND_COLLAGES),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.ORCHESTRAL_PARTS,
                    panel: 'Arrangement',
                    string: this.$options.filters.criterium(db.criteria.ORCHESTRAL_PARTS),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.BAROQUE,
                    panel: 'Arrangement',
                    string: this.$options.filters.criterium(db.criteria.BAROQUE),
                    checked: false,
                    isRadio: false,
                }
            ],
            // Temper
            [
                {
                    criterium: db.criteria.FUNNY,
                    panel: 'Temper',
                    string: this.$options.filters.criterium(db.criteria.FUNNY),
                    checked: false,
                    isRadio: false,
                },
                {
                    criterium: db.criteria.TOUCHING_VOCALS,
                    panel: 'Temper',
                    string: this.$options.filters.criterium(db.criteria.TOUCHING_VOCALS),
                    checked: false,
                    isRadio: false,
                }
            ]
        ];

        return {
            db: store.state.db,
            views: views,
            years: Object.keys(albumsPerYear),
            selectedRegion: 'All',
            selectedYear: 'All',
            filterModel: filter,
            albumListWidth: 0
        }
    },
    computed: {
        navItems() {
            return ['Type', 'Language', 'Theme', 'Main genre', "Contains elements of", 'Style', 'Album structuration', 'Era sound', 'Loudness', 'Arrangement', 'Temper']
        },
        albumWrapperSize() {
            const nbOfAlbumsPerRow = 8;
            const albumWrapperSize = Math.floor(this.albumListWidth / nbOfAlbumsPerRow);

            return albumWrapperSize;
        }
    },
    mounted() {
        this.albumListWidth = document.getElementById('albumList').clientWidth;
    },
    methods: {
        selectAlbumAndView(album) {
            store.commit('selectAlbum', album);
						router.push(views.DISCOGRAPHIES);
        },
        changed() {
            if(document.getElementById('albumList')) {
                this.albumListWidth = document.getElementById('albumList').clientWidth;
            }
        },
        selectRegion() {
            this.applyFilter();
        },
        selectYear() {
            this.applyFilter();
        },
        toggleFilterItem(filterItem) {
            // filterItem is the whole object
            const indexOfFilterPanel = this.navItems.indexOf(filterItem.panel); 

            for(let i = 0; i < this.filterModel[indexOfFilterPanel].length; i++) {
                const filterModelItem = this.filterModel[indexOfFilterPanel][i];
                if(filterItem.criterium == filterModelItem.criterium) {
                    this.handleRadioCases(filterItem);
                    filterModelItem.checked = !filterModelItem.checked;
                    this.applyFilter();
                    return;
                }
            }
        },
        handleRadioCases(filterItem) {

            const indexOfFilterPanel = this.navItems.indexOf(filterItem.panel); // TODO make sure this is syncrhonized if filter nav items order is updated
            const panelCheckboxes = this.filterModel[indexOfFilterPanel];

            // 'Blends many music genres' case
            if(filterItem.criterium == this.db.criteria.BLENDS) {
                // const specialRadioCase = ['Contains Jazz elements', 'Contains Folk elements', 'Contains electronic elements', 'Contains psychedelic elements'];

                for(let i = 0; i < panelCheckboxes.length; i++) {
                    if(panelCheckboxes[i].criterium == this.db.criteria.BLENDS) {
                        // Toggle
                        // panelCheckboxes[i].checked = !panelCheckboxes[i].checked; // This is done just before
                    } else {
                        panelCheckboxes[i].checked = false;
                    }
                }

            // 'Blends many music genres' case (opposite)
            } else if(filterItem.criterium == this.db.criteria.C_JAZZ
                        || filterItem.criterium == this.db.criteria.C_FOLK
                        || filterItem.criterium == this.db.criteria.C_ELECTRO
                        || filterItem.criterium == this.db.criteria.C_PSYCHEDELIC) {

                for(let i = 0; i < panelCheckboxes.length; i++) {
                    if(panelCheckboxes[i].criterium == this.db.criteria.BLENDS) {
                        panelCheckboxes[i].checked = false;
                        break;
                    }
                }

            // Standard cases
            } else {
                for(let i = 0; i < panelCheckboxes.length; i++) {
                    if(panelCheckboxes[i].isRadio) {
                        if(filterItem.criterium != panelCheckboxes[i].criterium && panelCheckboxes[i].radioFamily == filterItem.radioFamily) {
                            // Not self but same radio family
                            panelCheckboxes[i].checked = false; // Reset
                        }
                    }
                }
            }
        },
        applyFilter() {
            // For each album
            for(let i = 0; i < this.db.albums.length; i++) {
                const album = this.db.albums[i];
                let nbOfCheckedCriteria = 0;
                let nbOfMatchingCriteria = 0;
                // For each filter criteria
                for(let j = 0; j < this.filterModel.length; j++) {
                    for(let k = 0; k < this.filterModel[j].length; k++) {
                        const filterItem = this.filterModel[j][k];
                        if(filterItem.checked) {
                            nbOfCheckedCriteria++
                            // If criterium matches
                            if(album.criteria.includes(filterItem.criterium)) {
                                nbOfMatchingCriteria++;
                            }
                        }
                    }
                }

                // Query selector all to get also the overlay which holds the album-id
                const elementsToHandleDisplay = document.querySelectorAll('[album-id=' + album.id + ']');
                for(let j = 0; j < elementsToHandleDisplay.length; j++) {
                    if(nbOfMatchingCriteria == nbOfCheckedCriteria) {
                        // Quite dirty, but it seems that all criteria match
                        if(elementsToHandleDisplay[j].classList.contains('hidden')) {
                            elementsToHandleDisplay[j].classList.remove('hidden');
                        }
                    } else {
                        // Hide
                        if(!elementsToHandleDisplay[j].classList.contains('hidden')) {
                            elementsToHandleDisplay[j].classList.add('hidden');
                        }
                    }

                    // Criteria are checked, now check for the region
                    if(!elementsToHandleDisplay[j].classList.contains('hidden')) {
                        // Element is displayed...
                        const noRegionsMatch = this.selectedRegion != 'All' && album.country != this.selectedRegion;
                        const noYearsMatch = this.selectedYear != 'All' && album.year != parseInt(this.selectedYear, 10); 
                        if(noRegionsMatch || noYearsMatch) {
                            // ...But its region or year does not match, so hide it
                            elementsToHandleDisplay[j].classList.add('hidden');
                        }
                    }
                }
            }
        },
        resetFilter() {
            // Reset region
            this.selectedRegion = 'All';
            this.selectedYear = 'All';
            // Reset criteria
            for(let i = 0; i < this.filterModel.length; i++) {
                for(let j = 0; j < this.filterModel[i].length; j++) {
                    const filterItem = this.filterModel[i][j];
                    filterItem.checked = false;
                }
            }
            // Query selector all to get also the overlay which holds the album-id
            const elementsToDisplay = document.querySelectorAll('[album-id]');
            for(let i = 0; i < elementsToDisplay.length; i++) {
                if(elementsToDisplay[i].classList.contains('hidden')) {
                    elementsToDisplay[i].classList.remove('hidden');
                }
            }
        }
    }
})