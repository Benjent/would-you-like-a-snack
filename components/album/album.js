Vue.component('album', {
    template: `
        <section id="albumVue">
            <div class="buttons">

                <div class="arrow-wrapper">
                    <img
                        class="arrow arrow-previous"
                        v-if="previousAlbum"
                        v-bind:album-id="previousAlbum.id"
                        v-on:click="$emit('album-click', previousAlbum)"
                        v-bind:src=arrowPath alt="">
                </div>

                <button
                    id="randomButton"
                    v-on:click="randomizeAlbum">
                    Surprise me
                </button>

                <div class="arrow-wrapper">
                    <img
                        class="arrow arrow-next"
                        v-if="nextAlbum"
                        v-bind:album-id="nextAlbum.id"
                        v-on:click="$emit('album-click', nextAlbum)"
                        v-bind:src=arrowPath alt="">
                </div>
            </div>

            <div class="content">
                <div class="album-metadata">

                    <div class="album-title">{{selectedAlbum.title}}</div>
                    <div class="album-artist">{{selectedAlbum.artist}}</div>
                    <div class="album-year">{{selectedAlbum.year}}</div>
                    <div class="album-country">{{selectedAlbum.country}}</div>
                    <div>Selected track: <span class="album-selected-track">{{selectedAlbum.selectedTrackTitle}}</span></div>
                    <a
                        v-if="selectedAlbum.selectedTrackYtId"
                        v-bind:href=selectedAlbum.selectedTrackYtId
                        target="_blank">
                        <div class="album-selected-track-url">Listen on YouTube</div>
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
            </div>

            <timeline
                v-bind:selected-album="selectedAlbum"
                v-bind:db="db"
                v-on:album-click="handleTimelineAlbumClick">
            </timeline>

        </section>
    `,
    props: ['selectedAlbum', 'db'],
    data: function () {
        return {
            randomAlbums: defaultValues.randomAlbums
        }
    },
    computed: {
        arrowPath() {
            // return pathToImg + "/arrow.svg"
            return pathToImg + "/arrow-borderless.svg"
        },
        computedCriteria() {
            let computedCriteria = []
            for (i = 0; i < this.selectedAlbum.criteria.length; i++) {
                computedCriteria.push(this.selectedAlbum.criteria[i])
            }
            // Sort criteria
            computedCriteria.sort((a, b) => criteriaOrder.indexOf(a) > criteriaOrder.indexOf(b));

            return computedCriteria;
        },
        previousAlbum() {
            if(this.selectedAlbum.index > 0 && this.db.albums[this.selectedAlbum.index - 1].artist == this.selectedAlbum.artist) {
                return this.db.albums[this.selectedAlbum.index - 1];
            } else {
                return null
            }
        },
        nextAlbum() {
            if(this.selectedAlbum.index < this.db.albums.length - 1 && this.db.albums[this.selectedAlbum.index + 1].artist == this.selectedAlbum.artist) {
                return this.db.albums[this.selectedAlbum.index + 1];
            } else {
                return null
            }
        },
    },
    methods: {
        randomizeAlbum: function() {
            let albumId = this.selectedAlbum.id;
            while(albumId == this.selectedAlbum.id) {
              albumId = Utils.randomize(this.db.albums.length); // Randomize id
            }
            const randomizedAlbum = albums[albumId];
            this.$emit('album-click', randomizedAlbum);
            // player.loadVideoById(this.selectedAlbum.selectedTrackYtId);
            // player.stopVideo()
        },
        selectAlbumAndRandomize: function(album) {
            // Select
            this.$emit('album-click', album);
            // player.loadVideoById(this.selectedAlbum.selectedTrackYtId);
            // player.stopVideo()
            // Randomize
            this.randomAlbums = getRandomAlbumsByLength(numberOfAlbumsInRandomVue, album.id).slice(0);
        },
        handleTimelineAlbumClick: function(album) {
            this.$emit('album-click', album);
        }
    }
})