//bring in my packages
const express = require('express')
const cors = require('cors')

//initialize my app with express
const app = express()

//middleware
//parses data 
app.use(express.json())
app.use(cors())

//bring in handler functions from the controller file
const { addSong,getSongs,updateSong,deleteSong} = require('./controller')

//endpoints
app.get('/api/song',getSongs)
app.post('/api/song',addSong)
app.put('/api/song/:id',updateSong)
app.delete('/api/song/:id',deleteSong)

//listen method that will keep the server the running
app.listen(4444,() => console.log(`server listening on 4444`))