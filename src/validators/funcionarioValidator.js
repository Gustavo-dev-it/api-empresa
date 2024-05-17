 //Comando para inicializar a biblioteca chamada yup
 const yup = require('yup')

 //Estrutura
 
 const Schema = yup.object().shape({
 
     nome: yup
         .string('campo precisa ser um texto')
         .required('campo obrigatorio'),
 
     cpf: yup
     .string('campo precisa ser um texto')
     .required('campo obrigatorio'),

     email: yup
     .string('campo precisa ser um texto')
     .email('email invalido')
     .required('campo obrigatorio'),

     telefone: yup
     .string('campo precisa ser um texto')
     .required('campo obrigatorio'),

     dataContratacao: yup
     .date('Data invalida')
     .required('campo obrigatorio'),

     dataNascimento: yup
     .date('Data invalida')
     .required('campo obrigatorio'),


     genero: yup
     .string('campo precisa ser um texto')
     .required('campo obrigatorio'),


     cargo: yup
     .string('campo precisa ser um texto'),
    

     departamento: yup
     .string('campo precisa ser um texto')
     
     

 
 })
 
 
  // Middelewares intermediarios de validação
 
 function funcionarioValidador(req, res, next) {
 
     Schema
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
     funcionarioValidador
 }