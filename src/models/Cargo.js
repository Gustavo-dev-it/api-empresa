const mongoose = require('mongoose')


// Estrutura da coleção 

const schema = new mongoose.Schema({
nome: {
type: String,
required : true
}
},
    {
    timestamps: true
    }
    
)

const Cargo = mongoose.model('cargo', schema)
module.exports = Cargo