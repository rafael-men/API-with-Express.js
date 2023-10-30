const port = 3003

const express = require('express') 
const bancodedados = require('./database')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))


app.get('/produtos',(req,res,next)=> {
    res.send(bancodedados.getProdutos())
    res.send({
        Nome:"Computador",
        Preço:"4000",
        System:"Linux"
    })
})


app.get('/produtos/:id',(rq,res,next) => {
    res.send(bancodedados.getProd(req.params.id))
})


app.post('/produtos', (req,res,next) => {
    const produto = bancodedados.saveproducts({
        nome: req.body.nome,
        preço:req.body.preço
    })
    res.send(produto) // converte para JSON
})



app.listen(port, () =>{
    console.info(`Servidor executando na porta ${port}`)
})

