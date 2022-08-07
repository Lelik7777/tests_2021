const checkSimpleNum = (num) => {
    let isSimple = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isSimple = false;
    }
    return isSimple;
};
console.log(checkSimpleNum(7));

function sum(a, b) {
    return a + b;
}

const ar1 = [3, 4, 5, 5, 5];
const ar2 = [2, 3, 45, 6, 7];
console.log([...ar1, ...ar2])
console.log(...ar1)
const promise = new Promise(res => res('promise has done'));
console.log('собственно объект промис: ', promise);
const promise2 = new Promise((res, rej) => rej('promise has rejected'));
console.log('собственно объект промис', promise2)
const promise3 = new Promise(res => {
});
console.log(promise3);
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
        console.log('this is ',this);
        return `${this.firstName} ${this.lastName}`;
    },
    __proto__: userAny,
}
const id = Symbol('id');
userData[id] = 'id user data of Symbol';
console.log(userData);
console.log('cycle by for in ');
for (const idKey in userData) {
    console.log(idKey)
}
console.log('цикл через for of')
for (const idElement of Object.keys(userData)) {
    console.log(idElement)
}
console.log(userData[id])
let fruits = ["Апельсин", "Груша", 'абрикос', "вишня"];

let urls2 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://no-such-url'
    // new Error('ошибочный url')
];
//создание итерируемого объекта с использованием генератора
const objGen = {
    from: 1,
    to: 10,
    * [Symbol.iterator]() {
        for (let i = this.from; i<= this.to; i++) {
            yield i;
        }
    }
};
for (const number of objGen) {
    console.log(number);
}
//опциональная цепочка
const objSome={nam:'bob'};
const age=objSome?.age;
console.log(age);
const name=objSome?.name;
console.log(name)
//console.log(objSome.go()); return TypeError
console.log(objSome.go?.())
//length of array
const someArr=[1,3,4];
someArr[25]=100;
console.log(someArr.length)// return 26, хотя визуально кажется,что в массиве только 4 элемента
//this
console.log(this)//return window as global object in browser
userData.getFullName();// this points to object userData
 const getName=userData.getFullName;
 getName();// this points to Window
//перевод из десятичной в двойничную
console.log(255..toString(2));
//for in
let arrKeys=[];
for (const nameKey in userData) {
    arrKeys=[...arrKeys,nameKey];
}
console.log(arrKeys)