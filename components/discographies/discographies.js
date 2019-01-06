
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

            <section class="discographySection" simple-bar>

                <img
                    class="albumCover"
                    v-for="album in db.albums"
                    v-if="album.artist == selectedArtist"
                    v-bind:src=album.cover
                    v-on:click="$emit('album-click', album)"
                    alt="">
                
            </section>
            
            <section class="albumSection">
                <div class="albumData">

                    <div class="albumData__title">{{selectedAlbum.title}}</div>
                    <div class="albumData__year">{{selectedAlbum.year}}</div>
                    <div class="albumData__country">{{selectedAlbum.country}}</div>
                    <div>Selected track: <span class="albumData__selectedTrack">{{selectedAlbum.selectedTrackTitle}}</span></div>
                    <a
                        v-if="selectedAlbum.selectedTrackYtId"
                        v-bind:href="youtubePath"
                        target="_blank">
                        <img
                            class="logo logo-youtube"
                            v-bind:src=youtubeLogoPath
                            alt="">
                    </a>

                </div>

                <div class="sleeve">

                    <img
                        class="sleeve__albumCover"
                        v-bind:src=selectedAlbum.cover
                        alt="">

                    <div
                        class="sleeve__player"
                        v-if="selectedAlbum.spotifyId || selectedAlbum.deezerId">

                        <div class="playerLogos">
                            <img
                                class="logo logo-spotify"
                                v-if="selectedAlbum.spotifyId"
                                v-bind:src=spotifyLogoPath
                                v-on:click="setSelectedPlayer('spotify')"
                                alt="">
                            <img
                                class="logo logo-deezer"
                                v-if="selectedAlbum.deezerId"
                                v-bind:src=deezerLogoPath
                                v-on:click="setSelectedPlayer('deezer')"
                                alt="">
                        </div>
                        <iframe
                            id="spotifyPlayer"
                            class="player"
                            v-if="selectedAlbum.spotifyId && selectedPlayer == 'spotify'"
                            v-bind:src="spotifyPath"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media">
                        </iframe>
                        <iframe
                            id="deezerPlayer"
                            v-if="selectedAlbum.deezerId  && selectedPlayer == 'deezer'"
                            class="player"
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            v-bind:src="deezerPath">
                        </iframe>
                    </div>
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
    `,
    props: ['selectedAlbum', 'db'],
    data: function () {
        return {
            selectedArtist: this.selectedAlbum.artist,
            selectedPlayer: "spotify"
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
            return pathToImg + "/logos/yt_logo_gold.png"
        },
        spotifyLogoPath() {
            const color = this.selectedPlayer == "spotify" ? "white" : "gold";
            return pathToImg + "/logos/spotify_logo_" + color + ".png"
        },
        deezerLogoPath() {
            const color = this.selectedPlayer == "deezer" ? "white" : "gold";
            return pathToImg + "/logos/deezer_logo_" + color + ".png"
        }
    },
    methods: {
        setSelectedArtist(artist) {
            this.selectedArtist = artist;
            // By default, select the debut album of the artist
            for(let i = 0; i < this.db.albums.length; i++) {
                if(this.db.albums[i].artist == artist) {
                    this.selectedAlbum = this.db.albums[i];
                    break;
                }
            }
        },
        setSelectedPlayer(player) {
            this.selectedPlayer = player;
        }
    }
})