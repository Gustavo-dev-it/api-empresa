const mongoose = require('mongoose')
const { date } = require('yup')


// Estrutura da coleção 

const schema = new mongoose.Schema({

nome: {
type: String,
required : true
},
cpf:{
type: String,
required: true
},
email:{
    type : String,
    required: true
},
dataContratacao:{
    type: String,
    required: true
},

genero:{
    type: String,
    required: true

},

telefone:{
    type: String,
    required: true
},

endereco:{
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    UF: String,
    numero: String,
},

dataNascimento: {
    type: String,
    required : true
},


    cargo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'cargo',
    required: false
        },
    
        departamento:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'departamento',
            required: false
        },







    },
    {
    timestamps: true
    }
    
)

const Funcionario = mongoose.model('funcioario', schema)
module.exports = Funcionario