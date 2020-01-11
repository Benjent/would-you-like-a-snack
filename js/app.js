
// ********** DEFAULT ********** //
// Randomize default album
const selectedAlbumId = Utils.randomize(albums.length);

// ********** FILTER ********** //
Vue.filter('criterium', (value) => {
	let filteredValue
	switch (value) {
		case criteria.AMBIENT:
			filteredValue = 'Ambient'
			break;
		case criteria.ARENA:
			filteredValue = 'Arena'
			break;
		case criteria.ART_POP:
			filteredValue = 'Art Pop'
			break;
		case criteria.BAROQUE:
			filteredValue = 'Baroque vibes'
			break;
		case criteria.BLENDS:
			filteredValue = 'Blends many music genres'
			break;
		case criteria.C_ELECTRO:
			filteredValue = 'Contains electronic elements'
			break;
		case criteria.C_FOLK:
			filteredValue = 'Contains Folk elements'
			break;
		case criteria.C_JAZZ:
			filteredValue = 'Contains Jazz elements'
			break;
		case criteria.C_PSYCHEDELIC:
			filteredValue = 'Contains psychedelic elements'
			break;
		case criteria.CONCEPT:
			filteredValue = 'Concept album'
			break;
		case criteria.CRISPY_SIXTIES:
			filteredValue = 'Crispy 60s sound'
			break;
		case criteria.CROATIAN_SUNG:
			filteredValue = 'Croatian sung'
			break;
		case criteria.ELECTRO:
			filteredValue = 'Electro-based with a Prog touch'
			break;
		case criteria.EXPERIMENTAL:
			filteredValue = 'Experimental'
			break;
		case criteria.FANFARE:
			filteredValue = 'Fanfare'
			break;
		case criteria.FANTASY:
			filteredValue = 'Fantasy-influenced'
			break;
		case criteria.FEMALE:
			filteredValue = 'Female vocals'
			break;
		case criteria.FOLK:
			filteredValue = 'Folk-based with a Prog touch'
			break;
		case criteria.FRENCH_SUNG:
			filteredValue = 'French sung'
			break;
		case criteria.FUNNY:
			filteredValue = 'Funny'
			break;
		case criteria.GERMAN_SUNG:
			filteredValue = 'German sung'
			break;
		case criteria.GLITTER:
			filteredValue = 'Glittering'
			break;
		case criteria.GREASY_SEVENTIES:
			filteredValue = 'Greasy early 70s sound'
			break;
		case criteria.HEAVY:
			filteredValue = 'Rather heavy'
			break;
		case criteria.HUMBLE:
			filteredValue = 'Humble'
			break;
		case criteria.IGBO_SUNG:
			filteredValue = 'Igbo sung'
			break;
		case criteria.INSTRUMENTAL:
			filteredValue = 'Mainly instrumental'
			break;
		case criteria.ITALIAN_SUNG:
			filteredValue = 'Italian sung'
			break;
		case criteria.JAM:
			filteredValue = 'Jam-oriented'
			break;
		case criteria.JAZZ:
			filteredValue = 'Jazz-based with a Prog touch'
			break;
		case criteria.JAZZY_GROOVY:
			filteredValue = 'Jazzy groovy'
			break;
		case criteria.LATINO:
			filteredValue = 'Latino'
			break;
		case criteria.LENGTHY_TRACKS:
			filteredValue = 'Lengthy tracks'
			break;
		case criteria.LIVE:
			filteredValue = 'Live'
			break;
		case criteria.MEDIEVAL:
			filteredValue = 'Medieval-influenced'
			break;
		case criteria.NEO_EIGHTIES:
			filteredValue = 'Neo 80s sound'
			break;
		case criteria.OCCULT:
			filteredValue = 'Occult'
			break;
		case criteria.ODD_RHYTHM:
			filteredValue = 'Odd rhythm signatures'
			break;
		case criteria.ORCHESTRAL_PARTS:
			filteredValue = 'Orchestral parts'
			break;
		case criteria.ORIENTAL:
			filteredValue = 'Oriental'
			break;
		case criteria.PATCHWORK:
			filteredValue = 'Patchwork of tracks'
			break;
		case criteria.PIANO:
			filteredValue = 'Piano driven'
			break;
		case criteria.RENAISSANCE:
			filteredValue = 'Renaissance'
			break;
		case criteria.ROCK:
			filteredValue = 'Rock-based with a Prog touch'
			break;
		case criteria.ROCK_OPERA:
			filteredValue = 'Rock opera'
			break;
		case criteria.SCI_FI:
			filteredValue = 'Sci-fi-influenced'
			break;
		case criteria.SOCIOPOLITICAL:
			filteredValue = 'Sociopolitical'
			break;
		case criteria.SOFT:
			filteredValue = 'Rather soft'
			break;
		case criteria.SOFT_SEVENTIES:
			filteredValue = 'Soft late 70s sound'
			break;
		case criteria.SOPHISTICATED:
			filteredValue = 'Sophisticated'
			break;
		case criteria.SOUND_COLLAGES:
			filteredValue = 'Uses sound collages'
			break;
		case criteria.SOUNDTRACK:
			filteredValue = 'Soundtrack album'
			break;
		case criteria.SPACY:
			filteredValue = 'Spacy'
			break;
		case criteria.SPANISH_SUNG:
			filteredValue = 'Spanish sung'
			break;
		case criteria.SPECTACULAR:
			filteredValue = 'Spectacular'
			break;
		case criteria.SPIRITUAL:
			filteredValue = 'Spiritual'
			break;
		case criteria.STORYLINE:
			filteredValue = 'Storyline'
			break;
		case criteria.SWEDISH_SUNG:
			filteredValue = 'Swedish sung'
			break;
		case criteria.SYMPHONIC:
			filteredValue = 'Symphonic'
			break;
		case criteria.TECHNICAL:
			filteredValue = 'Technical'
			break;
		case criteria.TOUCHING_VOCALS:
			filteredValue = 'Touching vocals'
			break;
		case criteria.TRANSITION:
			filteredValue = 'Tracks have transitions'
			break;
		case criteria.UNCOMMON_INSTRUMENTS:
			filteredValue = 'Uncommon instruments'
			break;
		case criteria.ZEUHL:
			filteredValue = 'Zeuhl'
			break;
		default:
			filteredValue = ''
	}
  return filteredValue
})

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