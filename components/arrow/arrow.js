Vue.component('arrow', {
    template: `
        <div
            class="arrow"
            :class="size">
            <div class="arrow__inside" :class="{ 'arrow__inside--dark': color === 'dark' }"></div>
        </div>
    `,
    props: ['size', 'color'],
})