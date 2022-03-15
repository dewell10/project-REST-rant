require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// CRUD
// create => post 
// read => get
// update => put/patch
// delete => deletes 

//EXPRESS SETTINGS 
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))

//MIDDLEWARE 
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))


//ROUTES
app.get('/', (req, res) => {
    res.render('home')
})
app.get('*', (req, res) => {
    res.render('error404')
})



app.get('/places', (req, res) => {
    res.render('index')
})
app.post('/places', (req, res) => {
    res.send('post/create new place')
})
app.get('/places/new', (req, res) => {
    res.render('places/new')
})

//EVENT LISTENERS
app.listen(process.env.PORT)