const Cargo = require('../models/Cargo')

//metodos 

async function getAll(req, res) {
    const cargo = await Cargo.find()
    res.json(cargo)
}

async function create(req, res) {

        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        res.status(201).json(cargoCriado)
    
}

async function getAll(req, res) {
    res.json(await Cargo.find())
}


async function getById(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrado" })
    }

}


async function update(req, res) {
   
        const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        if(cargoAtualizado){
            res.status(200).json(atualizarCargo)
        } 
        
        else {
            res.status(404).json({mensagem: "Cargo não encontrado"})

        }
    
}

async function remove(req, res) {
    await Cargo.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Cargo excluido com sucesso!" })
}











module.exports = {
    getAll,
    create,
    getById,
    update,
    remove

}