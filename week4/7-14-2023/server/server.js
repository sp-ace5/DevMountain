//Bring in packages
const express = require('express')
const cors = require('cors')

//Initialize my app with express
const app = express()

//Middleware
//Parses Data
app.use(express.json())
app.use(cors())

//Bring in handler functions from the controller file
const {addSong, getSongs, updateSong, deleteSong} = require('./controller')

//Endpoints
app.get('/api/songs', getSongs)
app.post('/api/songs', addSong)
app.put('/api/songs/:id', updateSong)
app.delete('/api/songs/:id', deleteSong)

//Listen method to have the server up and running
app.listen(4444,() => console.log('Server listening on 4444'))

