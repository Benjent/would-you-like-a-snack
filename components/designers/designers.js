Vue.component('designers', {
    template: `
        <section id="designersVue">
        
            <div
                class="designer-wrapper"
                v-for="designer in db.designers"
                v-if="designer[1].works.length > 1">

                <span class="designer-name">{{designer[1].name}}</span>

                <div class="border-wrapper">

                    <div class="designer-albums">
                        <div
                            class="album-wrapper"
                            v-for="album in designer[1].works"
                            v-bind:album-id="album.id"
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
                                </div>

                                <img class="album-cover" v-bind:src=album.cover alt="">
                        </div>
                    </div>
                </div>

        </section>
    `,
    props: ['db'],
    data: function () {
        return {
        }
    }
})