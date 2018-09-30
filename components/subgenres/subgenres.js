Vue.component('subgenres', {
    template: `
        <section id="subgenresVue">
            <div
                class="subgenre-wrapper"
                v-for="subgenre in subgenres">

                <img
                    class="album-cover most-representative"
                    v-bind:album-id="subgenre.mostRepresentativeAlbum.id"
                    v-on:click="$emit('album-click', subgenre.mostRepresentativeAlbum)"
                    v-bind:src=subgenre.mostRepresentativeAlbum.cover alt="">

                <div
                    class="subgenre-infos">

                    <span>{{subgenre.name}}</span>
                    <blockquote class="subgenre-description">{{subgenre.description}}</blockquote>
                    
                    <div class="albums">
                        <img
                            class="album-cover"
                            v-for="album in subgenre.albums"
                            v-bind:album-id="album.id"
                            v-on:click="$emit('album-click', album)"
                            v-bind:src=album.cover alt="">
                    </div>

                </div>
            </div>
        </section>
    `,
    data: function () {
        return {
            subgenres: subgenres
        }
    }
})