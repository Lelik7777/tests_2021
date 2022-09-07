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

Object.defineProperties(userData, {age: {value: 88}});
console.log(userData.age);

class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(resolve);
        setTimeout(() => {
            resolve(this.num * 2);
        }, 1000)
    }
};

async function f() {
    const res = await new Thenable(3);
    console.log(res);
}

f();
const changed = JSON.stringify(userData, function (key, value) {
    if (typeof value === "number") return value * 2;
    return value;
}, ' ');
console.log(changed);
const man = {
    name: 'bob',
    age: 33,
    getName() {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
};
console.log(man.getAge());
console.log(man.getName());
console.log(man);
console.log(man['getAge']());


