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
const {...bob1} = bob;
console.log('bob1',bob1)
console.log([...new Set([4, 5, 6, 6, 5, 4])]);
console.log(Array.from(new Set([4, 5, 6, 7, 7])));

const req = new XMLHttpRequest();
req.open('get', `https://restcountries.com/v3.1/name/russia`);
req.send();
req.addEventListener('load', function () {
    const [data] = JSON.parse(req.responseText);
    console.log(data)
})
const users = new WeakSet();
users.add(bob);
users.add(nick);
users.delete(bob);
console.log(users.has(bob));
console.log(users.has(ann));

//class declaration
class Class {

}

//class expression
const Class1 = class {

}
console.log(Number.parseInt('y13.44asdf'));
console.log(Number.parseFloat('13.45asdf'));

const loadImg = (path) => {
    return new Promise((res, rej) => {
        const img = document.createElement('img');
        img.src = path;
        img.addEventListener('load', function () {
            res(img);
        })
        img.addEventListener('error', function () {
            rej(new Error(`${img.src} didn't load `));
        })
    });
}
loadImg('https://picsum.photos/1000/500 ').then(img => document.body.append(img)).catch(er => console.log(er));

console.log(Array.from('hello'));
console.log('hello'.split(''));
console.log([...'hello']);

