/* globals console require setTimeout */
'use strict';

//require operational system

const os = require("os");

const listMoviesUrl = 'http://www.imdb.com/search/title?genres=drama&title_type=feature&sort=moviemeter,asc&view=simple&page=2&ref_=adv_nxt';

//to make http requests

// const http = require('http');

// 1/using request library

const httpRequester = require("./utils/http-requester");

const htmlParser = require("./utils/html-parser");

const queuesFactory = require("./data-structures/queue");

const modelsFactory = require("./models");

const constants = require("./config/constants");

//require the connetion string - not necessary as a const

require(".config/mongoose")(constants.connectionString)

//using queue data structure
let urlsQueue = queuesFactory.getQueue();

constants.genres.forEach(genre => {
    for (let i = 0; i < constants.pagesCount; i += 1) {

        let url = `http://www.imdb.com/search/title?genres=${genre}&title_type=feature&sort=moviemeter,asc&view=simple&page=${i+1}&ref_=adv_nxt`;
        urlsQueue.push(url);
    }
});

const fs = require("fs");
let writableStream = fs.createWriteStream("./output.js", "utf8");

function getMoviesFromUrl(url) {
    httpRequester.get(url)
        .then((result) => {
            const selector = ".col-title span[title] a";
            const html = result.body;
            return htmlParser.parseSimpleMovies(selector, html);

        })
        .then(movies => {
            //writing in output.js
            // writableStream.write(JSON.stringify(movies));
            // writableStream.write(os.EOL);

            //export movies to mongoose

            let dbMovies = movies.map(movie => {
                return modelsFactory.getSimpleMovie(movie.name, movie.url);
            });
            modelsFactory.insertManySimpleMovies(dbMovies);
        })
    console.log(movies.length);
    console.log(url);
    //start again
    if (urlsQueue.isEmpty()) {
        writableStream.end();
        return;
    }
    setTimeout(() => {
        getMoviesFromUrl(urlsQueue.pop());
    }, 500);
})
.catch((err) => {
    console.dir(err, { colors: true });
});
};

getMoviesFromUrl(urlsQueue.pop());

//to parse it we use jquery - we tale the html and place it as an inner html of the body
//we need jsdom package for node