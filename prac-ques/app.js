const fs = require("fs");
const {Command} = require('commander');
const program = new Command();

program
    .name("counter")
    .description("CLI to do file based task")
    .version("1.0.0");

program.command("count")
    .description("to count the number of lines in the file")
    .arguement('<file>', 'file to count')
    .action((file)=>{
        fs.readFile(file, 'utf8', (error, data)=>{
            if(error){
                console.log(error.message);
            }else{
                const lines = data.split('\n').length;
                console.log(`the lines : ${lines}`);
            }
        })
    })