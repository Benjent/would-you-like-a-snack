
// ********** DEFAULT ********** //
// Randomize default album
const selectedAlbumId = Utils.randomize(albums.length);
const defaultValues = {
  currentView: views.ALBUM,
  selectedAlbum: Utils.selectDefaultAlbum(selectedAlbumId, albums),
}

// ********** STORE ********** //
const store = new Vuex.Store({
  state: {
    db: Db,
    currentView: defaultValues.currentView,
    selectedAlbum: defaultValues.selectedAlbum,
  },
  mutations: {
    setCurrentView(state, view) {
      state.currentView = view;
    },
    selectAlbum(state, album) {
      state.selectedAlbum = album;
    }
  }
})

// ********** VIEW ********** //
const indexView = new Vue({
  el: '#indexView',
  store,
  data() {
    return {}
  },
})