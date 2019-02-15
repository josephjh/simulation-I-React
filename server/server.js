require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const massive = require('massive');

const ctrl = require('./controller.js')

const app = express()

app.use(bodyParser.json())

const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    app.listen(4111, () => {
        console.log('Port 4111 Online.')
    })
})


app.get('/api/all', ctrl.getAllMessages)

app.get('/api/message/:id', ctrl.getMessage)

app.delete('/api/message/:id', ctrl.deleteMessage)

app.post('/api/message/', ctrl.newMessage)
