const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000
const axios = require('axios')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/vaccine', urlencodedParser, (req, res) => {
    //add a function to access API
    res.render('vaccine.ejs', {data: req.body})
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})