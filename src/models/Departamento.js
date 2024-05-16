const mongoose = require('mongoose')


// Estrutura da coleção

const Schema = new mongoose.Schema({

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