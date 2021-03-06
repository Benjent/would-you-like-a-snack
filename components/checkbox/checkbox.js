Vue.component('checkbox', {
    template: `
        <div
            class="checkbox-wrapper"
            :class="{ 'isRadio': filterItem.isRadio, 'checked': filterItem.checked }"
            @click="$emit('checkbox-clicked', filterItem)">

            <span class="checkbox-slot"></span>
            <label>{{filterItem.string}}</label>
        </div>
    `,
    props: ['filterItem'],
})