let http = require("http");
let quotes = require("popular-movie-quotes");
let url = require("url");

let server = http.createServer((req, res) => {
    let year = url.parse(req.url);
    console.log(year)
    let y = year.pathname.replace("/", "");


    let q = quotes.getQuoteByYear(y, y);
    if (q.length > 0) {
        res.write(q[0].quote);
        res.write(q[0].movie + " " + q[0].type);

    } else {
        res.write("Ogiltigt år / hittade inga filmer")
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Lyssnar 3000-porten.");
});