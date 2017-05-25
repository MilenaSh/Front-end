//Reading files from directory

const fs = require("fs");

var filesWeReadDir = fs.readdirSync(__dirname);
console.log(filesWeReadDir);

//Reading exact file sync / should specify encoding

var content = fs.readFileSync(__dirname + "/demo.js", "utf8");
console.log(content);

//Reading async 

fs.readFile(
    __dirname + "index.js",
    "utf8",
    (err, content) => {
        console.log(content);
    });

console.log(new Date());
//other operations

//Writing files

let newContent = "This is a text";

fs.writeFileSync(__dirname + "new-file.txt", newContent, "utf8");

//Reading it line by line
const readline = require("readline");