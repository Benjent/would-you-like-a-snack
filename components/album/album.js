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
                    <!-- <div id="player" v-if="currentVue == 'albumVue'"></div> -->

                </div>

                <div class="album-cover-wrapper">
                    <img v-bind:src=selectedAlbum.cover alt="">
                </div>

                <div class="album-criteria">
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
                // computedCriteria.push(criteria[this.selectedAlbum.criteria[i]]);
                // TODO refact if enum works
                computedCriteria.push(this.selectedAlbum.criteria[i])
            }

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

{/* <footer id="randomVue">
<img
    v-for="album in randomAlbums"
    v-bind:album-id="album.id"
    v-bind:src=album.cover
    v-on:click="selectAlbumAndRandomize(album)" alt="">
</footer> */}

// // Youtube Player

// // Load the IFrame Player API code asynchronously
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // Create <iframe> (and YouTube player) after the API code downloads
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '70',
//     width: '300',
//     videoId: indexVue.selectedAlbum.selectedTrackYtId,
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
// //   event.target.playVideo();
// }

// // Video is being played <=> state=1
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo()
// }