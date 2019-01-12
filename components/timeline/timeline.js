Vue.component('timeline', {
    template: `
        <section id="timelineVue" class="dragscroll">

            <div
                class="album-wrapper"
                v-for="(album, index) in db.albumsSortedByYear">

                <div 
                    class="album-year"
                    v-if="index == 0">
                    {{album.year}}
                </div>
                <div 
                    class="album-year"
                    v-else-if="album.year != db.albumsSortedByYear[index-1].year">
                    {{album.year}}
                </div>

                <div class="album-placeholder">
                    <img
                        class="album-cover"
                        :album-id="album.id"
                        :src=album.cover
                        v-on:click="$emit('album-click', album)"
                        alt="">
                </div>

            </div>

        </section>
    `,
    props: ['selectedAlbum', 'db'],
    data: function () {
        return {
        }
    },
})