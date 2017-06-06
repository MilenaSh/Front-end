/*globals module require */

//our routes depend on express so we need to require it

const express = require("express");

module.exports = function(app, data) {
    let router = new express.Router();
    router
        .get("/", (req, res) => {
            data.getAllSuperheroes()
                .then(superheroes => {
                    res.render("superheroes-list", {
                        result: superheroes
                    });
                });
        })
        .get("/:id", (req, res) => {
            data.getSuperheroById(req.params.id)
                .then(superheroes => {
                    res.render("superheroes-details", {
                        result: superhero
                    });
                });

        })
        .post("/", (req, res) => {
            let body = req.body;
            data.createSuperhero(body.name, body.powers, body.fractions)
                .then(() => {
                    res.redirect("/superheroes");
                });

        });

    app.use("/superheroes", router);
}