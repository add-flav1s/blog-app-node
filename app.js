// ----- Carregando modulos ----- //

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const admin = require('./routes/admin');


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

app.use('/admin', admin);

// ----- Outros ----- //

const PORT = 8082
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})