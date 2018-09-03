
// ********** DEFAULT ********** //

// Set default vue
let currentVue = "albumVue";
document.body.style.overflowY = currentVue == "albumVue" ? "hidden" : "auto";

// Randomize default album
let selectedAlbumId = randomize();
let selectedAlbum = selectDefaultAlbum(selectedAlbumId);

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
    albumsPerYear: albumsPerYear,
    albumsPerCountry: albumsPerCountry,
  },
  methods: {
    setCurrentVue: function(vue) {
      this.currentVue = vue;
      document.body.style.overflowY = vue == "albumVue" ? "hidden" : "auto";
      document.scrollTop = 0;
    },
    selectAlbum: function(event) {
      // Select
      let clickedId = event.target.id
      this.selectedAlbum = getAlbumById(clickedId);
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
      this.selectedAlbum.index = albumId;
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
    },
    previousAlbum() {
      if(this.selectedAlbum.index > 0 && this.albums[this.selectedAlbum.index - 1].artist == this.selectedAlbum.artist) {
        return this.albums[this.selectedAlbum.index - 1];
      } else {
        return null
      }
    },
    nextAlbum() {
      if(this.selectedAlbum.index < this.albums.length - 1 && this.albums[this.selectedAlbum.index + 1].artist == this.selectedAlbum.artist) {
        return this.albums[this.selectedAlbum.index + 1];
      } else {
        return null
      }
    },
    albumsPerYearWithRatio() {

      const obj = this.albumsPerYear;
      const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
      const max = Math.max.apply( null, arr );
      const min = 0;

      const albumsPerYearWithRatio = {}

      for(year in this.albumsPerYear) {

        const nbOfAlbums = this.albumsPerYear[year];
        const ratio = (nbOfAlbums - min) / (max - min);

        albumsPerYearWithRatio[year] = {
          nbOfAlbums: nbOfAlbums, 
          ratio: ratio,
          ratioPercent: (ratio * 100).toString() + "%",
        }
      };

      return albumsPerYearWithRatio;
    },
    albumsPerCountryWithRatio() {

      const obj = this.albumsPerCountry;
      const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
      const max = Math.max.apply( null, arr );
      const min = 0;

      const albumsPerCountryWithRatio = []

      for(country in this.albumsPerCountry) {

        const nbOfAlbums = this.albumsPerCountry[country];
        const ratio = (nbOfAlbums - min) / (max - min);

        albumsPerCountryWithRatio.push({
          country: country,
          nbOfAlbums: nbOfAlbums, 
          ratio: ratio,
          ratioPercent: (ratio * 100).toString() + "%",
        });
      };

      console.log(albumsPerCountryWithRatio)

      // Sort in alphabetical order
      albumsPerCountryWithRatio.sort(function(a, b){
        const countryA = a.country.toLowerCase()
        const countryB = b.country.toLowerCase();

        if (countryA < countryB) {// Sort string ascending
          return -1;
        }
        if (countryA > countryB) {
          return 1;
        }
        return 0 // Default return value (no sorting)
      })

      return albumsPerCountryWithRatio;
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

function selectDefaultAlbum(index) {
  let defaultAlbum = albums[index];
  defaultAlbum.index = index;
  defaultAlbum.previousAlbum = null;
  defaultAlbum.nextAlbum = null;

  if(index > 0 && albums[index - 1].artist == defaultAlbum.artist) {
    defaultAlbum.previousAlbum = albums[index - 1]
  }
  
  if(index < albums.length && albums[index + 1].artist == defaultAlbum.artist) {
    defaultAlbum.nextAlbum = albums[index + 1]
  }

  return defaultAlbum;
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