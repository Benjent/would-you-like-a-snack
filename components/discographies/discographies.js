Vue.component('discographies', {
    template: `
        <section id="discographiesVue">

            <section class="artistsSection" data-simplebar>
                <div
                    class="artist"
                    :class="{'artist--selected': artist == selectedArtist}"
                    v-for="artist in db.artists"
                    v-on:click="setSelectedArtist(artist)">

                    <arrow
                        class="arrow"
                        v-bind:size="'small'"
                        v-if="artist == selectedArtist">
                    </arrow>
                    {{artist}}
                    
                </div>
            </section>

            <section class="contentSection">
                <section class="discographySection">

                    <arrow class="arrow"></arrow>

                    <div
                        v-for="album in db.albums"
                        v-if="album.artist == selectedArtist">
                        
                        <img
                            class="albumCover"
                            v-bind:src=album.cover
                            v-on:click="$emit('album-click', album)"
                            alt="">
                    </div>
                    
                </section>
            
                <section class="albumVue">
                    <div class="album-metadata">

                        <div class="album-title">{{selectedAlbum.title}}</div>
                        <div class="album-year">{{selectedAlbum.year}}</div>
                        <div class="album-country">{{selectedAlbum.country}}</div>
                        <div>Selected track: <span class="album-selected-track">{{selectedAlbum.selectedTrackTitle}}</span></div>
                        <a
                            v-if="selectedAlbum.selectedTrackYtId"
                            v-bind:href=selectedAlbum.selectedTrackYtId
                            target="_blank">
                            <img
                                class="youtube-logo"
                                v-bind:src=youTubePath
                                alt="">
                        </a>

                    </div>

                    <div class="album-cover-wrapper">
                        <img v-bind:src=selectedAlbum.cover alt="">
                        <iframe
                            id="spotifyPlayer"
                            v-if="selectedAlbum.spotifyId"
                            v-bind:src="selectedAlbum.spotifyId"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media">
                        </iframe>
                    </div>

                    <div class="album-criteria">
                        <div
                            class="album-gem"
                            v-if="selectedAlbum.isAGem">
                            This album is a must-hear
                        </div>
                        <div
                            class="album-criterium"
                            v-for="criterium in computedCriteria">
                            {{criterium}}
                        </div>
                    </div>
                </section>

            </section>
        </section>
    `,
    props: ['selectedAlbum', 'db'],
    data: function () {
        return {
            selectedArtist: this.selectedAlbum.artist
        }
    },
    computed: {
        computedCriteria() {
            let computedCriteria = []
            for (i = 0; i < this.selectedAlbum.criteria.length; i++) {
                computedCriteria.push(this.selectedAlbum.criteria[i])
            }
            // Sort criteria
            computedCriteria.sort((a, b) => criteriaOrder.indexOf(a) > criteriaOrder.indexOf(b));

            return computedCriteria;
        },
        youTubePath() {
            return pathToImg + "/logos/yt_logo_gold.png"
        }
    },
    methods: {
        setSelectedArtist(artist) {

            this.selectedArtist = artist;
        }
    }
})