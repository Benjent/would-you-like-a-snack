Vue.component('timeline', {
    template: `
        <section id="timelineVue" class="dragscroll">

            <div
                class="album"
                v-for="(album, index) in db.albumsSortedByYear">

                <div 
                    class="album__year"
                    v-if="index == 0 || album.year != db.albumsSortedByYear[index-1].year">
                    {{album.year}}
                </div>

                <img
                    class="album__cover"
                    :album-id="album.id"
                    :src=album.cover
                    v-on:click="$emit('album-click', album)"
                    alt="">

            </div>

        </section>
    `,
    props: ['selectedAlbum', 'db'],
    data: function () {
        return {
        }
    },
})