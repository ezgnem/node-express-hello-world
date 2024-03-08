const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/tony', (req, res) => {
    res.send('Hello Tony!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})