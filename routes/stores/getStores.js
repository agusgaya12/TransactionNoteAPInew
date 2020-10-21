const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')


app.get('/stores', function (req, res) {
    console.log(req.headers);
    res.send(db.get('stores', req.query))
})

module.exports = app