const express = require('express')
const app = express()
const port = 1400

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/clientes', (req, res) => {
    res.sendFile('./static/clientes.html', {
        root: __dirname
    })
})

app.get('/productos', (req, res) => {
    res.sendFile('./static/productos.html', {
        root: __dirname
    })
})

app.listen(port, () => {
    console.log(`Ejecutando en puerto ${port}`)
})