const Departamento = require('../models/Departamento')

//metodos

async function getAll(req, res){
const departamento = await Departamento.find()
res.json(departamento)
}

async function create(req, res){
    const departamento = new Departamento(req.body)
    const departamentoCriado = await departamento.save()
    res.status(201).json(departamentoCriado)
}

async function getById(req, res){
    const departamento = await Departamento.findById(req.params.id)
    if(departamento){
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado"})
    }
}


async function update(req, res){
    
    const departamentoAtualizado = await Departamento.findByAndUpdate(req.params.id, req.body)
    if(departamentoAtualizado){
        res.status(200).json(atualizarDepartamento)
    } 

    else {
        res.status(404).json({ mensagem: "Departamento não encontrado"})

    }
}


async function remove(req, res){
    await Departamento.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Departamento excluido com sucesso"})
}


module.exports = {

    getAll,
    create,
    getById,
    update,
    remove
}

