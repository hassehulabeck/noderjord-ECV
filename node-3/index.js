let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.end("Hello")
})


app.listen(3000, () => {
    console.log("Listening to 3000")
})