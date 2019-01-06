Vue.component('searchbar', {
    template: `
        <div class="searchBar">
            <input
                class="searchBar__input"
                :class="{ 'searchBar__input--empty': currentSearch }"
                placeholder="Search by album, artist, designer or year..."
                v-model="currentSearch"
                v-on:input="search($event.target.value)">
            <img
                class="searchBar__reset"
                v-on:click="resetSearch"
                v-if="currentSearch"
                v-bind:src="crossPath">
            <div
                class="searchBar__result"
                v-if="matchingAlbums.length > 0">

                <arrow></arrow>

                <div class="searchResult">
                    <div
                        class="searchResult__item"
                        v-for="album in matchingAlbums"
                        v-on:click="selectSearchResult(album)">

                        <div class="albumLine">
                            <img
                                class="albumLine__cover"
                                v-bind:src="album.cover" />
                            <div class="albumLine__title">
                                {{album.title}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['db'],
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
                const keyWords = search.split(' ');
                
                for(let i = 0; i < this.db.albums.length; i++) {
                    const album = JSON.parse(JSON.stringify(this.db.albums[i]));
                    let allKeyWordsMatch = true;
                    
                    // Check for album presence in result
                    if(this.matchingAlbums.includes(album)) {
                        // Album is already retrieved
                        break;
                    } else {

                        // Check for album title, artists name or year
                        for(let j = 0; j < keyWords.length; j++) {

                            const albumTitle = album.title.toLowerCase();
                            const artist = album.artist.toLowerCase();
                            const year = album.year.toString();
                            const designers = album.designers.splice(0);
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
                            } else {
                                allKeyWordsMatch = false;
                                break;
                            }
                        }

                        if(allKeyWordsMatch) {
                            // Album is not present in result and all keywords match
                            this.matchingAlbums.push(album);
                        }
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