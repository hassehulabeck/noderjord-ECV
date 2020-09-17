let http = require("http");
let quotes = require("popular-movie-quotes");
let url = require("url");

let server = http.createServer((req, res) => {
    let year = url.parse(req.url);
    let y = year.pathname.replace("/", "");
    console.log(y);

    let q = quotes.getQuoteByYear(y, y);
    res.write(q[0].quote);
    res.write(q[0].movie + " " + q[0].type);
    res.end();
});

server.listen(3000, () => {
    console.log("Lyssnar 3000-porten.");
});