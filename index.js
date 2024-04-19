/* 19/04/2024           FATEC SCS
   Enzo Dorta Stevanato de Brito
   Prof° Ronny - Tec. Avan. PWM
   Projeto: node proj_git*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // serviço que ficara escutadando uma tela que vc definira, ao receber uma requisição ele executara

app.use(bodyParser.json()); // estilo middle air- vaia definir como sera a foramatação da infomração (return)

var aluno = {
    nome: "Enzo",
    idade: 18,
    nota:10,
    curso: "Analise de Desenvolvimento de Sistema"
}

app.get("/", (req,res)=>{
    res.send(aluno);
}) // o caminho padrão é / , depois tem o request (ele passou um login, passou um codigo)e response (so passa o valor não verifica nada)

app.post("/", (req,res) =>{
    console.log(req.body);
    res.send("ok") // para não travar para erro 404
})


app.listen(8000,()=>{
console.log("Servidor rodando a porta 8000");
} ) // http o padrão é a porta 80, se tiver portas colididam pode parar a produção e nao podem ter dois serviços na porta

