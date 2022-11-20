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
console.log([...'😂']);

function Man(name) {
    this.name = name;
}

const bobby = new Man('bobby');
console.log(Man.prototype.isPrototypeOf(bobby));
console.log(bobby.name);

class Person {
    #fullName;

    constructor(fullName) {
        this.fullName = fullName;
    }

    set fullName(name) {
        if (name.includes(' ')) this.#fullName = name;
        else console.log('not correct name');
    }

    get fullName() {
        return this.#fullName;
    }
}

const anay = new Person('ann');
console.log(anay.fullName);
const tommy = new Person('Tom Bombandil');
console.log(tommy.fullName);

console.log(Number('23_000'));
console.log(Number.parseInt('23_00'));
console.log(230_000)