const http = require('http');

//Importa as rotas
const taskRoutes = require('./routes/tasks');

//Cria servidor
const server = http.createServer((req, res) => {

    //Deine cabeçalho JSON
    res.setHeader('Content-Type', 'application/json');

    // Chama o roteador
    taskRoutes(req, res);
});

//Porta
const PORT = 3000;

//Inicia servidor
server.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:${PORT}');
});
