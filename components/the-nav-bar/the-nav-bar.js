Vue.component('the-nav-bar', {
    template: `
        <header class="header">

            <h1
                class="header__headline"
                v-on:click="$store.commit('setCurrentView', views.ALBUM)">
                Would you like a snack
            </h1>

            <div class="header__menu">

                <div class="menu">
                    <div
                        class="menu__button"
                        :class="{'menu__button--active': $store.state.currentView == item.id}"
                        v-for="item in menuDefinition"
                        v-on:click="$store.commit('setCurrentView', item.id)">
                        
                        <div class="text">{{item.text}}</div>
                        <arrow v-if="$store.state.currentView == item.id"></arrow>
                        
                    </div>
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
                    text: "What's in the attic"
                },
                discographies: {
                    id: views.DISCOGRAPHIES,
                    text: "Discographies"
                },
                gems: {
                    id: views.GEMS,
                    text: "Gems"
                },
                subgenres: {
                    id: views.SUBGENRES,
                    text: "Subgenres"
                },
                designers: {
                    id: views.DESIGNERS,
                    text: "Designers"
                },
                stats: {
                    id: views.STATS,
                    text: "Stats"
                },
                about: {
                    id: views.ABOUT,
                    text: "About the project"
                }
            }
        }
    },
})