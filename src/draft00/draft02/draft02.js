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

const visitedUsers= new WeakMap();
new Promise((res, rej) => {
    rej(new Error('error'));
}).then(res => console.res);

const countVistits = (user) => {
    let count=visitedUsers.get(user)||0;
    visitedUsers.set(user,++count);
}
countVistits(bob);
countVistits(ann);
countVistits(ann);
countVistits(nick);
countVistits(ann);
console.log(visitedUsers)

window.addEventListener('unhandledrejection', (ev) => {
    ev.preventDefault();
    console.log(ev.reason);
    console.log(ev.promise);
});
const cache = new WeakMap();


const process = (obj, cache) => {
    const start = Date.now();
    if (!cache.has(obj)) {
        for (let i = 0; i < 1e9; i++) {
        }
        cache.set(obj, 'some operation with object');
    }
    return {
        time: Date.now() - start,
        value: cache.get(obj),
    }
};

console.log(process(userData, cache));
console.log(process(userData, cache));
console.log(process(userData, cache));

function* generateSequence(start,end) {
    for (let i=start;i<end;i++) yield i;
}
function* generatePassword() {
    yield* generateSequence(48,57);
    yield* generateSequence(65,90);
}
let str='';
for (const el of generatePassword()) {
    str+=String.fromCharCode(el);
}
console.log(str);
console.log(Math.abs(-.3333))






