// const person={
//     name:'aaliya',
//     age:22
// }

//module wrapper function
// (function (exports,require,module,__filename,__dirname){})
 class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greeting(){
        console.log(`name is ${this.name} and age is ${this.age}`)
    }
 }
module.exports=Person