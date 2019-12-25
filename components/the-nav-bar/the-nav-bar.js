Vue.component('the-nav-bar', {
    template: `
        <header class="header">

            <h1
                class="header__headline">
                <router-link to="/">Would you like a snack</router-link>
            </h1>

            <div class="header__menu">

                <div class="menu">
									<router-link
										v-for="item in menuDefinition"
										:to="item.id"
										class="menu__button">
										<span class="text">{{ item.text }}</span>
										<arrow v-if="$route.path === item.id"></arrow>
									</router-link>
                   
                </div>

            </div>

            <searchbar class="header__searchbar"></searchbar>
        </header> 
    `,
    data() {
        return {
            views: views,
            menuDefinition: {
                attic: {
                    id: views.ATTIC,
                    text: `What's in the attic`
                },
                discographies: {
                    id: views.DISCOGRAPHIES,
                    text: `Discographies`
                },
                gems: {
                    id: views.GEMS,
                    text: `Gems`
                },
                subgenres: {
                    id: views.SUBGENRES,
                    text: `Subgenres`
                },
                designers: {
                    id: views.DESIGNERS,
                    text: `Designers`
                },
                stats: {
                    id: views.STATS,
                    text: `Stats`
                },
                about: {
                    id: views.ABOUT,
                    text: `About the project`
                }
            }
        }
    },
})