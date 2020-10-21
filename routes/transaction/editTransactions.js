const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../../middleware/authenticationMiddleware')

app.use(authentication)

app.patch("/transactions", function (req, res) {
    const body = req.body
    let id = req.query.id
    const getQuery = db.get('transactions', id, body)

    if (getQuery) {
        res.send(db.edit('transactions', body))
    } else {
        res.status(404).send("Not found")
    }
    return
})

module.exports = app