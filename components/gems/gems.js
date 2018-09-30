Vue.component('gems', {
    template: `
        <section id="gemsVue">
            <div
                class="album-wrapper"
                v-for="album in db.albumsSortedByYear"
                v-if="album.isAGem">
                
                <img
                    class="album-cover"
                    v-bind:album-id="album.id"
                    v-on:click="$emit('album-click', album)"
                    v-bind:src=album.cover alt="">
                
                <div
                    class="album-infos"
                    v-bind:album-id="album.id">

                    <span class="album-title">{{album.artist}} - {{album.title}} ({{album.year}})</span>
                    <blockquote class="album-description">{{album.description}}</blockquote>
                    
                </div>
            </div>
        </section>
    `,
    props: ['db'],
    data: function () {
        return {
        }
    }
})