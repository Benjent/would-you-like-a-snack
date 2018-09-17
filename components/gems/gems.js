Vue.component('gems', {
    template: `
        <section id="gemsVue">
            <div
                class="album-wrapper"
                v-for="album in albums"
                v-if="album.isAGem">
                
                <img
                    class="album-cover"
                    v-bind:albumId="album.id"
                    v-on:click="$emit('album-click', album)"
                    v-bind:src=album.cover alt="">
                
                <div
                    class="album-infos"
                    v-bind:albumId="album.id">

                    <span>{{album.artist}} - {{album.title}} ({{album.year}})</span>
                    <blockquote class="album-description">{{album.description}}</blockquote>
                    
                </div>
            </div>
        </section>
    `,
    data: function () {
        return {
            albums: albums
        }
    }
})