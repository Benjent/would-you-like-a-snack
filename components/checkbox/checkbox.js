Vue.component('checkbox', {
    template: `
        <div
            class="checkbox-wrapper"
            v-bind:class="{ 'isRadio': filterItem.isRadio, 'checked': filterItem.checked }"
            v-on:click="$emit('checkbox-clicked', filterItem)">

            <span class="checkbox-slot"></span>
            <label>{{filterItem.string}}</label>
        </div>
    `,
    props: ['filterItem'],
    data: function () {
        return {}
    }
})