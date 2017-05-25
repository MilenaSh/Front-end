/* globals require */

//fs - file system

const fs = require("fs");

var contents = fs.readFileSync("app.js", "utf8");

console.log(contents);


//require our own modules -  always begins with ./ which means same directory
// "../" meand go back one directory back

require("./sample")

///////////

const SuperheroModule = require("./models/superhero")

const Superhero = SuperheroModule.Superhero;

var batman = new Superhero("Batman", "Bruce Wayne", "belt");

console.log(batman);

//3 / best way to import the exported as a function module

const superheroFactory = require("./models/superhero");

var barman2 = superheroFactory.getSuperhero("Batman", "Bruce", "Utility belt");

console.log(barman2);