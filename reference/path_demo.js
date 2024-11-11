const path=require('path');

//Base file name
console.log(path.basename(__filename))//gives the file name

//directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename).base);

//Concatenate paths
//want to do ../test/hello
console.log(path.join(__dirname,'test','hello.html'));

