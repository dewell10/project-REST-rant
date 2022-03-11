require('dotenv').config()
const express = require('express')
const app = express()

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
//  app.set() assigns first argument


//MIDDLEWARE 
app.use('/places', require('./controllers/places'))


//ROUTES
app.get('/', (req, res) => {
    res.render('home')
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
app.get('*', (req, res) => {
    res.render('error404')
})

//EVENT LISTENERS
app.listen(process.env.PORT)