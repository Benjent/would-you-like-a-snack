Vue.component('subgenres', {
    template: `
        <section id="subgenresVue" data-simplebar>
            <div
                class="subgenre-wrapper"
                v-for="subgenre in db.subgenres">

                <div class="subgenre-albums">
                    <img
                        class="album-cover"
                        v-for="album in subgenre.albums"
                        :album-id="album.id"
                        v-on:click="selectAlbumAndView(album)"
                        :src=album.cover alt="">
                </div>

                <img
                    class="album-cover most-representative"
                    :album-id="subgenre.mostRepresentativeAlbum.id"
                    v-on:click="selectAlbumAndView(subgenre.mostRepresentativeAlbum)"
                    :src=subgenre.mostRepresentativeAlbum.cover alt="">

                <div class="subgenre-infos">

                    <span class="subgenre-name">{{subgenre.name}}</span>
                    <p class="subgenre-criteria">
                        Characterized by the following: 
                        <span
                            class="criterium"
                            v-for="(criterium, index) in subgenre.criteria">
                            {{criterium}}
                            <span v-if="index < subgenre.criteria.length - 1">-</span>
                        </span>
                    </p>
                    <blockquote class="subgenre-description">{{subgenre.description}}</blockquote>

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