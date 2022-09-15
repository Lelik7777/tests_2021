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

//промисификация

const loadImg = (src, callback) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => callback(null, img);
    img.onerror = () => callback(new Error('error of image loading'));
    document.body.append(img);
}
const loadPromise = (src) => {
    return new Promise((res, rej) => {
        loadImg(src, (err, img) => {
            if (err) rej(err)
            else res(img);
        })
    })
}
loadPromise('https://picsum.photos/400').then(res => console.log(res.src)).catch(er => console.log(er));

const newBob = Object.create(userAny, {
    name: {value: 'bob'},
    job: {value: 'developer', writable: true, enumerable: true, configurable: true}
});
newBob.name = 'tom'
newBob.job = 'admin';
console.log(newBob);
console.log('for of');
for (const newBobElement of Object.keys(newBob)) {
    console.log(newBobElement);
}
console.log('for in ');
for (const newBobKey in newBob) {
    console.log(`${newBobKey}: ${newBob[newBobKey]}`);
}

class Thenable {
    constructor(num) {
        this.num = num;

    }

    then(resolve, reject) {
        setTimeout(() => {
            resolve(this.num * 2);
        }, 0)
    }
}

const obj22 = new Thenable(4);
obj22.then(res => console.log(res));

const name=Symbol('name');

const man={
    firstName:'bob',
    age:33,
}
man[name]='bobby';
console.log(man['name']);
console.log(man)





