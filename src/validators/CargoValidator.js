// Comando para inicializar a biblioteca chamada yup
const yup = require('yup')

//Estrutura
const cargoSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),

    descricao: yup
        .string(),

    salario: yup
        .number('campo precisa ser um numero')
        .min(1412, 'precisa ser maior que um salario minimo')
        .required('campo obrigatorio')


})

// Middlewares intermediarios de validação 

function cargoValidador(req, res, next) {
    cargoSchema
        .validate(req.body, { abortEarly: false }) // abortEarly : false, evita que devolva a reposta no primeiro erro
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {

                    campo: e.path,
                    erros: e.errors
                }
                return erro

            })

            res.status(400).json(err)

        })

}









module.exports = {
    cargoValidador
}