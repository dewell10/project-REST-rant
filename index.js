require('dotenv').config()
const express = require('express')
const app = express()

// CRUD
// create => post 
// read => get
// update => put/patch
// delete => deletes 

//EXPRESS SETTINGS 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
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
    res.send('get form page for creating a new place!')
})
app.get('*', (req, res) => {
    res.render('error404')
})

//EVENT LISTENERS
app.listen(process.env.PORT)