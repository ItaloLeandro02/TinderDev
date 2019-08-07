// Função que cria um servidor que recebe solicitações e retorna chamadas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-lvbc1.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);