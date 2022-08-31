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

const range = (start, end) => {
    if (end - start <= 1) return;
    if (end - start === 2) return [start + 1];
    else {
        const array = range(start, end - 1);
        array.push(end - 1);
        return array;
    }
}
console.log(range(3, 2));
console.log(+(0.2 + 0.1).toFixed(3) == 0.3);

function User(name) {
    this.name = name;
    console.log(new.target);
}

const user = User('bob');
const cache = new WeakMap();
const process = (obj, cache) => {
    const start = Date.now();
    if (!cache.has(obj)) {
        for (let i = 0; i < 1e9; i++) {
        }
        cache.set(obj, 'some  results of calculations');
    }
    return {
        value: cache.get(obj),
        'working time': Date.now() - start > 0 ? Date.now() - start : 'obj is in cache',
    }
}
console.log(process(userData, cache));
console.log(process(userData, cache));
console.log(process(userData, cache));

const dataVisited = new WeakMap();
const countVisitsUser = (user, collection) => {
    let count = collection.get(user) || 0;
    collection.set(user, ++count);
}
countVisitsUser(ann,dataVisited);
countVisitsUser(ann,dataVisited);
countVisitsUser(nick,dataVisited);
countVisitsUser(ann,dataVisited);
countVisitsUser(bob,dataVisited);
countVisitsUser(bob,dataVisited);
console.log(dataVisited);
bob=null;
console.log(dataVisited.has(bob));
