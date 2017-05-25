/* globals modules require */
'use strict';

const SimpleMovie = require("./simple-movie-model");

module.exports = {
    getSimpleMovie(name, url) {
        return new SimpleMovie({
            name: name,
            imdbId: url
        });
    },
    insertManySimpleMovies(movies) {
        SimpleMovie.insertMany(movies);
    }
}