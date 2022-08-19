let fs = require('fs');

fs.unlink('file 1.txt', function(err){
    if(err) console.log(err);
    else console.log('Deleted file successfully');
})

fs.mkdir("folder", function(err){
    if(err) console.log(err);
    else console.log('Created folder successfully');
})