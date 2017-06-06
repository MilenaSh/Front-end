// Model (db, mongoose)
//                ^
//                |
// Controller (BL, data-layer, routes, controller)
//                                       |
//                                       v
// Viwe (Presentation logic) (Pug)

/* globals require console */

const config = require("./config");

const app = require("./config/application");
const data = require("./data")(config);

data.createSuperhero("Batman", ["Utility belt"], ["Justice league", "Bat family"])
    .then(() => {
        console.log('Batman created');
    });

console.log(data);

require("./routers")(app, data);

app.listen(config.port, () => console.log(`Running at port ${config.port}`));