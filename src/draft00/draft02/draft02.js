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

// in залазит и в prototype
console.log('firstName' in userData);
console.log('jbo' in userData);
console.log('head' in userData);
const div2 = document.querySelector('.blue');
div2.innerHTML = '<p>new paragraph</p>'
console.log([...fruits, ...[3, 4, 5, 5]]);
const [a, b, ...rest] = fruits;
console.log(a, b, rest);
const [name, age, job, city] = ['bob', 33, 'developer', 'Moscow'];
console.log(name, age, job, city);
setTimeout((a, b, c) => console.log(a + b + c), 2000, 5, 6, 7);
const sum = (a, b, c) => {
    console.log(a+b+c);
}
setTimeout('console.log(sum(4,4,4))', 3000);
setTimeout(sum,4000,4,6,1);
const set=new Set();






