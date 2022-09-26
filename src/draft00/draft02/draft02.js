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
const copy = {...userData};
console.log(copy === userData);
console.log('copy', copy);
console.log(userData.getYeaBorn?.() ?? 'not exist');
console.table(userData);

function* gen(start, end) {
    for (let i = start; i < end; i++) yield i;
}

function* genPass() {
    yield* gen(50, 70);
    yield* gen(71 - 109);
}

const map = new Map(Object.entries(userData));
console.log(map);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
for (const el of map.values()) {
    console.log(el);
}
console.log(userData.valueOf());
console.log(arrUsers.valueOf());
const f = 44;
console.log(f.valueOf());
console.log(2e3);
console.log(1e-2);

if (!countProd) deleteProd();
var countProd = 19;

function deleteProd() {
    console.log('all products delete');
}

function f1(name, age) {
    return {name, age};
}

const bob1 = f1('bob', 88);
console.log(bob1);
const prom1 = new Promise((res, rej) => res('one'));
const prom2 = new Promise((res, rej) => res('two'));
prom1.then(res => {
    console.log(res);
    return prom2;
}).then(res => console.log(res));
console.log(Object.getOwnPropertyDescriptor(userData,{}));
const tom11 = {
    name: 'tom',
    year: 2000,
    getAge() {
        console.log(new Date().getFullYear() - this.year);
        function isUSSR() {
            console.log(this.year<1993);
            console.log(this);
        }
        isUSSR.call(this);
    }
}

tom11.getAge();
function f2(...rest) {
    console.log(rest);
    let sum=0;
    for (const el of rest) {
        sum+=el;
    }
    return sum;
}

console.log(f2(3,4,5,6));
function User(name) {
    this.name=name;
}
const userBob=User('bob');
console.log(userBob);
function f3() {
    console.log(this);

}
f3();