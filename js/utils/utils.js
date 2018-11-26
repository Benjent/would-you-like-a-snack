const Utils = {
    // Random in-range number generator

    randomize: function (max) {
        // let min = Math.ceil(0);
        // let max = Math.floor(maximum);
        const min = 0;
        return Math.floor(Math.random() * (max - min)) + min; // Randomize id
    },
  
    selectDefaultAlbum: function (index, albums) {
        let defaultAlbum = albums[index];
        defaultAlbum.index = index;
        defaultAlbum.previousAlbum = null;
        defaultAlbum.nextAlbum = null;
    
        if(index > 0 && albums[index - 1].artist == defaultAlbum.artist) {
        defaultAlbum.previousAlbum = albums[index - 1]
        }
        
        if(index < albums.length && albums[index + 1].artist == defaultAlbum.artist) {
        defaultAlbum.nextAlbum = albums[index + 1]
        }
    
        return defaultAlbum;
    },

    sortByYear: function(albumA, albumB) {
        if (albumA.year < albumB.year)
          return -1;
        if (albumA.year > albumB.year)
          return 1;
        return 0;
    },

    sortByOccurences: function(criteriumA, criteriumB) {
        if (criteriumA.occurences > criteriumB.occurences)
          return -1;
        if (criteriumA.occurences < criteriumB.occurences)
          return 1;
        return 0;
    }
}