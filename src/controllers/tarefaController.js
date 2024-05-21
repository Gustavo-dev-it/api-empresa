const Tarefa = require('../models/tareja')

//metodos 



async function create(req, res) {

    const tarefa = new Tarefa(req.body)
    const tarefaCriada = await Tarefa.save()
    res.status(201).json(tarefaCriada)

}

async function getAll(req, res) {
    const tarefa = await Tarefa.find()
    res.json(Tarefa)
}


async function getById(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)
    if (Tarefa) {
        res.json(Tarefa)
    } else {
        res.status(404).json({
            mensagem: "Tarefa não encontrado"
        })
    }

}


async function update(req, res) {

    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body)
    if (tarefaAtualizada) {
        res.status(200).json(atualizarTarefa)
    }

    else {
        res.status(404).json({
            mensagem: "Tarefa não encontrada"
        })

    }

}

async function remove(req, res) {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json({
        mensagem: "Tarefa excluida com sucesso!"
    })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}