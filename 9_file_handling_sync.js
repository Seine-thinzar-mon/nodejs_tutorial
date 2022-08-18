const fs = require('fs')

// write file - two arguments (filename, data) [replace (all) old data]
fs.writeFileSync("file 1.txt", "One");

// read file - two arguments (filename, encoding)
const data = fs.readFileSync("file 1.txt", 'utf-8');

fs.writeFileSync("file 2.txt", data)

// append data - two arguments (filename, data) [concat to old data]
fs.appendFileSync("file 2.txt", " Two")