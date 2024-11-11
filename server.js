// const http = require('http');
// const fs = require('fs');
// const url=require('url');

// const html = fs.readFileSync('./index.html', 'utf-8')
// const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
// //data in html is hardcoded so now mapping it with products.json
// const prodHtml = fs.readFileSync('./product.html', 'utf-8')

// let productList = products.map((prod) => {
//     let output = prodHtml.replace('{{%id%}}', prod.id);
//     output = output.replace('{{%age%}}', prod.age);
//     output = output.replace('{{%color%}}', prod.color);
//     output = output.replace('{{%id%}}', prod.id);
//     return output
// })
// //1.create server
// const server = http.createServer((request, response) => {
//     let {query,pathname:path}=url.parse(request.url,true)//optional boolean value as second parameter which tells whether to parse query string or not
//     // console.log(x)
//     // let path = request.url;
//     // if (path === '/' || path.toLowerCase === '/home') {
//     //     response.writeHead(200);//set the status code.
//     //     response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     // }
//     // else if ( path.toLowerCase === '/about') {
//     //     response.writeHead(200);
//     //     response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     // }
//     // else if (path.toLowerCase === '/contact') {
//     //     response.writeHead(200);
//     //     response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     // }
//     // else  {
//     //     response.writeHead(404);
//     //     response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     // }
//     if (path === '/' || path.toLowerCase() === '/home') {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'Custom-Header': 'headers are defined in objects as second parameter'
//         });
//         response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     } else if (path.toLowerCase() === '/about') {
//         response.writeHead(200);
//         response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     } else if (path.toLowerCase() === '/contact') {
//         response.writeHead(200);
//         response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     }
//     else if (path.toLowerCase() === '/products') {
//         response.writeHead(200);
//         //  fs.readFile('./data/products.json','utf-8',(error,data)=>{
//         //     let prod=JSON.parse(data)//converts into javascript object
//         //     response.end(data);
//         //     console.log(prod);
//         //  })
//         response.end(productList.join(','));
//         console.log(productList)
//     }
//     else {
//         response.writeHead(404);
//         response.end(html.replace('{{%Content%}}', path.substring(1, path.length)));
//     }
// })

// //2.listen server
// server.listen(8000, '127.0.0.1', () => {
//     console.log("Server listens")
// })

// // const server=http.createServer();//event emitter

// // server.on('request',(request,response)=>{

// // })//server.on//event listener
// //callback function//event handler

const http=require('http')
const fs=require('fs');
const server=http.createServer();
//using readable and writable stream

// server.on('request',(req,res)=>
// {
//     let rs=fs.createReadStream('./data/products.json')

//     rs.on('data',(chunk)=>{
//         res.write(chunk);//write method id used to write data as chunks
      
//     })

//     //when we have no more data 
//     rs.on('end',()=>{
//         res.end();//to write a single piece of data at once.
//     })
//     rs.on('error',(error)=>{
//         res.end(error);
//     })
// })
//backpressure is when the response is not able to send data as fast as it is recieving.
//like if we are reading data at the speed of 4 mbps and we are writing at the speed of 3mbps
//for that we can use pipe method

server.on('request',(req,res)=>
{
     let rs=fs.createReadStream('./data/products.json')

     rs.pipe(res);

     //pipe method is used with readable stream and not writeable stream
     //only when we have a source from which we can read.
     });