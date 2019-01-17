Vue.component('album', {
    template: `
        <section id="albumVue">
            <div class="buttons">

                <div class="arrowWrapper">
                </div>

                <button
                    id="randomButton"
                    v-on:click="randomizeAlbum">
                    Surprise me
                </button>

                <div class="arrowWrapper">
                </div>
            </div>

            <div class="content">
                <div class="album-metadata">

                    <div class="album-artist">{{selectedAlbum.artist}}</div>
                    <div class="album-title">{{selectedAlbum.title}}</div>
                    <div class="album-year">{{selectedAlbum.year}}</div>
                    <div class="album-country">{{selectedAlbum.country}}</div>
                    <div>Selected track: <span class="album-selected-track">{{selectedAlbum.selectedTrackTitle}}</span></div>
                    <a
                        v-if="selectedAlbum.selectedTrackYtId"
                        :href=youtubePath
                        target="_blank">
                        <img
                            class="youtube-logo"
                            :src=youtubeLogoPath
                            alt="">
                    </a>

                </div>

                <div class="album-cover-wrapper">
                    <img :src=selectedAlbum.cover alt="">
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
                :selected-album="selectedAlbum"
                :db="db"
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
        youtubePath() {
            return "https://www.youtube.com/watch?v=" + this.selectedAlbum.selectedTrackYtId;
        },
        spotifyPath() {
            return "https://open.spotify.com/embed/album/" + this.selectedAlbum.spotifyId;
        },
        deezerPath() {
            return "http://www.deezer.com/plugins/player?autoplay=false&playlist=true&width=700&height=240&cover=true&type=album&id=" + this.selectedAlbum.deezerId;

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
        youtubeLogoPath() {
            return pathToImg + "/logos/yt_logo_gold.png"
        }
    },
    methods: {
        randomizeAlbum: function() {
            let albumId = this.selectedAlbum.id;
            while(albumId == this.selectedAlbum.id) {
              albumId = Utils.randomize(this.db.albums.length); // Randomize id
            }
            const randomizedAlbum = albums[albumId];
            this.$emit('album-click-surprise', randomizedAlbum);
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