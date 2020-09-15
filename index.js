let https = require('https')
const fs = require('fs')

https.get('https://www.hulabeck.se/html/temp/products.json', (res) => {

    res.on('data', (d) => {
        d = JSON.parse(d)
        console.log(d);
    });

})