
Vue.component('discographies', {
    template: `
        <section id="discographiesVue">

            <section class="artists" data-simplebar>
                <div
                    class="artists__item"
                    :class="{'artists__item--selected': artist == selectedArtist}"
                    v-for="artist in db.artists"
                    v-on:click="setSelectedArtist(artist)">

                    <arrow
                        class="artists__arrow"
                        :size="'small'"
                        v-if="artist == selectedArtist">
                    </arrow>

                    {{artist}}
                    
                </div>
            </section>

            <section class="discography">

                <img
                    class="discography__item"
                    v-for="album in db.albums"
                    v-if="album.artist == selectedArtist"
                    :src=album.cover
                    v-on:click="$emit('album-click', album)"
                    alt="">
                
            </section>
            
            <section class="album-presentation">

                <div class="album-presentation__content">
                    <img
                        class="album-presentation__cover"
                        :src=selectedAlbum.cover
                        alt="">

                    <div class="album-data">

                        <div class="album-data__main-info">
                            <div class="album-data__artist">{{selectedAlbum.artist}}</div>
                            <div class="album-data__title">{{selectedAlbum.title}}</div>
                        </div>

                        <div class="album-data__secondary-info">
                            <div class="album-data__secondary-info__item">
                                <div class="album-data__label">Release year</div>
                                <div class="album-data__year">{{selectedAlbum.year}}</div>
                            </div>

                            <div class="album-data__secondary-info__item">
                                <div class="album-data__label">Country</div>
                                <div class="album-data__year">{{selectedAlbum.country}}</div>
                            </div>

                            <div class="album-data__secondary-info__item" v-if="selectedAlbum.designers.length > 0">
                                <div class="album-data__designer" >
                                    <div class="album-data__label">Cover by</div>
                                    <template v-for="(designer, index) in selectedAlbum.designers">
                                        {{designer}}<span v-if="index < selectedAlbum.designers.length - 1">, </span>
                                    </template>
                                </div>
                            </div>

                            <div class="album-data__secondary-info__item">
                                <div class="album-data__label">Selected track</div>
                                <div class="album-data__selected-track">{{selectedAlbum.selectedTrackTitle}}</div>
                            </div>

                            <div class="album-data__secondary-info__item">
                            <a
                                v-if="selectedAlbum.selectedTrackYtId"
                                :href="youtubePath"
                                target="_blank">
                                <img
                                    class="album-data__logo logo"
                                    :src=youtubeLogoPath
                                    alt="">
                            </a>
                            </div>
                        </div>
                        
                        <div class="album-data__criteria">
                            <div
                                class="album-data__criterium--gem"
                                v-if="selectedAlbum.isAGem">
                                This album is a must-hear
                            </div>
                            <div
                                class="album-data__criterium"
                                v-for="criterium in computedCriteria">
                                {{criterium}}
                            </div>
                        </div>
                    </div>

                </div>

                <div class="album-presentation__players">

                    <div class="players">

                        <div class="players__header">
                            <img
                                class="logo"
                                v-if="selectedAlbum.spotifyId"
                                :src=spotifyLogoPath
                                v-on:click="setSelectedPlayer('spotify')"
                                alt="">
                            <img
                                class="logo"
                                v-if="selectedAlbum.deezerId"
                                :src=deezerLogoPath
                                v-on:click="setSelectedPlayer('deezer')"
                                alt="">
                        </div>

                        <div
                            class="players__content"
                            v-if="selectedAlbum.spotifyId || selectedAlbum.deezerId">
                            
                            <iframe
                                id="spotifyPlayer"
                                class="players__item"
                                v-if="selectedAlbum.spotifyId && selectedPlayer == 'spotify'"
                                :src=spotifyPath
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media">
                            </iframe>
                            <iframe
                                id="deezerPlayer"
                                v-if="selectedAlbum.deezerId  && selectedPlayer == 'deezer'"
                                class="players__item"
                                scrolling="no"
                                frameborder="0"
                                allowTransparency="true"
                                :src=deezerPath>
                            </iframe>
                        </div>

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

            // Handle iframe
            if (!this.selectedAlbum.spotifyId && this.selectedAlbum.deezerId) {
                this.setSelectedPlayer("deezer");
            } else if (!this.selectedAlbum.deezerId && this.selectedAlbum.spotifyId) {
                this.setSelectedPlayer("spotify");
            }
        },
        setSelectedPlayer(player) {
            this.selectedPlayer = player;
        }
    }
})