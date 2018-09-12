
// ********** DEFAULT ********** //

// Randomize default album
const selectedAlbumId = Utils.randomize();

// Set default random albums
const numberOfAlbumsInRandomVue = 11;

const defaultValues = {
  currentVue: "album",
  selectedAlbum: Utils.selectDefaultAlbum(selectedAlbumId),
  randomAlbums: getRandomAlbumsByLength(numberOfAlbumsInRandomVue, selectedAlbumId).slice(0)
}

document.body.style.overflowY = defaultValues.currentVue == "album" ? "hidden" : "auto";


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
      window.scrollTo(0, 0);
    },
    setAlbumVueAndSelectAlbum: function(album) {
      this.selectedAlbum = album;
      this.setCurrentVue("album");
    },
  }
})