const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//define paths for express config
const pubdir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')



const app = express()

const port = process.env.PORT || 3001

// setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup statis directory to serve
app.use(express.static(pubdir))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mahathi Amencherla'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Mahathi Amencherla"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        help_message: "Just type any location on earth, and you'll find its weather update! :) ",
        name: 'Mahathi Amencherla'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address) {
        return res.send({
            error: "Please type a valid location!"
        })
    }
        geocode(req.query.address, (error,{Latitude, Longitude, Location}={}) => {
            if(error) {
               return res.send({
                   error
               })
            }
            forecast(Latitude, Longitude, (error, {Description, Temperature, Feels_like}= {} ) => {
                if(error) {
                    return res.send({
                        error
                    })
                }
                //console.log('Data:')
                res.send({
                    address: req.query.address,
                    forecast: Description,
                    location: Location,
                    temperature: Temperature,
                    feelsLike: Feels_like
                })
            })
        })
    
})


app.get('/help/*', (req,res) => {
    res.render('404', {
        errorMessage: 'Help article not found!',
        title: 'Error',
        name: 'Mahathi'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        errorMessage: '404, page not found',
        title: 'Error',
        name: 'Mahathi'
    })
})


app.listen(port, () => {
    console.log('Server is up on port '+ port)
})