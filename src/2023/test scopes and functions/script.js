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

function sum(a, b, c) {
    console.log(arguments);
    return a, b, c;
}

sum(1, 3, 4);

function getThis() {
    return this;
}

console.log(getThis());
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
const details = {
    message: 'hello',
}

function getMessage() {
    return this.message;
}

console.log(getMessage.call(details));
let name1 = 'John';

function getName() {
    console.log(name);
}

setTimeout(() => {
    let namae1 = 'Peter';
    getName();
}, 1000);

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
function nthFibo(n) {
    return n === 1 ? 0 : n === 2 ? 1 : nthFibo(n - 2) + nthFibo(n - 1);
}

console.log(nthFibo(7));
const trans = (string) => {
    return [...string.toLowerCase()].map((x, i, arr) => {

        if (arr.filter(x => arr[i] === x).length > 1) {
            return ')';
        } else {
            return '(';
        }
    }).join('');
}
//")())())"

const duplicateEncode = (word) => [...word.toLowerCase()].map((char, i, arr) => arr.filter(el => arr[i]===el).length > 1 ? ')' : '(').join('');
console.log(duplicateEncode("Success"));
console.log('HeLlo'.replace(/[A-Z]/g, ''));
console.log([...'Hello'.replace(/[A-Z]/g, '')].filter(z => z !== ''))
console.log(new Date(2))
console.log(3.145e7);