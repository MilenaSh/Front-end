/* globals require console */

const express = require("express");

let app = express();

let superheroes = [{
        name: "Batman",
        id: 1
    },
    {
        name: "Bat Girl",
        id: 2
    },
    {
        name: "Iron fist",
        id: 3
    }
]

//route parameters
//Get all superheroes
// app.get("/superheroes", function(req, res) {
//     res.send(superheroes)
// });

//Get details about a superhero
app.get("/superheroes/:id", function(req, res) {
    let id = +req.params.id;
    let superhero = superheroes.find(sh => sh.id === id);
    console.log(id);
    res.send(superhero);
});

//Add a new superhero
//we need body-parser for that
app.post("/superheroes", function(req, res) {
    let superhero = req.body;
    console.log(superhero);
    superhero.id = superheroes.length;
    superheroes.push(superhero);
})

const port = 3001;


app.listen(port, () => {
    console.log(`App running at port ${port}`);
});