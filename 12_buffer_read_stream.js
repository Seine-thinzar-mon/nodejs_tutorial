const fs = require("fs")

// fs.createReadStream(fileName, file extension(optional))
const myReadableStr = fs.createReadStream('test.txt', 'utf-8') // <== automatically create Event emitter with eventName called "data"

myReadableStr.on("data", function(chunk){
    console.log('I got buffer chunk.')
    console.log(chunk)
})

// with no file extension
// I got buffer chunk.
// <Buffer 48 65 79 2c 20 59 6f 75 20 61 72 65 2e 20 48 65 79 20 49 20 61 6d 2e 20 48 65 79 2c 20 59 6f 75 20 61 72 65 2e 20 48 65 79 20 49 20 61 6d 2e 20 48 65 ... 65486 more bytes>
// I got buffer chunk.
// <Buffer 20 48 65 79 20 49 20 61 6d 2e 20 48 65 79 2c 20 59 6f 75 20 61 72 65 2e 20 48 65 79 20 49 20 61 6d 2e 0d 0a 48 65 79 2c 20 59 6f 75 20 61 72 65 2e 20 ... 65486 more bytes>
// I got buffer chunk.
// <Buffer 65 79 2c 20 59 6f 75 20 61 72 65 2e 20 48 65 79 20 49 20 61 6d 2e 20 48 65 79 2c 20 59 6f 75 20 61 72 65 2e 20 48 65 79 20 49 20 61 6d 2e 20 48 65 79 ... 65301 more bytes>

// with file extension utf-8
// I got buffer chunk.
// ey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// I got buffer chunk.
// You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.
// Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am. Hey, You are. Hey I am.