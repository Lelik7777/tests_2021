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
    __proto__: userAny,
    some: {
        t: 'hello',
        toJSON() {
            return 'test';
        }
    },

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

const stringMy = 'some text';
const copy = stringMy.toUpperCase();
console.log(copy);
let a = {name: 'some name'};
let b = a;
b.age = 23;
console.log('a', a);
console.log('b', b);
const outer = (arg) => {
    function inner(arg1) {
       return  arg += arg1;

    }

    return inner;
}
const res1=outer(20);
console.log(res1(5));
console.log(res1(10));
console.log(res1(15));

Object.defineProperties(userData,{job:{value:'developer',writable:false,enumerable:false}});
for (const res1Element of Object.keys(userData)) {
    console.log(res1Element)
}
console.log(userData);

