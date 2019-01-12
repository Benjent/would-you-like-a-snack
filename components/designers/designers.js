Vue.component('designers', {
    template: `
        <section id="designersVue" data-simplebar>
        
            <div
                class="designer"
                v-for="designer in db.designers"
                v-if="designer[1].works.length > 1">

                <span class="designer__name">{{designer[1].name}}</span>
                <arrow></arrow>

                <div class="border-wrapper">

                    <div class="designer__albums">
                        <div
                            class="album-wrapper"
                            v-for="album in designer[1].works"
                            :album-id="album.id"
                            v-on:click="$emit('album-click', album)">

                            <album-thumb
                                :album="album"
                                v-on:click="$emit('album-click', album)">
            
                            </album-thumb>
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