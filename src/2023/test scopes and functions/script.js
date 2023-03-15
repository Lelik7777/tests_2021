//"use strict"

function foo() {
    console.log(this);
}

//foo();
foo.call(null);


//const foo2 = bar();
const number = 2;

function bar() {
    return number;
}

var name = 'John';
var user = {
    name: 'Peter',
    printMessage() {
        console.log(`hello,${this.name}!`);
    }
};
var printMessage = user.printMessage;
//printMessage();

function sum(a,b,c) {
    console.log(arguments);
    return a,b,c;
}
sum(1,3,4);

function getThis() {
    return this;
}

console.log(getThis());
for (let i = 0; i <3 ; i++) {
    setTimeout(function () {
        console.log(i);
    },1000);
}
const details={
    message:'hello',
}
function getMessage() {
    return this.message;
}

console.log(getMessage.call(details));
let name1='John';
function getName() {
    console.log(name);
}
setTimeout(()=>{
    let namae1='Peter';
    getName();
},1000);
