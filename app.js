// ----- Carregando modulos ----- //

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');


// ----- Configuracoes dos modulos ----- //

// Configurando o session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Configurando o flash
app.use(flash());

//Criando um middleware 
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Configurando o express
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Configurando o handlebars
app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultLayouts: 'main',
    layoutsDir: __dirname + "/views/layouts"
}))
app.set('view engine', 'handlebars')

// Configurando o uso do bootstrap
app.use(express.static(path.join(__dirname, 'public')));

//Configurando o mongoose
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