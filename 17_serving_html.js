
const http = require('http');
const fs = require('fs');

const myReadStr = fs.createReadStream("index.html", "utf-8");

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    myReadStr.pipe(res);
});

server.listen(8080, function(){
    console.log("Server is running at port: 8080");
});