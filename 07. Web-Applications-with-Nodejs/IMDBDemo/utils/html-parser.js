/* globals module require Promise*/
'use strict';

//we use it for the DOM operations
//NB the modules should be with const

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);

module.exports.parseSimpleMovie = (selector, html) => {

    return Promise.resolve()
        .then(() => {
            $("body").html(html);
            let items = [];
            $(selector).each((index, item) => {
                const $item = $(item);

                items.push({
                    title: $item.html(),
                    url: $item.attr("href")
                });
            });

            return items;
        });
};