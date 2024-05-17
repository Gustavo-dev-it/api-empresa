const mongoose = require('mongoose')


// Estrutura da coleção

const schema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: false
    },

},
    {
        timestamps: true
    }



)
const Departamento = mongoose.model('departamento', schema)
module.exports = Departamento