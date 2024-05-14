const express = require ('express')
const router = express.Router()

const CargoController = require('../controllers/CargoControllers')

const FuncionarioController = require('../controllers/funcionarioController')


// validadores
const {validarId} = require('../validators/IdValidator')
const {cargoValidador} = require('../validators/CargoValidator') // CTRL espaço dentro do '{}' mostra o objeto correto
  


// Cargos
router.post('/cargos', cargoValidador, CargoController.create) 
router.get('/cargos', CargoController.getAll) 
router.get('/cargos/:id', validarId, CargoController.getById) 
router.put('/cargos/:id', CargoController.update) 
router.delete('/cargos/:id', CargoController.remove) 

// Funcionarios
router.post('/funcionarios', FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', FuncionarioController.getById)
router.put('/funcionarios/:id', FuncionarioController.update)
router.delete('/funcionarios/:id', FuncionarioController.remove)









module.exports = router