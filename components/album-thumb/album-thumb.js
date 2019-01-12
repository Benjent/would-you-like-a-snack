Vue.component('album-thumb', {
    template: `
        <div class="albumThumb">
            <div
                class="albumInfos"
                :album-id="album.id">

                <span
                    class="albumInfos__artist"
                    :album-id="album.id">
                    {{album.artist}}
                </span>
                <span
                    class="albumInfos__title"
                    :album-id="album.id">
                    {{album.title}}
                </span>
                <span
                    class="albumInfos__year"
                    :album-id="album.id">
                    {{album.year}}
                </span>
                <span
                    class="albumInfos__rating"
                    v-if="album.isAGem"
                    :album-id="album.id">
                    This is a must-hear
                </span>
                
            </div>

            <img class="albumCover" :src=album.cover alt="">
        </div>
    `,
    props: ['album'],
    data: function () {
        return {
        }
    }
})