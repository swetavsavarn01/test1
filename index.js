const app = require('express')()

app.get('/', ((req, res) => {
    res.status(200).json({ "message": "ok1" })
}))
app.listen('5001')