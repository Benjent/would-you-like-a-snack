Vue.component('designers', {
    template: `
        <section id="designersVue" data-simplebar>
        
            <div
                class="designer"
                v-for="designer in db.designers"
                v-if="designer[1].works.length > 1">

                <span class="designer__name">{{designer[1].name}}</span>
                
                <div class="border-wrapper">
                    <arrow></arrow>

                    <div class="designer__albums">
                        <div
                            class="album-wrapper"
                            v-for="album in designer[1].works"
                            :album-id="album.id"
                            v-on:click="selectAlbumAndView(album)">

                            <album-thumb
                                :album="album"
                                v-on:click="selectAlbumAndView(album)">
            
                            </album-thumb>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    `,
    data() {
        return {
            db: store.state.db,
            views: views
        }
    },
    methods: {
        selectAlbumAndView(album) {
            store.commit('selectAlbum', album);
            store.commit('setCurrentView', views.DISCOGRAPHIES);
        }
    }
})