const express = require ('express')
const router = express.Router()

const CargoController = require('../controllers/CargoControllers')

const FuncionarioController = require('../controllers/funcionarioController')

const DepartamentoController= require('../controllers/DepartamentoControllers')


// validadores
const {validarId} = require('../validators/IdValidator')
const {cargoValidador} = require('../validators/CargoValidator') // CTRL espaço dentro do '{}' mostra o objeto correto
const {departamentoValidador} = require('../validators/DepartamentoValidator')


// Cargos
router.post('/cargos', cargoValidador, CargoController.create) 
router.get('/cargos', CargoController.getAll) 
router.get('/cargos/:id', validarId, CargoController.getById) 
router.put('/cargos/:id', CargoController.update) 
router.delete('/cargos/:id', CargoController.remove) 

// Funcionarios
router.post('/funcionarios', FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', FuncionarioController.update)
router.delete('/funcionarios/:id', FuncionarioController.remove)


// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id',validarId, DepartamentoController.getById)
router.put('/departamentos/:id', DepartamentoController.update)
router.delete('/departamento/:id', DepartamentoController.remove)







module.exports = router