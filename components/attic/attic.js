Vue.component('attic', {
    template: `
        <section id="atticVue">

            <div id="filter">
                <div
                    class="criteria-wrapper"
                    v-for="criterium in this.filter">

                    <div
                        class="checkbox-wrapper"
                        v-on:click="toggleFilterCriterium($event.currentTarget, criterium.string)">

                        <span class="checkbox-slot"></span>
                        <label>{{criterium.string}}</label>

                    </div>

                </div>
            </div>

            <template v-for="album in db.albums">
                <template v-for="criterium in computedFilterArray">
                    <template
                        v-for="albumCriterium in album.criteria"
                        v-if="albumCriterium == criterium.string && criterium.checked">

                        <div
                            class="album-wrapper"
                            v-bind:albumId="album.id"
                            v-on:click="$emit('album-click', album)">

                            <div>
                                {{albumCriterium}}
                            </div>

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
                                <span
                                    class="album-rating"
                                    v-if="album.isAGem"
                                    v-bind:album-id="album.id">
                                    This is a must-hear
                                </span>
                                
                            </div>

                            <img class="album" v-bind:src=album.cover alt="">
                       
                        </div>

                    </template>
                </template>
            </template>

        </section>
    `,
    props: ['db'],
    data: function () {

        const initialFilter = {};

        for(let i = 0; i < this.db.criteria.length; i++) {
            initialFilter[this.db.criteria[i]] = {
                "string": this.db.criteria[i],
                checked: false
            }
        }

        return {
            filter: initialFilter
        }
    },
    computed: {
        computedFilterArray() {
            return this.filter;
        }
    },
    methods: {
        toggleFilterCriterium: function(htmlWrapper, criteriumString) {
            this.filter[criteriumString].checked = !this.filter[criteriumString].checked;

            htmlWrapper.classList.contains("checked") ? htmlWrapper.classList.remove("checked") : htmlWrapper.classList.add("checked");
        }
    }
})