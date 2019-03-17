Vue.component('stats', {
    template: `
        <section id="statsVue" data-simplebar>
            <h2 style="text-align: center">Page in construction</h2>
            <div class="content">
                <div class="numbers">
                    <span>{{artists.length}} artists</span>
                    <span>{{albums.length}} albums</span>
                    <span>{{gemsNb}} must-hear albums</span>
                </div>
                <div class="charts">

                    <histogram-vertical caption="Number of albums per year" :datasource="albumsPerYearWithRatio"></histogram-vertical>
                    <histogram-horizontal caption="Number of albums per region" :datasource="albumsPerCountryWithRatio"></histogram-horizontal>


                    <caption>30 greatest criteria occurences</caption>
                    <div class="histogram">
                        <div
                            class="albumsPerCategory"
                            v-for="(item, index) in criteriaOccurencesWithRatio"
                            v-if="index < 30">
                            <div class="albumsPerCategory-nbOfAlbums">
                                <div class="gauge" :style="{height: item.ratioPercent}">{{item.nbOfOccurences}}</div>
                            </div>
                            <div class="albumsPerCategory-legend">{{item.criterium}}</div>
                        </div>
                    </div>
                    <div class="table">
                        <div
                            class="row"
                            v-for="(obj, year) in mostUsedCriteriaPerYear">
                            <div class="legend">
                                {{year}}
                            </div>
                            <div
                                class="data"
                                v-for="(item, occurenceIndex) in obj"
                                v-if="occurenceIndex < 3">
                                {{item.criterium}}
                                <span v-if="occurenceIndex < 2">-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            albums: albums,
            albumsPerYear: albumsPerYear,
            albumsPerCountry: albumsPerCountry,
            criteriaOccurences: criteriaOccurences,
            mostUsedCriteriaPerYear: mostUsedCriteriaPerYear,
            gemsNb: gemsNb,
            artists: artists
        }
    },
    computed: {
        albumsPerYearWithRatio() {
    
            const obj = this.albumsPerYear;
            const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
            const max = Math.max.apply( null, arr );
            const min = 0;
        
            const albumsPerYearWithRatio = {}
        
            for(year in this.albumsPerYear) {
        
                const nbOfAlbums = this.albumsPerYear[year];
                const ratio = (nbOfAlbums - min) / (max - min);
        
                albumsPerYearWithRatio[year] = {
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + "%",
                }
            };
        
            return albumsPerYearWithRatio;
        },
        albumsPerCountryWithRatio() {
    
            const obj = this.albumsPerCountry;
            const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
            const max = Math.max.apply( null, arr );
            const min = 0;
        
            const albumsPerCountryWithRatio = []
        
            for(country in this.albumsPerCountry) {
        
                const nbOfAlbums = this.albumsPerCountry[country];
                const ratio = (nbOfAlbums - min) / (max - min);
        
                albumsPerCountryWithRatio.push({
                    label: country,
                    data: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + "%",
                });
            };
    
            // Sort in alphabetical order
            //   albumsPerCountryWithRatio.sort(function(a, b){
            //     const countryA = a.country.toLowerCase()
            //     const countryB = b.country.toLowerCase();
        
            //     if (countryA < countryB) {// Sort string ascending
            //       return -1;
            //     }
            //     if (countryA > countryB) {
            //       return 1;
            //     }
            //     return 0 // Default return value (no sorting)
            //   })
            // Sort in DESC
            albumsPerCountryWithRatio.sort(function(a, b){
                const countryA = a.data
                const countryB = b.data;
        
                if (countryA > countryB) {
                return -1;
                }
                if (countryA < countryB) {
                return 1;
                }
                return 0 // Default return value (no sorting)
            })
    
          return albumsPerCountryWithRatio;
        },
        criteriaOccurencesWithRatio() {
    
            const obj = this.criteriaOccurences;
            const arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
            const max = Math.max.apply( null, arr );
            const min = 0;
        
            const criteriaOccurencesWithRatio = [];
        
            for(criterium in this.criteriaOccurences) {

                const nbOfOccurences = this.criteriaOccurences[criterium];
                const ratio = (nbOfOccurences - min) / (max - min);
        
                criteriaOccurencesWithRatio.push({
                    label: criterium,
                    data: nbOfOccurences, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + "%",
                });
            };

            // Sort in DESC
            criteriaOccurencesWithRatio.sort(function(a, b){
                const criteriumA = a.data
                const criteriumB = b.data;
        
                if (criteriumA > criteriumB) {
                return -1;
                }
                if (criteriumA < criteriumB) {
                return 1;
                }
                return 0 // Default return value (no sorting)
            })
    
          return criteriaOccurencesWithRatio;
        }
    }
})