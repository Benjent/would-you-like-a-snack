Vue.component('subgenres', {
    template: `
        <section id="subgenresVue">
            <div
                class="subgenre-wrapper"
                v-for="subgenre in subgenres">

                <div class="subgenre-albums">
                    <img
                        class="album-cover"
                        v-for="album in subgenre.albums"
                        v-bind:album-id="album.id"
                        v-on:click="$emit('album-click', album)"
                        v-bind:src=album.cover alt="">
                </div>

                <img
                    class="album-cover most-representative"
                    v-bind:album-id="subgenre.mostRepresentativeAlbum.id"
                    v-on:click="$emit('album-click', subgenre.mostRepresentativeAlbum)"
                    v-bind:src=subgenre.mostRepresentativeAlbum.cover alt="">

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
    data: function () {
        return {
            subgenres: subgenres
        }
    }
})