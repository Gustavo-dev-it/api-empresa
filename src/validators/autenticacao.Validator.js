require('dotenv').config()
const yup = require('yup')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWTSECRET

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser uma texto')
        .email('e-mail inválido')
        .required('campo obrigatório'),
    senha: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
})

function usuarioValidador(req, res, next) {
    usuarioSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}


const loginSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser uma texto')
        .email('e-mail inválido')
        .required('campo obrigatório'),
    senha: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
})

function loginValidador(req, res, next) {
    usuarioSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}



async function checarToken(req, res, next){
   
   try{
    const authorizationHeader = req.get('Authorization')
    const separator =  authorizationHeader.split(' ') // divide com um espaço em branco
    const token = separator[1]

    jwt.verify(token, JWT_SECRET)
    
   }
   catch (error){
    return res.status(401).json({mensagem: "token invalido"})
   }
}


module.exports = {
    usuarioValidador,
    loginValidador,
    checarToken
}