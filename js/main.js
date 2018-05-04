
// ********** DEFAULT ********** //

// Set default vue
let currentVue = "albumVue";
document.body.style.overflowY = currentVue == "albumVue" ? "hidden" : "auto";

// Randomize default album
let selectedAlbumId = randomize();
let selectedAlbum = albums[selectedAlbumId];

// Set default random albums
let numberOfAlbumsInRandomVue = 11;
let randomAlbums = getRandomAlbumsByLength(numberOfAlbumsInRandomVue, selectedAlbum.id).slice(0);

// ********** VIEW ********** //

// Main view
var indexVue = new Vue({
  el: '#indexVue',
  data: {
    currentVue: currentVue,
    selectedAlbum: selectedAlbum,
    albums: albums,
    randomAlbums: randomAlbums,
    artists: artists,
  },
  methods: {
    setCurrentVue: function(vue) {
      this.currentVue = vue;
      document.body.style.overflowY = vue == "albumVue" ? "hidden" : "auto";
    },
    selectAlbumAndRandomize: function(event) {
      // Select
      let clickedId = event.target.id
      this.selectedAlbum = getAlbumById(clickedId);
      // player.loadVideoById(this.selectedAlbum.selectedTrackYtId);
      // player.stopVideo()
      // Randomize
      this.randomAlbums = getRandomAlbumsByLength(numberOfAlbumsInRandomVue, clickedId).slice(0);
    },
    randomizeAlbum: function() {
      let albumId = selectedAlbumId; // Default
      while(albumId == selectedAlbumId) {
        albumId = randomize(); // Randomize id
      }
      this.selectedAlbum = albums[albumId];
      selectedAlbumId = albumId;
      // player.loadVideoById(this.selectedAlbum.selectedTrackYtId);
      // player.stopVideo()
    },
    setAlbumVueAndselectAlbum: function(event) {
      this.setCurrentVue("albumVue");
      this.selectAlbumAndRandomize(event);
    },
  },
  computed: {
    computedCriteria() {
      let computedCriteria = []
      for (i = 0; i < this.selectedAlbum.criteria.length; i++) {
          computedCriteria.push(criteria[this.selectedAlbum.criteria[i]]);
      }
      return computedCriteria;
    }
  },
})


// ********** UTILS ********** //

// Random in-range number generator

function randomize() {
  let min = Math.ceil(0);
  let max = Math.floor(albums.length);
  return Math.floor(Math.random() * (max - min)) + min; // Randomize id
}

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