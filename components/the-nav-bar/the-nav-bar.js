Vue.component('the-nav-bar', {
    template: `
        <header class="header">

            <h1
                class="header__headline"
                v-on:click="$emit('set-current-vue', 'album')">
                Would you like a snack
            </h1>

            <div class="header__menu">

                <div class="menu">
                    <div
                        class="menu__button"
                        :class="{'menu__button--active': currentVue == item.id}"
                        v-for="item in menuDefinition"
                        v-on:click="$emit('set-current-vue', item.id)">
                        
                        <div class="text">{{item.text}}</div>
                        <arrow v-if="currentVue == item.id"></arrow>
                        
                    </div>
                </div>

            </div>

            <searchbar
                class="header__searchbar"
                v-bind:db="db"
                v-on:album-click="handleSearchbarAlbumClick">
            </searchbar>
        </header> 
    `,
    props: ['currentVue', 'db'],
    data: function () {
        return {
            menuDefinition: {
                attic: {
                    id: "attic",
                    text: "What's in the attic"
                },
                discographies: {
                    id: "discographies",
                    text: "Discographies"
                },
                gems: {
                    id: "gems",
                    text: "Gems"
                },
                subgenres: {
                    id: "subgenres",
                    text: "Subgenres"
                },
                designers: {
                    id: "designers",
                    text: "Designers"
                },
                stats: {
                    id: "stats",
                    text: "Stats"
                },
                about: {
                    id: "about",
                    text: "About the project"
                }
            }
        }
    },
    methods: {
        handleSearchbarAlbumClick: function(album) {
            this.$emit('album-click', album);
        }
    },
    computed: {
        vinylPath() {
            return pathToImg + "/vinyle_gold.png"
        },
    }
})