Vue.directive('resize', {
    bind: function () {
        this.handler = function () {
            var width = document.getElementById("albumList").offsetWidth

            if (this.width === width) {

            }
            else {
                // console.log(this.width, width)
                this.width = width
                // this.vm.$get(this.expression)
            }
        }.bind(this)

        window.addEventListener('resize', this.handler)
    },
    update: function (newValue, oldValue) {

    },
    unbind: function () {
        window.removeEventListener('resize', this.handler)
    }
})


Vue.component('attic', {
    template: `
        <section id="atticVue">

            <div id="filter">

                <div class="filter-nav-item">
                    Region
                </div>

                <div class="filter-panel">
                    <select
                        v-model="selectedRegion"
                        v-on:change="selectRegion()">
                        <option value="All" selected>All</option>
                        <option
                            v-for="(albums, country) in db.albumsPerCountry"
                            :value="country">{{country}}</option>
                    </select>
                </div>

                <template v-for="(filterSection, index) in filterModel">
                    <div
                        class="filter-nav-item">
                        {{navItems[index]}}
                    </div>

                    <div
                        class="filter-panel">

                        <template
                            v-for="filterItem in filterSection">
    
                            <checkbox
                                v-bind:filter-item="filterItem"
                                v-on:checkbox-clicked="toggleFilterItem(filterItem)">
                            </checkbox>
                        </template>
                        
                    </div>


                </template>

            </div>

            <section id="albumList" v-resize="changed()">

                <div
                    class="album-wrapper"
                    v-for="album in db.albums"
                    v-bind:album-id="album.id"
                    v-on:click="$emit('album-click', album)">

                    <div
                        class="album-infos"
                        v-bind:album-id="album.id">

                        <span
                            class="album-artist"
                            v-bind:album-id="album.id">
                            {{album.artist}}
                        </span>
                        <span
                            class="album-title"
                            v-bind:album-id="album.id">
                            {{album.title}}
                        </span>
                        <span
                            class="album-year"
                            v-bind:album-id="album.id">
                            {{album.year}}
                        </span>
                        <span
                            class="album-rating"
                            v-if="album.isAGem"
                            v-bind:album-id="album.id">
                            This is a must-hear
                        </span>
                        
                    </div>

                    <img class="album" v-bind:src=album.cover alt="">
                
                </div>

            </section>

        </section>
    `,
    props: ['db'],
    data: function () {

        const filter = [
            // Type panel
            [
                {
                    "criterium": this.db.criteria.CONCEPT,
                    "panel": "Type",
                    "string": "Concept album",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "type",
                },
                {
                    "criterium": this.db.criteria.STORYLINE,
                    "panel": "Type",
                    "string": "Storyline",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "type",
                },
                {
                    "criterium": this.db.criteria.SOUNDTRACK,
                    "panel": "Type",
                    "string": "Soundtrack album",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "type",
                },
                {
                    "criterium": this.db.criteria.LIVE,
                    "panel": "Type",
                    "string": "Live album",
                    "checked": false,
                    "isRadio": false,
                },
            ],
            // Language panel
            [
                {
                    "criterium": this.db.criteria.FRENCH_SUNG,
                    "panel": "Language",
                    "string": "French",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "language",
                },
                {
                    "criterium": this.db.criteria.ITALIAN_SUNG,
                    "panel": "Language",
                    "string": "Italian",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "language",
                },
                {
                    "criterium": this.db.criteria.SPANISH_SUNG,
                    "panel": "Language",
                    "string": "Spanish",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "language",
                },
                {
                    "criterium": this.db.criteria.SWEDISH_SUNG,
                    "panel": "Language",
                    "string": "Swedish",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "language",
                },
                {
                    "criterium": this.db.criteria.ZEUHL,
                    "panel": "Language",
                    "string": "Zeuhl",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "language",
                },
            ],
            // Theme panel
            [
                {
                    "criterium": this.db.criteria.SCI_FI,
                    "panel": "Theme",
                    "string": "Sci-fi",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "theme",
                },
                {
                    "criterium": this.db.criteria.FANTASY,
                    "panel": "Theme",
                    "string": "Fantasy",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "theme",
                },
                {
                    "criterium": this.db.criteria.MEDIEVAL,
                    "panel": "Theme",
                    "string": "Medieval",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "theme",
                },
                {
                    "criterium": this.db.criteria.OCCULT,
                    "panel": "Theme",
                    "string": "Occult",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "theme",
                },
                {
                    "criterium": this.db.criteria.SPIRITUAL,
                    "panel": "Theme",
                    "string": "Spiritual",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "theme",
                },
            ],
            // Main genre panel
            [
                {
                    "criterium": this.db.criteria.ROCK,
                    "panel": "Main genre",
                    "string": "Rock",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "mainGenre",
                },
                {
                    "criterium": this.db.criteria.JAZZ,
                    "panel": "Main genre",
                    "string": "Jazz",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "mainGenre",
                },
                {
                    "criterium": this.db.criteria.FOLK,
                    "panel": "Main genre",
                    "string": "Folk",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "mainGenre",
                },
                {
                    "criterium": this.db.criteria.ELECTRO,
                    "panel": "Main genre",
                    "string": "Electro",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "mainGenre",
                },
                {
                    "criterium": this.db.criteria.ART_POP,
                    "panel": "Main genre",
                    "string": "Art Pop",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "mainGenre",
                },
            ],
            // Contains elements of panel
            [
                {
                    "criterium": this.db.criteria.C_JAZZ,
                    "panel": "Contains elements of",
                    "string": "Jazz",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.C_FOLK,
                    "panel": "Contains elements of",
                    "string": "Folk",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.C_ELECTRO,
                    "panel": "Contains elements of",
                    "string": "Electro",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.C_PSYCHEDELIC,
                    "panel": "Contains elements of",
                    "string": "Psychedelism",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.BLENDS,
                    "panel": "Contains elements of",
                    "string": "Many music genres",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "blends"
                },
            ],
            // Style panel
            [
                {
                    "criterium": this.db.criteria.ODD_RHYTHM,
                    "panel": "Style",
                    "string": "Odd rhythm signatures",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.TECHNICAL,
                    "panel": "Style",
                    "string": "Technical",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.INSTRUMENTAL,
                    "panel": "Style",
                    "string": "Mainly instrumental",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.EXPERIMENTAL,
                    "panel": "Style",
                    "string": "Experimental",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.JAM,
                    "panel": "Style",
                    "string": "Jam-oriented",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.SOPHISTICATED,
                    "panel": "Style",
                    "string": "Sophisticated",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.JAZZY_GROOVY,
                    "panel": "Style",
                    "string": "Jazzy groovy",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.ROCK_OPERA,
                    "panel": "Style",
                    "string": "Rock opera",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.FANFARE,
                    "panel": "Style",
                    "string": "Fanfare",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.SPACY,
                    "panel": "Style",
                    "string": "Spacy",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.GLITTER,
                    "panel": "Style",
                    "string": "Star-symphonic",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.AMBIENT,
                    "panel": "Style",
                    "string": "Ambient",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.ORIENTAL,
                    "panel": "Style",
                    "string": "Oriental",
                    "checked": false,
                    "isRadio": false,
                },
            ],
            // Album structuration
            [
                {
                    "criterium": this.db.criteria.LENGTHY_TRACKS,
                    "panel": "Album structuration",
                    "string": "Lengthy tracks",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.PATCHWORK,
                    "panel": "Album structuration",
                    "string": "Patchwork of tracks",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.TRANSITION,
                    "panel": "Album structuration",
                    "string": "Tracks have transitions",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.SYMPHONIC,
                    "panel": "Album structuration",
                    "string": "Symphonic",
                    "checked": false,
                    "isRadio": false,
                },
            ],
            // Era sound
            [
                {
                    "criterium": this.db.criteria.CRISPY_SIXTIES,
                    "panel": "Era sound",
                    "string": "Crispy 60s",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "eraSound"
                },
                {
                    "criterium": this.db.criteria.SOFT_SEVENTIES,
                    "panel": "Era sound",
                    "string": "Soft late 70s",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "eraSound"
                },
                {
                    "criterium": this.db.criteria.NEO_EIGHTIES,
                    "panel": "Era sound",
                    "string": "Neo 80s",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "eraSound"
                },
            ],
            // Loudness
            [
                {
                    "criterium": this.db.criteria.SOFT,
                    "panel": "Loudness",
                    "string": "Rather soft",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "softHeavy"
                },
                {
                    "criterium": this.db.criteria.HEAVY,
                    "panel": "Loudness",
                    "string": "Rather heavy",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "softHeavy"
                },
                {
                    "criterium": this.db.criteria.HUMBLE,
                    "panel": "Loudness",
                    "string": "Humble",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "humbleSpectacular"
                },
                {
                    "criterium": this.db.criteria.SPECTACULAR,
                    "panel": "Loudness",
                    "string": "Spectacular",
                    "checked": false,
                    "isRadio": true,
                    "radioFamily": "humbleSpectacular"
                },
            ],
            // Miscellaneous
            [
                {
                    "criterium": this.db.criteria.FUNNY,
                    "panel": "Miscellaneous",
                    "string": "Funny",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.TOUCHING_VOCALS,
                    "panel": "Miscellaneous",
                    "string": "Touching vocals",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.UNCOMMON_INSTRUMENTS,
                    "panel": "Miscellaneous",
                    "string": "Uncommon instruments",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.SOUND_COLLAGES,
                    "panel": "Miscellaneous",
                    "string": "Uses sound collages",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.ORCHESTRAL_PARTS,
                    "panel": "Miscellaneous",
                    "string": "Orchestral parts",
                    "checked": false,
                    "isRadio": false,
                },
                {
                    "criterium": this.db.criteria.BAROQUE,
                    "panel": "Miscellaneous",
                    "string": "Baroque vibes",
                    "checked": false,
                    "isRadio": false,
                },
            ]
        ];

        return {
            selectedRegion: "All",
            filterModel: filter,
            albumListWidth: 0
        }
    },
    computed: {
        navItems() {
            return ["Type", "Language", "Theme", "Main genre", "Contains elements of", "Style", "Album structuration", "Era sound", "Loudness", "Miscellaneous"]
        },
        albumWrapperSize() {
            const nbOfAlbumsPerRow = 8;
            const albumWrapperSize = Math.floor(this.albumListWidth / nbOfAlbumsPerRow);

            return albumWrapperSize;
        }
    },
    mounted: function () {
        this.albumListWidth = document.getElementById("albumList").clientWidth;
    },
    methods: {
        changed() {
            if(document.getElementById("albumList")) {
                this.albumListWidth = document.getElementById("albumList").clientWidth;
                console.log(this.albumListWidth)
            }
        },
        selectRegion() {
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
                // const specialRadioCase = ["Contains Jazz elements", "Contains Folk elements", "Contains electronic elements", "Contains psychedelic elements"];

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
        applyFilter: function() {
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
                const elementsToHandleDisplay = document.querySelectorAll("[album-id=" + album.id + "]");
                for(let j = 0; j < elementsToHandleDisplay.length; j++) {
                    if(nbOfMatchingCriteria == nbOfCheckedCriteria) {
                        // Quite dirty, but it seems that all criteria match
                        if(elementsToHandleDisplay[j].classList.contains("hidden")) {
                            elementsToHandleDisplay[j].classList.remove("hidden");
                        }
                    } else {
                        // Hide
                        if(!elementsToHandleDisplay[j].classList.contains("hidden")) {
                            elementsToHandleDisplay[j].classList.add("hidden");
                        }
                    }

                    // Criteria are checked, now check for the region
                    if(!elementsToHandleDisplay[j].classList.contains("hidden")) {
                        // Element is displayed...
                        if(this.selectedRegion != "All" && album.country != this.selectedRegion) {
                            // ...But its region does not match, so hide it
                            elementsToHandleDisplay[j].classList.add("hidden");
                        }
                    }
                }
            }
        }
    }
})