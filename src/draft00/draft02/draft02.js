const checkSimpleNum = (num) => {
    let isSimple = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isSimple = false;
    }
    return isSimple;
};
console.log(checkSimpleNum(7));

function sum(a, b) {
    return a + b;
}

const ar1 = [3, 4, 5, 5, 5];
const ar2 = [2, 3, 45, 6, 7];
console.log([...ar1, ...ar2])
console.log(...ar1)
const promise = new Promise(res => res('promise has done'));
console.log('собственно объект промис: ', promise);
const promise2 = new Promise((res, rej) => rej('promise has rejected'));
console.log('собственно объект промис', promise2)
const promise3 = new Promise(res => {
});
console.log(promise3);
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
console.log(fruits.pop('абрикос'))

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

const visitedUsers = new WeakMap();
const count = (user) => {
    let count = visitedUsers.get(user) || 0;
    return visitedUsers.set(user, ++count);
}
count(bob);
count(bob);
count(bob);
count(ann);
count(ann);
count(nick);
console.log(visitedUsers);
nick = null;
console.log(visitedUsers.has(nick));

const cache = new WeakMap();

function calculate(obj) {
    const start = Date.now();
    if (!cache.has(obj)) {
        for (let i = 0; i < 1e8; i++) {
        }
        const process = 'some changes in object';
        cache.set(obj, process);
    }
    return {
        0: cache.get(obj),
        'time for calculate': Date.now() - start,
    }
};
console.log(calculate(userData));
console.log(calculate(userData));
console.log(calculate(userData));
