Vue.component('stats', {
    template: `
        <section id="statsVue">
            <div class="content">
                <div class="numbers">
                    <span>{{artists.length}} artists</span>
                    <span>{{albums.length}} albums</span>
                    <span>{{gemsNb}} must-hear albums</span>
                </div>
                <div class="tables">
                    <table>
                        <thead>
                            <th>Year</th>
                            <th class="gauge-column">Number of albums</th>
                        </thead>
                        <tbody>
                            <tr class="albumsPerCategory" v-for="(item, year) in albumsPerYearWithRatio">
                                <td class="albumsPerCategory-year">{{year}}</td>
                                <td class="albumsPerCategory-nbOfAlbums">
                                    <div class="gauge" :style="{width: item.ratioPercent}">{{item.nbOfAlbums}}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <th>Country</th>
                            <th class="gauge-column">Number of albums</th>
                        </thead>
                        <tbody>
                            <tr class="albumsPerCategory" v-for="item in albumsPerCountryWithRatio">
                                <td class="albumsPerCategory-country">{{item.country}}</td>
                                <td class="albumsPerCategory-nbOfAlbums">
                                    <div class="gauge" :style="{width: item.ratioPercent}">{{item.nbOfAlbums}}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    `,
    data: function () {
        return {
            albums: albums,
            albumsPerYear: albumsPerYear,
            albumsPerCountry: albumsPerCountry,
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
                nbOfAlbums: nbOfAlbums, 
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
                    country: country,
                    nbOfAlbums: nbOfAlbums, 
                    ratio: ratio,
                    ratioPercent: (ratio * 100).toString() + "%",
                });
          };
    
          // Sort in alphabetical order
          albumsPerCountryWithRatio.sort(function(a, b){
            const countryA = a.country.toLowerCase()
            const countryB = b.country.toLowerCase();
    
            if (countryA < countryB) {// Sort string ascending
              return -1;
            }
            if (countryA > countryB) {
              return 1;
            }
            return 0 // Default return value (no sorting)
          })
    
          return albumsPerCountryWithRatio;
        }
    }
})