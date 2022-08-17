const current_dir = __dirname;
console.log(current_dir); 
// output - C:\Users\Administrator\Desktop\Nga seine\Nodejs_test

const current_file = __filename;
console.log(current_file); 
// output - C:\Users\Administrator\Desktop\Nga seine\Nodejs_test\app.js

const split_fileName = current_file.split("\\");
// console.log(split_fileName) 
// output - ['C:','Users','Administrator','Desktop','Nga seine','Nodejs_test','app.js']

const current_fileName = split_fileName[split_fileName.length - 1];
console.log(current_fileName);
// output - app.js