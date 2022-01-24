

function Test(name){
    this.name=name;
}

let obj1=new Test('alex');
obj1.__proto__.sayHello=function () {
    console.log(`hello ${this.name}`)
}

//let protoObj1=Object.getPrototypeOf(obj1);
    Object.getPrototypeOf(obj1).sayName=function (){
    console.log(`say name ${this.name}`)};
console.dir(obj1)
class TestClass {
    constructor(name) {
    this.name=name;
    }
    sayName(){
        console.log(this.name);
    }
}

let objClass1=new TestClass('alex');
console.log(objClass1)
objClass1.sayName();//?
Object.getPrototypeOf(objClass1).sayGoodBye=function () {
    console.log(`goodbye ${this.name} `)
}
TestClass.prototype.newFun=function () {

}
 delete obj1.name;
console.log(obj1);

