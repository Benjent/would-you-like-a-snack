Vue.component('about', {
    template: `
        <section id="aboutVue">

            <h2>Hi!</h2>
        
            <div class="me-wrapper">
                <img
                    class="me"
                    v-bind:src="mePath">
                <div class="me-description">
                    <span>The face of a sane man</span>
                    <img
                        class="arrow"
                        v-bind:src="arrowPath">
                </div>
            </div>
            
            <p>
                Would You Like A Snack is a tiny web project with big music ambitions: dusting old prog albums, known as prog gems, to make them shine beside classic albums.
            </p>
            <p>
                Prog albums are anything related to progressive music, from late 60's psychedelic vibes to early 80's electronic wave ; still focusing on the progressive bloom of the 70's.
            </p>
            <p>
                This project is designed as a tool to discover albums, the way we would pick up vinyls in music stores, as well as centralizer of what can be found scrapping the web.
            </p>
            <p>
                If you spot any wrong information or any typo, think of improvements, or would like to leave a sweet comment, please feel free to contact me at benjent@hotmail.fr.
            </p>
        </section>
    `,
    data: function () {
        return {
        }
    },
    computed: {
        arrowPath() {
            return pathToImg + "/arrow-clueless.svg"
        },
        mePath() {
            return pathToImg + "/me.jpg"
        }
    }
})