const express = require('express');
const app = express();

app.use(express.urlencoded(
    {
        extended: true
    }
));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário');
})

// o interrogação serve para dizer que o paramentro da rota pode ou não ser recebido.
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
})
 
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
});