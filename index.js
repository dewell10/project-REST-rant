require('dotenv').config()
const express = require('express')
const app = express()

// CRUD
// create => post 
// read => get
// update => put/patch
// delete => deletes 

//EXPRESS SETTINGS 
app.set("views", __dirname + "/views");
//  app.set() assigns first argument


//MIDDLEWARE 
app.use('/places', require('./controllers/places'))


//ROUTES
app.get('/', (req, res) => {
    res.send('Home Page!')
})
app.get('/places', (req, res) => {
    res.send('get home page!')
})
app.post('/places', (req, res) => {
    res.send('post/create new place')
})
app.get('/places/new', (req, res) => {
    res.send('get form page for creating a new place!')
})
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//EVENT LISTENERS
app.listen(process.env.PORT)