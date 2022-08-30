const http = require('http'); // build-in module
const fs = require('fs'); // file system: build-in module
const port = 8080;

const myReadableStr = fs.createReadStream('test.txt', 'utf-8');

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    myReadableStr.pipe(res);
})

server.listen(port, function(){
    console.log('Server is running at port ', port);
});