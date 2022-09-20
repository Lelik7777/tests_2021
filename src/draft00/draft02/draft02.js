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

console.log(userData.__proto__.head)

class User {
    constructor(name) {
        this.name = name;
    }
}

const user1 = new User('bob');
console.log(user1);
user1.__proto__ = {age: 30};
console.log(user1);
user1.__proto__.getYearBorn = function () {
    return new Date().getFullYear() - this.age;
}
console.log(user1);
console.log(user1.__proto__.getYearBorn());
const a = 5.45;
console.log(a);
console.log(+a.toFixed());
const b=new Number();
console.log(b)
const str=new String();
console.log(str.valueOf());
console.log(b.valueOf())
console.log(userData.valueOf());
console.log(''.valueOf())
const c=3;
console.log(c.valueOf());
const _true=true;
console.log(_true.valueOf());
const someObj={name:'bob',age:33};
console.log(someObj.valueOf());

console.log(.25*345);
console.log(Object.is(3,3));
console.log(userData.hasOwnProperty('age'));
console.log(Object.getOwnPropertyDescriptor(userData,'firstName'));
console.log(1e4);
console.log(1e-4);




