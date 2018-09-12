const Utils = {
    // Random in-range number generator

    randomize: function () {
        let min = Math.ceil(0);
        let max = Math.floor(albums.length);
        return Math.floor(Math.random() * (max - min)) + min; // Randomize id
    },
  
    selectDefaultAlbum: function (index) {
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
    }
}