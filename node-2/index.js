const http = require('http')
const url = require('url')
let user = require('./user-module')

http.createServer(respond).listen(3000, () => {
    console.log("Lyssnar på 3000")
});

function respond(req, res) {

    // Hantera favicon
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        console.log('favicon requested');
        return;
    }

    // Hantera ev querystring

    let params = url.parse(req.url, true)
    console.log(params)

    // vår information finns i objektet params.query
    if (params.query.userID == user.userID && params.query.password == user.password) {
        res.write(`<h1>Userinfo</h1><p> ${user.name} <p>${user.credits}`)
    } else {
        res.writeHead(403)
        res.write("Not authorized")
    }
    console.log(req.headers.host + req.url)

    res.end()

}

// URL-exempel: http://localhost:3000/?userID=12&password=1000foting