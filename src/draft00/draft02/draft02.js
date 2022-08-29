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


setTimeout((a, b) => {
    console.log(a + b);
    return a + b;
}, 1000, 4, 5);

function sum(a, b) {
    console.log(a + b);
    return a + b;
};
setTimeout(sum, 2000, 23, 5);
setTimeout('sum(4,44)', 3000);

const objGenerator = {
    from: 1,
    to: 4,
    * [Symbol.iterator]() {
        for (let i=this.from;i<=this.to;i++){
            yield i;
        }
    }
}
for (const number of objGenerator) {
    console.log(number);
}