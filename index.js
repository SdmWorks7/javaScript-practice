
const fs = require("fs");

// this func is called after line 11 finishes reading the file
function print(err, data){
    console.log(data);
}

fs.readFile("file.txt", "utf-8", print); //asynchronous

const content=fs.readFileSync("file.txt","utf-8"); //synchronous
console.log(content);
