const htpp = require('http');

const server = http.createServer();

const httpRequestListener = function (request, response) { // (3)
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Hello World!" }));
  };