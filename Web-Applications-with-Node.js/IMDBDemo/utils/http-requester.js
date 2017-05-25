/* globals module require Promise*/

//a way to make http requests with promises

'use strict';

const request = require("request");

module.exports = {
    get(url) {
        let promise = new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
                if (err) {
                    return reject(err);
                }

                resolve({
                    response: response,
                    body: body
                });
            })
        });
        return promise;
    }
};