const http = require('http'); //build-in module in node.js
const port = 8080;

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    // res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello World!")
})

server.listen(port, function(){
    console.log("Server is running at Port:", port)
})