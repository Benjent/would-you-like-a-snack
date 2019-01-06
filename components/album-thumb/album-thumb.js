Vue.component('album-thumb', {
    template: `
        <div class="albumThumb">
            <div
                class="albumInfos"
                v-bind:album-id="album.id">

                <span
                    class="albumInfos__artist"
                    v-bind:album-id="album.id">
                    {{album.artist}}
                </span>
                <span
                    class="albumInfos__title"
                    v-bind:album-id="album.id">
                    {{album.title}}
                </span>
                <span
                    class="albumInfos__year"
                    v-bind:album-id="album.id">
                    {{album.year}}
                </span>
                <span
                    class="albumInfos__rating"
                    v-if="album.isAGem"
                    v-bind:album-id="album.id">
                    This is a must-hear
                </span>
                
            </div>

            <img class="albumCover" v-bind:src=album.cover alt="">
        </div>
    `,
    props: ['album'],
    data: function () {
        return {
        }
    }
})