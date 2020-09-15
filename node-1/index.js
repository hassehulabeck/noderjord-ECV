let http = require('http')
let https = require('https')
let url = 'https://www.hulabeck.se/html/temp/swedishIFPAranking.json'
let playerData = ''

// Hämta datan
https.get(url, (res) => {
    res.on('data', (chunk) => {
        playerData += chunk
    })
    res.on('end', () => {
        playerData = JSON.parse(playerData)
        showTopTen()
    })
})

function showTopTen() {
    let server = http.createServer((req, res) => {
        let data = '<html><head><ol>'

        for (i = 0; i < 10; i++) {
            data += `
            <li>
            ${playerData[i].first_name} ${playerData[i].last_name}, ${playerData[i].city}
            ${playerData[i].wppr_points}
            </li>
            `
        }
        data += '</ol>'

        res.end(data, 'latin1')
    })
    server.listen(3000, () => {
        console.log("Server now listening on 3000")
    })
}