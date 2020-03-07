const Gems = Vue.component('gems', {
    template: `
        <section id="gemsVue" data-simplebar>
            <div
                class="album-wrapper"
                v-for="album in db.albumsSortedByYear"
                v-if="album.isAGem">
                
                <img
                    class="album-cover"
                    :album-id="album.id"
                    @click="selectAlbumAndView(album)"
                    :src=album.cover alt="">
                
                <div class="album-infos">

                    <span
                        class="album-title"
                        :album-id="album.id"
                        @click="selectAlbumAndView(album)">
                        {{album.artist}} - {{album.title}} ({{album.year}})
                    </span>
                    <blockquote v-if="album.description && album.description !== 'TODO description'" class="album-description">{{album.description}}</blockquote>
                    
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            db: store.state.db,
            views: views,
        }
    },
    methods: {
        selectAlbumAndView(album) {
            store.commit('selectAlbum', album);
            router.push(views.DISCOGRAPHIES);
        }
    }
})