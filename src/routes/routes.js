const express = require ('express')
const router = express.Router()

const CargoController = require('../controllers/CargoControllers')

const FuncionarioController = require('../controllers/funcionarioController')

const DepartamentoController = require('../controllers/DepartamentoControllers')

const ProjetoController = require('../controllers/projetoControllers')

const TarefaController = require ('../controllers/tarefaController')

// validadores
const {validarId} = require('../validators/IdValidator')
const {cargoValidador} = require('../validators/CargoValidator') // CTRL espaço dentro do '{}' mostra o objeto correto
const {departamentoValidador} = require('../validators/DepartamentoValidator')
const {funcionarioValidador} = require('../validators/funcionarioValidator')
const {projetoValidador} = require('../validators/ProjetoValidator')
const {tarefaValidador} = require('../validators/tarefaValidator')




// Cargos
router.post('/cargos', cargoValidador, CargoController.create) 
router.get('/cargos', CargoController.getAll) 
router.get('/cargos/:id', validarId, CargoController.getById) 
router.put('/cargos/:id', validarId, CargoController.update) 
router.delete('/cargos/:id', validarId, CargoController.remove) 

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

// Projetos

router.post('/projetos', ProjetoController.create) 
router.get('/projetos', ProjetoController.getAll) 
router.get('/projetos/:id', validarId, ProjetoController.getById) 
router.put('/projetos/:id', validarId, ProjetoController.update) 
router.delete('/projetos/:id', validarId, ProjetoController.remove) 


// Tarefas

router.post('/projetos', TarefaController.create) 
router.get('/projetos', TarefaController.getAll) 
router.get('/projetos/:id', validarId, TarefaController.getById) 
router.put('/projetos/:id', validarId, TarefaController.update) 
router.delete('/projetos/:id', validarId, TarefaController.remove) 







module.exports = router