const fs = require('fs');

const myReadStr = fs.createReadStream("test.txt", 'utf-8')
const myWriteStr = fs.createWriteStream("new.txt")

myReadStr.on("data", function(chunk){
    myWriteStr.write(chunk)
})