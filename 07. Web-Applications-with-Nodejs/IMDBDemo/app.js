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

require("./config/mongoose")(constants.connectionString)

//using queue data structure
let urlsQueue = queuesFactory.getQueue();

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

constants.genres.forEach(genre => {
    for (let i = 0; i < constants.pagesCount; i += 1) {
        let url = `http://www.imdb.com/search/title?genres=${genre}&title_type=feature&sort=moviemeter,asc&view=simple&page=${i+1}&ref_=adv_nxt`;
        urlsQueue.push(url);
    }
});

// const fs = require("fs");
// let writableStream = fs.createWriteStream("./output.js", "utf8");
function getMoviesFromUrl(url) {
    console.log(`Working with ${url}`);
    httpRequester.get(url)
        .then((result) => {
            const selector = ".col-title span[title] a";
            const html = result.body;
            return htmlParser.parseSimpleMovie(selector, html);
        })
        .then(movies => {
            let dbMovies = movies.map(movie => {
                return modelsFactory.getSimpleMovie(movie.title, movie.url);
            });

            modelsFactory.insertManySimpleMovies(dbMovies);

            return wait(1000);
        })
        .then(() => {
            if (urlsQueue.isEmpty()) {
                return;
            }

            getMoviesFromUrl(urlsQueue.pop());
        })
        .catch((err) => {
            console.dir(err, { colors: true });
        });
}

const asyncPagesCount = 15;

Array.from({ length: asyncPagesCount })
    .forEach(() => getMoviesFromUrl(urlsQueue.pop()));