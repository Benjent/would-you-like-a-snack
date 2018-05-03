
// Randomize default album
let min = Math.ceil(0);
let max = Math.floor(albums.length);
let selectedAlbumId = Math.floor(Math.random() * (max - min)) + min; // Randomize id

// Album vue

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

// Youtube Player

// Load the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create <iframe> (and YouTube player) after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '70',
    width: '300',
    videoId: albumVue.album.selectedTrackYtId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
//   event.target.playVideo();
}

// Video is being played <=> state=1
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}
function stopVideo() {
  player.stopVideo()
}

// // Timeline vue

// var timelineVue = new Vue({
//   el: '#timelineVue',
//   data: {
//       albums: albums
//   },
//   methods: {
//     randomizeAlbum: function(event) {
//       let clickedId = event.target.id
//       albumVue.album = getAlbumById(clickedId);
//       player.loadVideoById(albumVue.album.selectedTrackYtId);
//       player.stopVideo()
//     }
//   }
// })

// Random albums
var randomVue = new Vue({
  el: '#randomVue',
  data: {
      albums: albums
  },
  methods: {
    randomizeAlbum: function(event) {
      let clickedId = event.target.id
      albumVue.album = getAlbumById(clickedId);
      player.loadVideoById(albumVue.album.selectedTrackYtId);
      player.stopVideo()
    }
  }
})

// TODO on each albumTimeline click -> randomize a set of n albums, display them
// So not really a timeline but rather random albums
// Create another page for the timeline