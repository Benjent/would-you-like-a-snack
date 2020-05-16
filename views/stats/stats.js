const Stats = Vue.component('stats', {
    template: `
        <section id="statsVue" data-simplebar>
            <div class="content">
                <div class="numbers">
                    <span>{{artists.length}} artists</span>
                    <span>{{albums.length}} albums</span>
                    <span>{{gemsNb}} must-hear albums</span>
                    <span>{{subgenres.length}} subgenres</span>
                </div>
                <div class="charts">

                    <histogram-vertical caption="Number of albums per year" :datasource="albumsPerYearWithRatio"></histogram-vertical>
                    <histogram-horizontal caption="Number of albums per region" :datasource="albumsPerCountryWithRatio"></histogram-horizontal>
                    <histogram-horizontal caption="Artists with most gems" :datasource="artistsWithGemsWithRatio"></histogram-horizontal>
                    <histogram-horizontal caption="Greatest criteria occurences" :datasource="criteriaOccurencesWithRatio"></histogram-horizontal>

                    <caption>Most common criteria per year</caption>
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
                                {{item.criterium | criterium}}
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
            artistsWithMostGems: artistsWithMostGems,
            artists: artists,
            subgenres: subgenres,
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
                    ratioPercent: (ratio * 100).toString() + '%',
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
                    ratioPercent: (ratio * 100).toString() + '%',
                });
            };
    
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
                    label: this.$options.filters.criterium(criterium),
                    data: nbOfOccurences, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
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
        },
		artistsWithGemsWithRatio() {
			const min = 2
			const artistsWithSeveralGems = Object.entries(artistsWithMostGems).filter(item => item[1] >= min)
			artistsWithSeveralGems.sort((a, b) => b[1] - a[1])
			const max = artistsWithSeveralGems[0][1] // Since it is sorted DESC
			

			const artistsWithGemsWithRatio = []
			artistsWithSeveralGems.forEach(artist => {
				const nbOfGems = artist[1];
                const ratio = (nbOfGems - min) / (max - min);

                artistsWithGemsWithRatio.push({
                    label: artist[0],
                    data: nbOfGems, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + '%',
                })
			})

			return artistsWithGemsWithRatio
		}
    }
})