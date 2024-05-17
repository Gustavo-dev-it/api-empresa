const Funcionario = require('../models/funciorarios')

//metodos 


async function create(req, res) {

    const funcionario = new Funcionario(req.body)
    const funcionarioCriado = await funcionario.save()
    res.status(201).json(funcionarioCriado)

}

async function getAll(req, res) {
    res.json(await Funcionario.find())
}


async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id)
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "funcionario não encontrado" })
    }

}


async function update(req, res) {

    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body)
    if (funcionarioAtualizado) {
        res.status(200).json(atualizarFuncionario)
    }

    else {
        res.status(404).json({ mensagem: "Funcionario não encontrado" })

    }

}

async function remove(req, res) {
    await Funcionario.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Funcionario excluido com sucesso!" })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}