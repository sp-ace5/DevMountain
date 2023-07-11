const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())



const {getMovies, addMovies} = require('./controller.js')


app.get('/api/movies', getMovies)

app.post('/api/movies', addMovies)

app.listen(4004, function() {
    console.log("Server is running on port " + 4004);
});


