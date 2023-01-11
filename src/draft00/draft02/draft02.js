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
/////////////////////////////////////////////////////////////////

const lemonPie = {
    radius: 5,
    cook: (function () {
        const type = 'lemon';
        return function () {
            console.log('#cook', type, this.radius);
        }
    })(),
}
lemonPie.cook();

function getRadius() {
    let rad = 1;

    getRadius = function () {
        return rad *= 2;
    }

    return getRadius();
}

console.log(getRadius());
console.log(getRadius());

function PieFactory() {
    const instance=this;
    PieFactory=function () {
        return instance;
    }
}
const factory1=new PieFactory();
const factory2=new PieFactory();
console.log(factory1===factory2);//true