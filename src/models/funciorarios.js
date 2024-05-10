const mongoose = require('mongoose')


// Estrutura da coleção 

const schema = new mongoose.Schema({

nome: {
type: String,
required : true
},

dataNascimento: {
    type: String,
    required : true
},

email: {
    type: String,
    required: true,
    lowercase: true,
    trin: true,
    unique: true

},

    cargo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'cargo',
    required: false
        }

    },
    {
    timestamps: true
    }
    
)

const Funcionario = mongoose.model('funcioario', schema)
module.exports = Funcionario