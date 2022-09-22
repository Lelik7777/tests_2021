console.log('%cdraft02', 'color:green;font-size:16px;margin-left:200px;')
const userAny = {
    head: true,
    legs: true,
    wings: false,
}
const userData = {
    firstName: "Brad",
    lastName: "Traversy",
    age: 38,
    getFullName() {
        console.log('this is ', this);
        return `${this.firstName} ${this.lastName}`;
    },
    'some object': {father: true, name: 'tom', age: 67},
    __proto__: userAny,

    getYearBorn: function () {
        return new Date().getFullYear() - this.age;
    }
}

let fruits = ["Апельсин", "Груша", 'абрикос', "вишня"];


let urls2 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://picsum.photos/333',
    'https://no-such-url'
    // new Error('ошибочный url')
];
let bob = {name: 'bob'};
let tom = {name: 'tom'};
let ann = {name: 'ann'};
let nick = {name: 'nick'};
const arrUsers = [bob, tom, ann, nick];

class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(resolve)
        setTimeout(() => {
            resolve(this.num * 10);
        }, 0)
    }
}

console.log(typeof Thenable)
async function fun() {
    let res = await new Thenable(5);
    console.log(res);
}

fun();
const res = new Thenable(4);
res.then(res => console.log(res));

if (!countProducts) deleteProductsCard();
var countProducts = 100;

function deleteProductsCard() {
    console.log('product count delete to zero');
}
const obj={name:'bob'}
const age=Symbol('age');
const age2=Symbol('age');
obj[age]=44;
obj[age2]=44..toString(2);
console.log(obj);

