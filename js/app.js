
// ********** DEFAULT ********** //
// Randomize default album
const selectedAlbumId = Utils.randomize(albums.length);

// ********** STORE ********** //
const store = new Vuex.Store({
  state: {
    db: Db,
    selectedAlbum: Utils.selectDefaultAlbum(selectedAlbumId, albums),
  },
  mutations: {
    selectAlbum(state, album) {
      state.selectedAlbum = album;
    }
  }
})

// ********** ROUTER ********** //
const routes = [
	{ path: '/', component: Album },
	{ path: '/about', component: About },
	{ path: '/attic', component: Attic },
	{ path: '/designers', component: Designers },
	{ path: '/discographies', component: Discographies },
	{ path: '/gems', component: Gems },
	{ path: '/subgenres', component: Subgenres },
	{ path: '/stats', component: Stats },
]
const router = new VueRouter({
	routes
});

// ********** VIEW ********** //
const App = new Vue({
  el: '#app',
	router,
  store,
  data() {
    return {}
  }
})