const express = require('express');
const cors = require('cors')
const phones = require('./phones.json')

const app = express();
const PORT = 4000

app.use(cors())

app.get('/phones', (req, res) => {
    res.json(phones)
})

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`)
})