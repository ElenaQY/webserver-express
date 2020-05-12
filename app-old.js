const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    let salida = {
            nombre: 'Elena',
            edad: 25,
            url: req.url
        }
        //res.write('Hola Mundo');
    res.write(JSON.stringify(salida));
    res.end();
}).listen(3000);