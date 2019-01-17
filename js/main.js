
// ********** DEFAULT ********** //

// Randomize default album
const selectedAlbumId = Utils.randomize(albums.length);

// Set default random albums
const numberOfAlbumsInRandomVue = 11;

const defaultValues = {
  currentVue: "album",
  selectedAlbum: Utils.selectDefaultAlbum(selectedAlbumId, albums),
  randomAlbums: getRandomAlbumsByLength(numberOfAlbumsInRandomVue, selectedAlbumId).slice(0)
}

// document.body.style.overflowY = defaultValues.currentVue == "album" ? "hidden" : "auto";


// ********** VIEW ********** //

// Main view
var indexVue = new Vue({
  el: '#indexVue',
  data: function() {
    return {
      currentVue: defaultValues.currentVue,
      selectedAlbum: defaultValues.selectedAlbum,
      db: Db,
      randomAlbums: defaultValues.randomAlbums,
    }
  },

  methods: {
    setCurrentVue: function(vue) {
      this.currentVue = vue;
      document.body.style.overflowY = vue == "album" ? "hidden" : "auto";
      document.body.style.overflowX = vue == "attic" || "stats" ? "hidden" : "auto";
      window.scrollTo(0, 0);

      if(this.currentVue === "album") {
        // Check for timeline scroll position
        const selectedAlbumRightPosition = document.querySelector('[album-id=' + this.selectedAlbum.id + ']').getBoundingClientRect().right;
        if(selectedAlbumRightPosition > window.innerWidth) {
          // Scroll timeline to selected album
          // document.querySelector('#timelineVue').
          // This does not work as the selected is the main displkay album TODO update query selector to match the album inside the timeline
          window.scrollTo(selectedAlbumRightPosition, 0);
        }
      }
    },
    setAlbumVueAndSelectAlbum: function(album) {
      this.selectedAlbum = album;
      this.setCurrentVue("album");
    },
    setDiscographiesVueAndSelectAlbum: function(album) {
      this.selectedAlbum = album;
      this.setCurrentVue("discographies");
    }
  }
})