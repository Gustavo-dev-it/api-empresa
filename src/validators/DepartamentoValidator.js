 //Comando para inicializar a biblioteca chamada yup
const yup = require('yup')

//Estrutura

const departamentoSchema = yup.object().shape({

    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),

    descricao: yup.string()


})


 // Middelewares intermediarios de validação

function departamentoValidador(req, res, next) {

    departamentoSchema
        .validate(req.body, { abortEarly: false }) // abortEarly: false, evita que devolva a reposta no primeiro erro
        .then(() => next())
        .catch(err => {

           const errors = err.inner.map(e => {

               const erro = {

                    campo: e.path,
                    erros: e.errors
                }




            })


        }) 

}


module.exports = {
    departamentoValidador
}