Vue.component('album-thumb', {
    template: `
        <div class="album-thumb">
            <div
                class="album-infos"
                :album-id="album.id">

                <span
                    class="album-infos__artist"
                    :album-id="album.id">
                    {{album.artist}}
                </span>
                <span
                    class="album-infos__title"
                    :album-id="album.id">
                    {{album.title}}
                </span>
                <span
                    class="album-infos__year"
                    :album-id="album.id">
                    {{album.year}}
                </span>
                <span
                    class="album-infos__rating"
                    v-if="album.isAGem"
                    :album-id="album.id">
                    This is a must-hear
                </span>
                
            </div>

            <img class="album-cover" :src=album.cover alt="">
        </div>
    `,
    props: ['album'],
    data: function () {
        return {
        }
    }
})