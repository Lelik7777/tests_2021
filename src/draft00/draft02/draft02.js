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

const b = new Number(6);
console.log(b);
console.log(new String('hello').valueOf());
console.log(b.valueOf());
window.addEventListener('load',function (e) {
    console.log(e);
});
// window.addEventListener('beforeunload',function (e) {
//     e.preventDefault();
//     console.log(e);
//     //это нужно,чтобы появилась pop-up с уточнениями
//     e.returnValue='';
// })
const div = document.querySelector('.blue');
console.log(Array.from(div.children));
const array = ['р', "а", "з"]
Array.from(div.childNodes).forEach(node => {
    if (node.nodeName === '#text')
        if (Array.from(node.textContent).some(x => array.find(y => y === x))) console.log(node);
});
let a=5n;
console.log(typeof a)
console.log({}.toString());
Array.prototype.sum=function () {
    return this.reduce((acc,curr)=>acc+curr);
};
console.log([3,4,5,6,7].sum());
let mapFruits = new Map();
mapFruits.set('banana', 1);
mapFruits.set('orange', 2);
mapFruits.set('meat', 4);
console.log(mapFruits)
console.log(Object.fromEntries(mapFruits));
console.log([3,4,5].valueOf());
console.log(bob.valueOf());
console.log(a.valueOf())