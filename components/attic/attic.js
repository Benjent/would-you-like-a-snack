Vue.component('attic', {
    template: `
        <section id="atticVue">
            <div
                class="album-wrapper"
                v-for="album in albums"
                v-bind:albumId="album.id"
                v-on:click="$emit('album-click', album)">

                <div
                    class="album-infos"
                    v-bind:album-id="album.id">

                    <span
                        class="album-artist"
                        v-bind:album-id="album.id">
                        {{album.artist}}
                    </span>
                    <span
                        class="album-title"
                        v-bind:album-id="album.id">
                        {{album.title}}
                    </span>
                    <span
                        class="album-year"
                        v-bind:album-id="album.id">
                        {{album.year}}
                    </span>
                    <span
                        class="album-rating"
                        v-if="album.isAGem"
                        v-bind:album-id="album.id">
                        This is a must-hear
                    </span>
                    
                </div>

                <img class="album" v-bind:src=album.cover alt="">
            </div>
        </section>
    `,
    data: function () {
        return {
            albums: albums,
        }
    }
})