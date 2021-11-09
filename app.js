// ----- Carregando modulos ----- //

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
// const mongoose = require('mongoose');


// ----- Configuracoes ----- //


// ----- Rotas ----- //


// ----- Outros ----- //

const PORT = 8082
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})