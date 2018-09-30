Vue.component('checkbox', {
    template: `
        <div
            class="checkbox-wrapper"
            v-bind:class="{ 'isRadio': isRadio, 'checked': checked }"
            v-on:click="toggleFilterItem(filterItem)">

            <span class="checkbox-slot"></span>
            <label>{{label}}</label>
        </div>
    `,
    props: ['label', 'isRadio', 'checked'],
    data: function () {
        return {}
    }
})