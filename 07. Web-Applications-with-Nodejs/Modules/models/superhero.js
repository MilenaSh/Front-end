class Superhero {
    constructor(name, secretIdentity, ...powers) {
        this.name = name;
        this.secretIdentity = secretIdentity;
        this.powers = powers;
    }
}

//export the module

module.exports.Superhero = Superhero;
//this way makes us dependent on the node version

//3/ best way to export - using functions

module.exports.getSuperhero = function(name, secretIdentity, ...powers) {
    return new Superhero(name, secretIdentity, ...powers)
}