const express = require('express');
const cors = require('cors')
const events = require('events')
const http = require('http')
const {Server} = require('socket.io')
const PORT = process.env.PORT || 5000;
const app = express()

const server = http.createServer(app);
const router = require('./router')

app.use(cors({origin: '*'}));
app.use(express.json())
app.use(router)

const io =  new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    }
})

server.listen(PORT, () => console.log('Server has been started'))