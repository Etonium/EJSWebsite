const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.send('Hello welcome to this site!')
})
app.get('/time', (req, res,) => {
    return res.send(new Date().toString())
})

app.listen(3000)