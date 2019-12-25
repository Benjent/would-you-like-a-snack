Vue.component('arrow', {
    template: `
        <div
            class="arrow"
            :class="size">
            <div class="arrow__inside"></div>
        </div>
    `,
    props: ['size'],
})