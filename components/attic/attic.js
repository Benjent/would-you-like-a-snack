Vue.component('attic', {
    template: `
        <section id="atticVue">

            <div id="filter">
                <nav class="filter-nav">
                    <div
                        class="filter-nav-item"
                        v-for="item in navItems"
                        v-on:click="selectNavItem(item)">
                        {{item}}
                    </div>
                </nav>
                <section
                    class="filter-panel"
                    v-if="selectedNavItem">

                    <div v-if="selectedNavItem == 'Type'">

                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Concept album')">

                            <span class="radio-slot"></span>
                            <label>Concept album</label>
                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Storyline')">

                            <span class="radio-slot"></span>
                            <label>Storyline</label>
                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Soundtrack album')">

                            <span class="radio-slot"></span>
                            <label>Soundtrack album</label>
                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Live album')">

                            <span class="checkbox-slot"></span>
                            <label>Live album</label>
                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Language'">
                    
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'French sung')">

                            <span class="radio-slot"></span>
                            <label>French</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Italian sung')">

                            <span class="radio-slot"></span>
                            <label>Italian</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Spanish sung')">

                            <span class="radio-slot"></span>
                            <label>Spanish</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Swedish sung')">

                            <span class="radio-slot"></span>
                            <label>Swedish</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Zeuhl')">

                            <span class="radio-slot"></span>
                            <label>Zeuhl</label>

                        </div>
                    
                    </div>

                    <div v-if="selectedNavItem == 'Theme'">
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Sci-fi touch')">

                            <span class="radio-slot"></span>
                            <label>Sci-fi</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Fantasy touch')">

                            <span class="radio-slot"></span>
                            <label>Fantasy</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Medieval touch')">

                            <span class="radio-slot"></span>
                            <label>Medieval</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Occult')">

                            <span class="radio-slot"></span>
                            <label>Occult</label>

                        </div>
                    </div>

                    <div v-if="selectedNavItem == 'Main genre'">

                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Rock-based with a Prog touch')">

                            <span class="radio-slot"></span>
                            <label>Rock</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Jazz-based with a Prog touch')">

                            <span class="radio-slot"></span>
                            <label>Jazz</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Folk-based with a Prog touch')">

                            <span class="radio-slot"></span>
                            <label>Folk</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Electro-based with a Prog touch')">

                            <span class="radio-slot"></span>
                            <label>Electro</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Art Pop')">

                            <span class="radio-slot"></span>
                            <label>Art Pop</label>

                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Contains elements of'">
                    
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Contains Jazz elements')">

                            <span class="checkbox-slot"></span>
                            <label>Jazz</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Contains Folk elements')">

                            <span class="checkbox-slot"></span>
                            <label>Folk</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Contains electronic elements')">

                            <span class="checkbox-slot"></span>
                            <label>Electro</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Contains psychedelic elements')">

                            <span class="checkbox-slot"></span>
                            <label>Psychedelic</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Blends many music genres')">

                            <span class="checkbox-slot"></span>
                            <label>Many music genres</label>

                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Style'">
                    
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Odd rhythm signatures')">

                            <span class="checkbox-slot"></span>
                            <label>Odd rhythm signatures</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Technical')">

                            <span class="checkbox-slot"></span>
                            <label>Technical</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Mainly instrumental')">

                            <span class="checkbox-slot"></span>
                            <label>Mainly instrumental</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Experimental')">

                            <span class="checkbox-slot"></span>
                            <label>Experimental</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Jam-oriented')">

                            <span class="checkbox-slot"></span>
                            <label>Jam-oriented</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Sophisticated')">

                            <span class="checkbox-slot"></span>
                            <label>Sophisticated</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Jazzy groovy')">

                            <span class="checkbox-slot"></span>
                            <label>Jazzy groovy</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Oriental')">

                            <span class="checkbox-slot"></span>
                            <label>Oriental</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Ambient')">

                            <span class="checkbox-slot"></span>
                            <label>Ambient</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Rock opera')">

                            <span class="checkbox-slot"></span>
                            <label>Rock opera</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Fanfare')">

                            <span class="checkbox-slot"></span>
                            <label>Fanfare</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Spacy')">

                            <span class="checkbox-slot"></span>
                            <label>Spacy</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Star-symphonic')">

                            <span class="checkbox-slot"></span>
                            <label>Star-symphonic</label>

                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Album structuration'">
                    
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Lengthy tracks')">

                            <span class="checkbox-slot"></span>
                            <label>Lengthy tracks</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Patchwork of tracks')">

                            <span class="checkbox-slot"></span>
                            <label>Patchwork of tracks</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Tracks have transitions')">

                            <span class="checkbox-slot"></span>
                            <label>Tracks have transitions</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Symphonic')">

                            <span class="checkbox-slot"></span>
                            <label>Symphonic</label>

                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Era sound'">
                    
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Crispy 60s sound')">

                            <span class="radio-slot"></span>
                            <label>Crispy 60s</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Soft late 70s sound')">

                            <span class="radio-slot"></span>
                            <label>Soft late 70s</label>

                        </div>
                        <div
                            class="radio-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Neo 80s sound')">

                            <span class="radio-slot"></span>
                            <label>Neo 80s</label>

                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Loudness'">
                        
                        <div class="filter-panel-bundle">
                            <div
                                class="radio-wrapper"
                                v-on:click="toggleFilterCriterium($event.currentTarget, 'Rather soft')">

                                <span class="radio-slot"></span>
                                <label>Rather soft</label>

                            </div>
                            <div
                                class="radio-wrapper"
                                v-on:click="toggleFilterCriterium($event.currentTarget, 'Rather heavy')">

                                <span class="radio-slot"></span>
                                <label>Rather heavy</label>

                            </div>
                        </div>
                        <div class="filter-panel-bundle">
                            <div
                                class="radio-wrapper"
                                v-on:click="toggleFilterCriterium($event.currentTarget, 'Humble')">

                                <span class="radio-slot"></span>
                                <label>Humble</label>

                            </div>
                            <div
                                class="radio-wrapper"
                                v-on:click="toggleFilterCriterium($event.currentTarget, 'Spectacular')">

                                <span class="radio-slot"></span>
                                <label>Spectacular</label>

                            </div>
                        </div>

                    </div>

                    <div v-if="selectedNavItem == 'Miscellaneous'">
                    
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Funny')">

                            <span class="checkbox-slot"></span>
                            <label>Funny</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Touching vocals')">

                            <span class="checkbox-slot"></span>
                            <label>Touching vocals</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Uncommon instruments')">

                            <span class="checkbox-slot"></span>
                            <label>Uncommon instruments</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Uses sound collages')">

                            <span class="checkbox-slot"></span>
                            <label>Uses sound collages</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Orchestral parts')">

                            <span class="checkbox-slot"></span>
                            <label>Orchestral parts</label>

                        </div>
                        <div
                            class="checkbox-wrapper"
                            v-on:click="toggleFilterCriterium($event.currentTarget, 'Baroque vibes')">

                            <span class="checkbox-slot"></span>
                            <label>Baroque vibes</label>

                        </div>

                    </div>

                </section>

            </div>

            <section id="albumList">

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
        return {
            filter: this.db.criteria,
            selectedNavItem: ""
        }
    },
    computed: {
        navItems() {
            return ["Type", "Language", "Theme", "Main genre", "Contains elements of", "Style", "Album structuration", "Era sound", "Loudness", "Miscellaneous"]
        },
        selectedNavItem() {
            return this.selectedNavItem;
        },
        filterArray() {
            return [];
        }
    },
    methods: {
        selectNavItem(item) {
            // this.selectedNavItem = item == this.selectedNavItem ? "" : item; // Allow reset to close filter panel
            if(this.selectedNavItem == item) {
                this.selectedNavItem = "";
            } else {
                this.selectedNavItem = item;
            }
        },
        toggleFilterCriterium: function(htmlCheckbox, criteriumString) {
            htmlCheckbox.classList.contains("checked") ? htmlCheckbox.classList.remove("checked") : htmlCheckbox.classList.add("checked");

            this.filterArray.includes(criteriumString) ? this.filterArray.splice( this.filterArray.indexOf(criteriumString), 1 ) : this.filterArray.push(criteriumString);

            this.applyFilter();
        },
        applyFilter: function() {
            // For each album
            for(let i = 0; i < this.db.albums.length; i++) {
                const album = this.db.albums[i];
                let nbOfMatchingCriteria = 0;
                // For each filter criteria
                for(let j = 0; j < this.filterArray.length; j++) {
                    const criteria = this.filterArray[j];
                    // If criterium matches
                    if(album.criteria.includes(criteria)) {
                        nbOfMatchingCriteria++;
                    }
                }

                const albumsToHandleDisplay = document.querySelectorAll("[album-id=" + album.id + "]");
                for(let j = 0; j < albumsToHandleDisplay.length; j++) {
                    if(nbOfMatchingCriteria == this.filterArray.length) {
                        // Quite dirty, but it seems that all criteria match
                        if(albumsToHandleDisplay[j].classList.contains("hidden")) {
                            albumsToHandleDisplay[j].classList.remove("hidden");
                        }
                    } else {
                        if(!albumsToHandleDisplay[j].classList.contains("hidden")) {
                            albumsToHandleDisplay[j].classList.add("hidden");
                        }
                    }
                }
            }
        }
    }
})