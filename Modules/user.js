const events=require('events');
//inherit the class
module.exports=class extends events.EventEmitter{
    //constructor of the base class.to call constructor if the base class
    constructor(){
        super();
    }
}