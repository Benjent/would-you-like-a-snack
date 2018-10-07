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

                <searchbar
                    v-bind:db="db"
                    v-on:album-click="handleSearchbarAlbumClick">
                </searchbar>
            </div>
            <div id="spinningVinylWrapper">
                <img
                    class="spinning-vinyl spinning"
                    :src="vinylPath"/>
            </div>
        </header> 
    `,
    props: ['currentVue', 'db'],
    data: function () {
        return {
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