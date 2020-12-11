// importar dependências
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

const server = express()                                   // iniciando o 'express'
server.use(express.static('public'))                     // usando arquivos estáticos

server.use(express.urlencoded({ extended: true }))        // utilizando corpo da requisição

// Configurando caminhos
server
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)                      // Ouvir server na porta 5500