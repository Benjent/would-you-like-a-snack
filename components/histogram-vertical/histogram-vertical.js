Vue.component('histogram-vertical', {
    template: `
        <div class="histogram-vertical">
            <caption class="histogram-vertical__caption">{{caption}}</caption>
            <div class="histogram-vertical__datavis">
                <div class="datavis" v-for="(item, label) in datasource">
                    <div class="datavis__data">
                        <div class="gauge" :style="{height: item.ratioPercent}">{{item.data}}</div>
                    </div>
                    <div class="datavis__label">{{label}}</div>
                </div>
            </div>
        </div>
    `,
    props: ['caption', 'datasource'],
    data: function () {
        return {
        }
    }
})