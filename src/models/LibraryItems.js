// import {run} from "@babel/core/lib/transformation";
//
// function LibraryItem(media, removeMethod) {
//
//     const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}
//
//     media._status = STATUSES.CHECKED_IN;
//
//     // methods
//     media.checkIn = function () {
//         this._status = STATUSES.CHECKED_IN;
//     }
//
//     media.checkOut = function () {
//         this._status = STATUSES.CHECKED_OUT;
//
//     }
//
//     media.isAvailable = function () {
//         return this._status === STATUSES.CHECKED_IN;
//     }
//
//     // media.remove = function(){
//     //     return removeMethod(this);
//     // }
//
//     media.remove = removeMethod;
//
//     // return the decorated object
//     return media;
// }

function Book(title, pages) {
    //this.title = title || '';
    this.title = title ?? ''; // will allow anything except null/undefined
    // ?? is the coalesce operator
    this.pages = parseInt(pages) || 0;
}

class Movie {
    title = '';
    runtime;

    constructor(title, runtime) {
        if (title) {
            this.title = title;
        }
        this.runtime = runtime || 0;
    }
}

class Album {
    title = '';
    artist = '';
    trackCount;

    constructor(title, artist, trackCount) {
        if (title) {
            this.title = title;
        }
        this.artist = artist;
        this.trackCount = trackCount || 0;
    }
}


class Song {
    title = '';
    artist = '';
    album = '';

    constructor(title, artist, album, image) {
        if(title) {
            this.title = title;
        }
        this.artist = artist;
        this.album = album || '--';
        this.image = image || '--';
    }
}

class MusicVideo {
    artist = '';
    title = '';

    img;

    constructor(title, artist, image) {
        if(title) {
            this.title = title;
        }
        this.artist = artist || '--';
        this.img = image || '';
    }
}

class Podcast {
    title = ''

    img = '';

    pub = '';

    constructor(title, publisher, image) {
        if(title) {
            this.title = title;
        }
        this.pub = publisher || '--';
        this.img = image || '--';
    }
}

class TvShow {
    epName = '';

    shName = '';

    img = '';

    constructor(episode, show, image) {
        if(episode) {
            this.epName = episode;
        }
        this.shName = show || '--';
        this.img = image || '--';
    }
}

class Software {
    genre = '';

    app = '';

    img = '';

    constructor(name, genre, image) {
        if(name) {
            this.app = name;
            this.genre = genre;
            this.img = image;
        }
    }

}

export {Book, Movie, Album, Song, MusicVideo, Podcast, TvShow, Software}