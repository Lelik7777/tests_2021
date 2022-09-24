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

const nestedArr = [3, 4, [5, 6]];
const [a, , [c, d]] = nestedArr;
console.log(a, c, d);
const fun = ({age = 33, name = 'bob', job = 'admin'}) => {
    console.log(`it is ${name}, age is ${age}, work as ${job}`);
}
fun({name: 'tom', job: 'developer', location: {city: 'Moscow'}});
console.log(userData.getName?.() ?? 'not exist');
console.log(userData);
console.log(Object.defineProperties(userData, {job: {value: 'developer'}, age: {value: 22}}))
console.log(userData);
console.log(Object.entries(userData));