// ----- Carregando modulos ----- //

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
// const mongoose = require('mongoose');


// ----- Configuracoes ----- //

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// ----- Rotas ----- //


// ----- Outros ----- //

const PORT = 8082
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})