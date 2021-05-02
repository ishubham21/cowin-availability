const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})