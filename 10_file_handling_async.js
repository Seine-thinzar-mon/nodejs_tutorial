const fs = require("fs")

fs.writeFile("file 3.txt", "Testing ", function(err){
    if(err)
        console.log(err);
    else
        console.log('Successfully written file.')
})

// err will occur if file doesn't exist
fs.readFile("file 3.txt", "utf-8", function(err, result){
    if(err)
        console.log(err);
    else 
        console.log(result);
})

fs.appendFile("file 3.txt", '1 2 3', function(err){
    if(err)
        console.log(err)
    else
        console.log('Successfully appended file.')
})