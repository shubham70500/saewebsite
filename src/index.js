const cors = require('cors')
const express = require('express')
const app = new express()
const path = require('path')
require('dotenv').config()
require(path.join(__dirname, './database/config'))
const messagesroute = require(path.join(__dirname, './routes/messages'))
const blogroute = require(path.join(__dirname, './routes/blog'))
const alumniroute = require(path.join(__dirname, './routes/alumni'))
app.use(express.static(path.join(__dirname,'../client/build/')))
    .use('/api', messagesroute)
    .use('/api', blogroute)
    .use('/api', alumniroute)
    .use(express.json())
    .use(cors())
    .get('*', (req, res) =>
        res
            .status(200)
            .sendFile('index.html')
    )
    .listen(5005)