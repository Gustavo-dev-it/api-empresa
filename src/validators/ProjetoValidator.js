// Comando para inicializar a biblioteca chamada yup
const yup = require('yup')

//Estrutura
const projetoSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),

    descricao: yup
        .string(),

    dataInicio: yup
        .date('Data inválida')
        .required('campo obrigatorio'),

        dataFim: yup
        .date('Data inválida')
        .required('campo obrigatorio')




})

// Middlewares intermediarios de validação 

function projetoValidador(req, res, next) {
    projetoSchema
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
    projetoValidador
}