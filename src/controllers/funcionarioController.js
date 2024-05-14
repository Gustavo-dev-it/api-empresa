const Funcionario = require('../models/funciorarios')




async function getAll(req, res) {
    const funcionario = await Funcionario.find()
    res.json(funcionario)
}






async function create(req, res) {

    try {
        const funcionario = new Funcionario(req.body)
        const funciocarioCriado = await funcionario.save()
        res.status(201).json(funciocarioCriado)
    } catch (error) {

        console.error("Erro ao criar funcionario", error)
        res.status(400).json(

            {
                mensagem: "Ocorreu um erro ao cadastrar o funcionario",
                erro: error.message

            }
        )
    }

}

async function getById(req, res) {
    const funcioario = await Funcionario.findById(req.params.id).populate('cargo')
    if (funcioario) {
        res.json(funcioario)
    } else {
        res.status(404).json({ mensagem: "funcionario não encontrado" })
    }

}

async function update(req, res) {
    try {
        const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body)
        res.json(funcionarioAtualizado)
    } catch (error) {
        console.error("Erro ao criar funcionario:", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar funcionario",
            erro: error.mensagem
        })

    }
}

async function remove(req, res) {
    await Funcionario.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Funcionario excluido com sucesso!" })
}











module.exports = {
    create,
    getById,
    remove,
    update,
    getAll

}