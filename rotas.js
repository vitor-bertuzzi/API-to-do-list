const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req, res) => {
    
        if (req.url === '/'){
            res.end('Home');
        }else if(req.url === '/api'){
            res.end(JSON.stringify({mensagem: 'API funcionado'}));
        }else{
            try{
        const data = await fs.readFile('dados.json', 'utf-8');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
        }   catch(erro){
        res.writeHead(500);
        res.end('Erro ao ler arquivo');
        }
            res.statusCode = 404;
            res.end("Rota não encontrada");
        }
    
});

server.listen(3000);