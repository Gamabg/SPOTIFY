import cors from 'cors';
import express from 'express';
import conectDb from './db.js';

const app = express();
app.use(cors());
// const conexao = await conectDb()

// conexao.on('error', (erro) => {
//     console.error('Erro ao conectar', erro)
// })

// conexao.once('open', () => {
//     console.log('Conectado no MongoDB')
// })

const usuarios = [
    {id: 1, nome: "Gama"},
    {id: 2, nome: "Garro"}
]

app.get("/corinthia", (req,res) => {
    res.json(usuarios)
})


app.listen(3000, () => {
    console.log('Servidor rodando')
})