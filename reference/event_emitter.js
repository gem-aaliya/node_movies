// const EventEmitter=require('events');

// //Create class
// class MyEmitter extends EventEmitter{}

// //Init object
// const myEmitter=new MyEmitter();

// //Event listener
// myEmitter.on('event',()=>console.log(
//     'Event fired'
// ))
// //Init event
// myEmitter.emit('event')


const events=require('events');
const user=require('../Modules/user');
const { Stream } = require('stream');
// let myEmitter=new events.EventEmitter();
//instance of event emitter class.
let myEmitter=new user();
//callback functions are executed in the order in which they are written
//first listen and then emit 
myEmitter.on('userCreated',(id,name)=>{
    console.log('a new user is created')
})//listening to the event

myEmitter.emit('userCreated',101,'john')//emit an event

//Stream

//source file->Read Buffer->fs.readfile_>fs.writeFile->writeBuffer->destination file
// content is read at once in read buffer and then it is stored in data 
//using write file method it writes all data in the buffer at once and then it is written in the destination

//once the content is read then only it is available in memory and for use.

//with streams we can process the data piece by piece

//source file->read stream->read buffer->fs.readStream
//we are reading a chunk and storing it in the memory and freeing the data
//ex youtube and netflix we can see the video before the whole gets downloaded

// types of Stream
// 1.readable Stream
// ex:request Stream
// read file Stream
//readable stream events
// data &end

// readable methods
// read&pipe
// instances of event emitter class

// 2.Writable Stream
// response Stream
// write file stream
//events-drain and finish
//methods-end

// 3.Duplex Stream
// combination of readable and write stream
//web sockets as it is chat apps
// 4.Transform Stream
//same as duplex which can also modify or transform data as it is read or written
//ex:zlib