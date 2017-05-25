/*globals require module */
'use strict';

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

//make the schema in mongoose
let SimpleMovieSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    imdbId: {
        type: String,
        required: true
    }
})

//register the model in mongoose

mongoose.model("SimpleMovie", SimpleMovieSchema);

module.exports = mongoose.model("SimpleMovie");