Vue.component('histogram-horizontal', {
    template: `
        <div class="histogram-horizontal">
            <caption class="histogram-horizontal__caption">{{caption}}</caption>
            <div class="histogram-horizontal__datavis">
                <div class="datavis" v-for="(item, key) in datasource">
                    <span class="datavis__label">{{item.label}}</span>
                    <div class="datavis__data">
                        <div class="gauge" :style="{width: item.ratioPercent}">{{item.data}}</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['caption', 'datasource'],
})