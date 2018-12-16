require('dotenv').config()
const path = require('path')
const p = require( './src/utils/color_logger')(path.basename(__filename))
const mongoose = require('mongoose');
const express = require('express')
const Promise = require('bluebird')
const fs = require('fs')
const read_file = Promise.promisify(fs.readFile)
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.resolve('./build')))

const host = process.env.API_HOST
const port = process.env.API_PORT

app.get('/api/homepage', async (req, res) => {
    // mongoose.connect('mongodb://localhost/project-airbnb/homepage')
    const homepage = await read_file('./homepage.json', 'utf8')
    res.status(200).send(homepage)
})
app.get('/api/rooms/:id', async (req, res) => {
    const rooms = await read_file('./rooms.json', 'utf8')
    res.status(200).send(rooms)
})
app.get('/api/browse/homes/:criteria', async (req, res) => {
    const browse = await read_file('./browse.json', 'utf8')
    res.status(200).send(browse)
})

app.get('*',  (req, res) => {
    res.status(200).sendFile(path.resolve('./build','index.html'))
})

app.listen(8080,  ()=> {
    p.magenta(`server is alive  ✨ ⚡ http://${host}:${port}/airbnb ✨ ⚡`)
});
