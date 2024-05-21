const Projeto = require('../models/projeto')

//metodos 



async function create(req, res) {

    const projeto = new Projeto(req.body)
    const projetoCriado = await projeto.save()
    res.status(201).json(projetoCriado)

}

async function getAll(req, res) {
    const projeto = await Projeto.find()
    res.json(projeto)
}


async function getById(req, res) {
    const projeto = await Projeto.findById(req.params.id)
    if (projeto) {
        res.json(projeto)
    } else {
        res.status(404).json({
            mensagem: "projeto não encontrado"
        })
    }

}


async function update(req, res) {

    const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body)
    if (projetoAtualizado) {
        res.status(200).json(atualizarProjeto)
    }

    else {
        res.status(404).json({
            mensagem: "projeto não encontrado"
        })

    }

}

async function remove(req, res) {
    await Projeto.findByIdAndDelete(req.params.id)
    res.json({
        mensagem: "projeto excluido com sucesso!"
    })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}