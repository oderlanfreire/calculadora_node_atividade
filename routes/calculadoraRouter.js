const calculadoraController = require('../controllers/calculadora/calculadoraController')
const express = require('express')


const router  = express.Router()


router.get('/calculadora', calculadoraController.calcular)



module.exports = router