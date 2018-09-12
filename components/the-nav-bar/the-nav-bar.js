Vue.component('the-nav-bar', {
    props: ['currentVue'],
    template: `
        <header>
            <div id="left">
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
            </div>
            <h1
                id="snackHeader"
                v-on:click="$emit('set-current-vue', 'album')">
                Would you like a snack
            </h1>
            <div id="right">
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
            </div>
        </header> 
    `,
    data: function () {
        return {
        }
    },
})