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

const factorialNum = (num) => {
    return num === 1 ? 1 : num * factorialNum(num - 1);
};
console.log(factorialNum(5));
//неявный try...catch
new Promise((res, rej) => {
    setTimeout(() => {
        throw new Error('error');
        //rej(new Error('error'))
    }, 0)
}).catch(er => console.log(er));

const powNum = (num, degree) => {
    return degree === 1 ? num : num * powNum(num, degree - 1);
}
console.log(powNum(2, 3));
const powNumCicle = (num, degree) => {
    let res = 1;
    for (let i = 0; i < degree; i++) {
        res *= num;
    }
    return res;
}
console.log(powNumCicle(2, 3));