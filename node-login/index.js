// Behov
/*

- webbserver som ska svara på requests. [check]
- Tillgång till user-objektet. [check]
- Utvinna data från URLen [check]
- Kolla authorization/authentication [check]

*/

const user = require('./user-module')
const http = require('http')
const url = require('url')
const fs = require('fs')

let server = http.createServer((req, res) => {
    // Här kollar vi url och auth

    // Utvinna data ur URL.
    // Metod 1 - url (deprecated)
    let credentials = url.parse(req.url, true)

    // Hämta värden för loggfilen.
    let urlFacts = req.headers.host + req.url
    let now = new Date()
    let logString = urlFacts + ": " + now + "\n" // \n är radmatning

    fs.writeFile('./logFile.txt', logString, {
        flag: 'a'
    }, (err) => {
        if (err) throw err
        console.log("Loggfilen är uppdaterad")
    })


    res.write('<html><head><meta charset="utf-8">')

    if (user.userID == credentials.query.userID && user.password == credentials.query.password) {
        res.write(`<h2>Välkommen ${user.name} <p>Du har ${user.credits} krediter.`)
    } else {
        //res.writeHead(403, "Fel kombination userID & password")
        res.write("Fel kombination userID & password")
    }
    res.end()
})
server.listen(3000, () => {
    console.log("Lyssnar på 3000")
})