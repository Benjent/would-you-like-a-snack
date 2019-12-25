Vue.component('searchbar', {
    template: `
        <div class="search-bar">

            <input
                class="search-bar__input"
                :class="{ 'search-bar__input--empty': currentSearch }"
                placeholder="Search by album, artist, designer or year..."
                v-model="currentSearch"
                @input="search($event.target.value)">

            <div
                class="search-bar__reset"
                @click="resetSearch"
                v-if="currentSearch"
                :src="crossPath">
            </div>

            <div
                class="search-bar__result"
                v-if="matchingAlbums.length > 0">

                <arrow></arrow>

                <div class="search-result">
                    <div
                        class="search-result__item"
                        v-for="album in matchingAlbums"
                        @click="selectSearchResult(album)">

                        <div class="album-line">
                            <img
                                class="album-line__cover"
                                :src="album.cover" />
                            <div class="album-line__title">
                                {{album.title}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            currentSearch: null,
            matchingAlbums: []
        }
    },
    computed: {
        crossPath() {
            return pathToImg + '/cross.svg'
        }
    },
    methods: {
        search(search) {

            this.currentSearch = search;

            this.matchingAlbums = [];
            if(search) {
                const keyWords = search.split(' ');

                // Force lowercase
                for(let j = 0; j < keyWords.length; j++) {
                    keyWords[j] = keyWords[j].toLowerCase();
                }
                
                for(let i = 0; i < store.state.db.albums.length; i++) {
                    const album = JSON.parse(JSON.stringify(store.state.db.albums[i]));
                    let keyWordsMatch = true;
                    
                    // Check for album presence in result
                    if(this.matchingAlbums.includes(album)) {
                        // Album is already retrieved
                        break;
                    } else {

                        // Check for album title, artists name, designer or year
                        for(let j = 0; j < keyWords.length; j++) {

                            const albumTitle = album.title.toLowerCase();
                            const artist = album.artist.toLowerCase();
                            const year = album.year.toString();
                            const designers = album.designers.slice(0);
                            let isDesignerMatch = false;

                            for(let k = 0; k < designers.length; k++) {
                                const designer = designers[k].toLowerCase();
                                if(designer.includes(keyWords[j])) {
                                    // At least one keyword matches one designer
                                    isDesignerMatch = true;
                                    break;
                                }
                            }

                            if(albumTitle.includes(keyWords[j])
                                || artist.includes(keyWords[j])
                                || year.includes(keyWords[j])
                                || isDesignerMatch) {

                                // At least one keyword matches
                                // keyWordsMatch = true;
                            } else {
                                keyWordsMatch = false;
                                break;
                            }
                        }

                        if(keyWordsMatch) {
                            // Album is not present in result and all keywords match
                            this.matchingAlbums.push(album);
                        }
                    }
                }
            }
        },
        resetSearch() {
            this.currentSearch = null;
            this.matchingAlbums = [];
        },
        selectSearchResult(album) {
            store.commit('selectAlbum', album)
						router.push(views.DISCOGRAPHIES);
            this.resetSearch();
        }
    }
})