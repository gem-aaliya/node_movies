const fs=require('fs');
const path=require('path');

// Create folder
//by default they are asynchronous
// fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
//     if(err) throw err;
//     console.log('Folder created...');
// })

//Create and write to file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!',err=>{
    if(err) throw err;
    console.log('Folder created..')
})
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'I love node.js!',err=>{
    if(err) throw err;
    console.log('Folder created..')
})
//fs.appendFile for adding the data

//Read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

//Rename File
//fs.rename