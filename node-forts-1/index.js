let http = require('http')
let quotes = require("popular-movie-quotes");

let server = http.createServer((req, res) => {

    let body = `
        <html><head><meta charset="utf-8"><body>
        <h1>Torsdag 17 september</h1>
        <ol>
            <li>Repetition Node</li>
            <li>Introduktion Paket och installation</li>
            <li>Introduktion URL - Läsa parametrar</li> 
            <li>Introduktion Node från kommandoraden</li>
        </ol>`

    // metoden getSomeRandom returnerar en array, därav index-talen på raderna nedan.
    let q = quotes.getSomeRandom(1)
    let str = `<h2>${q[0].quote}</h2>`;
    str += `<p>${q[0].movie} (${q[0].year})`;

    res.end(body + str);
});

server.listen(3000, () => {
    console.log("Lyssnar 3000-porten.");
});