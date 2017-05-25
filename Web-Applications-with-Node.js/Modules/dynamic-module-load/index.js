/* models/index.js */

const fs = require("fs");


// __dirname - gives us the root directory

fs.readdirSync(__dirname)
    .filter(file => file.indexOf("-model") >= 0)
    .forEach(file => {
        require(__dirname + "/" + file);
    });