// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// })

let selectedAlbumId = 1;

var albumVue = new Vue({
    el: '#albumVue',
    data: {
        album: albums[selectedAlbumId]
    },
    computed: {
        computedCriteria() {
            let computedCriteria = []
            for (i = 0; i < this.album.criteria.length; i++) {
                computedCriteria.push(criteria[this.album.criteria[i]]);
            }
            return computedCriteria;
        },
    },
    methods: {
      setAlbum: function(albumId) {
        console.log(albumId);
        this.album = albums[albumId];
      },
      randomizeAlbum: function() {
        let min = Math.ceil(0);
        let max = Math.floor(albums.length);
        let albumId = selectedAlbumId; // Default
        while(albumId == selectedAlbumId) {
          albumId = Math.floor(Math.random() * (max - min)) + min; // Randomize id
        }
        this.album = albums[albumId];
        selectedAlbumId = albumId;
        player.loadVideoById(this.album.selectedTrackYtId);
        player.stopVideo()
      }
    }
})

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '170',
    width: '300',
    videoId: albumVue.album.selectedTrackYtId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
//   event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo()
}
