/* globals require module __dirname */

//we will load and attach dinamically all the routes 

const fs = require("fs");
const path = require("path");

module.exports = function(app, data) {
    fs.readdirSync("./routers")
        .filter(x => x.includes("-router"))
        .forEach(file => {
            let dataModule = require(path.join(__dirname, file))(app, data);
        });
};