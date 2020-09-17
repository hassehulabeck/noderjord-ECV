const process = require("process");
const fs = require("fs");
const randomWords = require("random-words");

// Hämta ut en array av argument från kommandoraden, inkl node.
let argument = process.argv;
let fileName = argument[2];

let words = randomWords(5000);

fs.writeFile(fileName, words, { flag: "w" }, (err) => {
    if (err) throw err;
    console.log(`Filen ${fileName} är skapad.`);
});
