//dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = 8000
const axios = require('axios')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const revStr = require('./controllers/reverseStr')

//a function to make an API call - CoWin API
async function fecthData(pincode, date, res) {
    let config = {
        method: 'GET',
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
        header: {
            'accept': 'application/json',
            'Accept-Language': 'hi_IN'
        }
    }
    await axios(config)
        .then((response) => {
            if(response.data.centers == 0){
                res.render('noMatch.ejs', { out: "No centers found! Try for a broad search..."})
            }
            else{
                res.render('vaccine.ejs', { data: response.data })
            }
        })
        .catch(err => {
            res.render('noMatch.ejs', {out: "Hmm...seems like there's a problem. Please check your area PIN or the date."})
        })
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

//defining routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/vaccine', urlencodedParser, (req, res) => {
    //reversing the YYYY-MM-DD date format
    req.body.date = revStr.rev(req.body.date)

    //calling fetchData function to make an API call
    const data = fecthData(req.body.pincode, req.body.date, res)
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})