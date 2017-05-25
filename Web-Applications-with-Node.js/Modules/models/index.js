/* models/index.js */

//making default module 
//making somethins like a factory for the models.
//Here we can export the necessary modules ans later on to require them as we want to

const Superhero = require("./superhero");
const Power = require("./power");

module.exports.getSuperhero = function(name, secretIdentity, ...powers) {
    return new Superhero(name, secretIdentity, ...powers)
}

module.exports.getPower = function(name) {
    return new Power(name)
}