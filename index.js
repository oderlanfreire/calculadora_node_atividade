const express = require('express')
const calculadoraRouter = require('./routes/calculadoraRouter')

const server = express()
server.use(express.static('public'))


//rotas
server.use('/', calculadoraRouter)

server.listen(3000, ()=>{
    console.log('Pagina inicial')
})