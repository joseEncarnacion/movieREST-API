const express = require('express')
const cors = require('cors')
const app = express();


// setting
app.set('port', process.env.PORT || 4001);

// middlewere
app.use(cors())
app.use(express.json())

// routes
app.use('/api/movies', require('./routes/movieRoute'))


module.exports = app