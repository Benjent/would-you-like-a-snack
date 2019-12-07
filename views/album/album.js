const Album = Vue.component('album', {
    template: `
        <section id="albumVue">

            <button
                id="randomButton"
                v-on:click="randomizeAlbum">
                Surprise me
            </button>

            <div class="content">
                <div class="album-metadata">

                    <div class="album-artist">{{selectedAlbum.artist}}</div>
                    <div class="album-title">{{selectedAlbum.title}}</div>
                    <div class="album-year">{{selectedAlbum.year}}</div>
                    <div class="album-country">{{selectedAlbum.country}}</div>

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

            <div class="album-selected-track-wrapper">
                Start with the song
                <span class="album-selected-track">{{selectedAlbum.selectedTrackTitle}}</span>
                <span v-if="selectedAlbum.selectedTrackYtId">
                    on
                    <a
                        :href=youtubePath
                        target="_blank">
                        <img

                            class="youtube-logo"
                            :src=youtubeLogoPath
                            alt="">
                    </a>
                </span>
            </div>

            <router-link
                id="moreButton"
                to="discographies">
                <button>More infos</button>
            </router-link>

            <timeline></timeline>

        </section>
    `,
    data() {
        return {
            views: views
        }
    },
    computed: {
        selectedAlbum() {
            return store.state.selectedAlbum; // Is computed instead of data as it needs to be refreshed in view
        },
        computedCriteria() {
            const computedCriteria = []
            for (i = 0; i < this.selectedAlbum.criteria.length; i++) {
                computedCriteria.push(this.selectedAlbum.criteria[i])
            }
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
        youtubeLogoPath() {
            return pathToImg + "/logos/yt_logo_gold.png";
        }
    },
    methods: {
        randomizeAlbum() {
            let albumId = this.selectedAlbum.id;
            while(albumId == this.selectedAlbum.id) {
              albumId = Utils.randomize(store.state.db.albums.length); // Randomize id
            }
            const randomizedAlbum = albums[albumId];
            store.commit('selectAlbum', randomizedAlbum);
        },
        selectAlbum(album) {
            store.commit('selectAlbum', album);
        },
    }
})