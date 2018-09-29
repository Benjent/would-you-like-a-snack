Vue.component('attic', {
    template: `
        <section id="atticVue">

            <div id="filter">
                <p>Filter UI & UX is a work in progress</p>
                <div
                    class="criteria-wrapper"
                    v-for="criterium in this.filter">

                    <div
                        class="checkbox-wrapper"
                        v-on:click="toggleFilterCriterium($event.currentTarget, criterium)">

                        <span class="checkbox-slot"></span>
                        <label>{{criterium}}</label>

                    </div>

                </div>
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
            filter: this.db.criteria
        }
    },
    computed: {
        filterArray() {
            return [];
        }
    },
    methods: {
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