Vue.component('timeline', {
    template: `
        <section id="timelineVue">

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
                    @click="$store.commit('selectAlbum', album)"
                    alt="">
            </div>

        </section>
    `,
    data() {
        return {
            db: store.state.db
        }
    },
})