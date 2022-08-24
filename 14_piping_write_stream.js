const fs = require('fs')

const myReadableStr = fs.createReadStream("test.txt", "utf-8");
const myWriteStr = fs.createWriteStream("new1.txt")

// piping is faster than buffer stream
myReadableStr.pipe(myWriteStr)