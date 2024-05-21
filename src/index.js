// npm install jsonwebtoken bcrypt


const express = require('express')
const app = express()
const porta = 3000

const DBConection = require('./database/connection')
//const router = require('./router/router')



//middleware
app.use(express.json())

const router = require ('./routes/routes')
const { checarToken } = require('./validators/autenticacao.Validator')


app.use("/", checarToken, router)






app.listen(porta, ()=> {
    DBConection() //Conexão com o banco de dados
    console.log('Aplicação rodando na porta', porta)
})