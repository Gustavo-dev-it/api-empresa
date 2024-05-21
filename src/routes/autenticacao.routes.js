const express = require('express')
const router = express.Router()

const AutenticacaoController = require('../controllers/autenticacaoController')

const { usuarioValidador } = require('../validators/AutenticacaoValidator')

// Criar rota
router.post('/auth/registro', usuarioValidador, AutenticacaoController.registrar)

router.post('/auth/login', usuarioValidador, AutenticacaoController.login)








module.exports = router