Vue.component('the-nav-bar', {
    template: `
        <header>

            <h1
                id="snackHeader"
                v-on:click="$emit('set-current-vue', 'album')">
                Would you like a snack
            </h1>

            <div id="menu">
                <button
                    id="atticButton"
                    v-bind:class="{'button-active': currentVue == 'attic'}"
                    v-on:click="$emit('set-current-vue', 'attic')">
                    What's in the attic
                </button>
                <button
                    id="gemsButton"
                    v-bind:class="{'button-active': currentVue == 'gems'}"
                    v-on:click="$emit('set-current-vue', 'gems')">
                    Absolute gems
                </button>
                <button
                    id="subgenresButton"
                    v-bind:class="{'button-active': currentVue == 'subgenres'}"
                    v-on:click="$emit('set-current-vue', 'subgenres')">
                    Subgenres
                </button>
                <button
                    id="statsButton"
                    v-bind:class="{'button-active': currentVue == 'stats'}"
                    v-on:click="$emit('set-current-vue', 'stats')">
                    Stats
                </button>
                <button
                    id="aboutButton"
                    v-bind:class="{'button-active': currentVue == 'about'}"
                    v-on:click="$emit('set-current-vue', 'about')">
                    About the project
                </button>

                <div class="search-wrapper">
                    <input
                        id="searchBar"
                        placeholder="Search an album or an artist"
                        v-model="currentSearch"
                        v-on:input="search($event.target.value)">
                    <img
                        id="resetSearch"
                        v-on:click="resetSearch"
                        v-if="currentSearch"
                        v-bind:src="crossPath">
                    <div
                        id="searchResult"
                        v-if="matchingAlbums.length > 0">
                        <div
                            class="search-result-item"
                            v-for="album in matchingAlbums"
                            v-on:click="selectSearchResult(album)">

                            <img
                                class="album-cover"
                                v-bind:src="album.cover" />
                            <div class="album-title">
                                {{album.title}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    `,
    props: ['currentVue', 'db'],
    data: function () {
        return {
            currentSearch: '',
            matchingAlbums: []
        }
    },
    computed: {
        crossPath() {
            return pathToImg + "/cross.svg"
        }
    },
    methods: {
        search: function(search) {

            this.currentSearch = search;

            this.matchingAlbums = [];
            if(search) {
                // search.replace(/ /g,'_');
                search = search.split(' ').join('_')
    
                for(let i = 0; i < this.db.albums.length; i++) {
                    const album = this.db.albums[i];
                    
                    if(album.id.includes(search)) {
                        this.matchingAlbums.push(album);
                    }
                }
            }
        },
        resetSearch: function() {
            this.currentSearch = '';
            this.matchingAlbums = [];
        },
        selectSearchResult: function(album) {
            this.$emit('album-click', album);
            this.resetSearch();
        }
    }
})