require('dotenv').config()
const path = require('path')
const p = require( './src/utils/color_logger')(path.basename(__filename))

const express = require('express')
const db = require('./server/db/mongoose.connection')
const morgan = require('morgan')
// routes
const cities = require('./server/routes/cities.router');
const rooms = require('./server/routes/rooms.router');
const homes = require('./server/routes/homes.router');
const posts = require('./server/routes/posts.router');

const app = express()
const { NODE_ENV, API_PORT, API_HOST } = process.env;

//connect to mongo db
db.connect();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.resolve('./build')))

  
// cities
app.use( '/api/cities', cities )
// rooms
app.use( '/api/rooms', rooms )
// homes
app.use( '/api/homes', homes )
// posts
app.use( '/api/posts', posts )


// central error handling
app.use( (err, req, res, next) => {
    p.error(err)
    if(NODE_ENV === 'production')
        res.status(500).json({error:'internal server error'})
    else
        res.status(500).json({error:err.message,stack:err.stack})
  })


//when no routes were matched...
app.get('*',  (req, res) => {
    res.status(200).sendFile(path.resolve('./build','index.html'))
})


//start the express api server
app.listen(API_PORT,API_HOST, (error) => {
    if(error) p.error(error)
    else p.magenta(`express api is live  ✨ ⚡ http://${API_HOST}:${API_PORT} ✨ ⚡`)
});