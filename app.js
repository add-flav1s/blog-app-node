// ----- Carregando modulos ----- //

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');


// ----- Configuracoes ----- //

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultLayouts: 'main',
    layoutsDir: __dirname + "/views/layouts"
}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/db_blogapp').then(() => {
    console.log("Conectado ao banco de dados!")
}).catch((err) => {
    console.log("Erro ao conectar: " + err)
})

// ----- Rotas ----- //

app.use('/admin', admin);

// ----- Outros ----- //

const PORT = 8082
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})