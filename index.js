const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); // Serve todos os arquivos na pasta Cliente APP

// Rota para exibir o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para processar o formulário
app.post('/cadastro', (req, res) => {
    const { nome, email, telefone } = req.body;

    // Exibe os dados recebidos no console
    console.log(`Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`);

    // Envia uma resposta simples ao cliente
    res.send('<h1>Cadastro realizado com sucesso!</h1><a href="/">Voltar</a>');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
