//"use strict"


console.log('%cdraft01', 'color:red;font-size:20px');


const audio = new Audio();
const $play = document.querySelector('.play');
const $pause = document.querySelector('.pause');

function play() {
    audio.src = '../../sounds/Summer Wind.mp3';
    audio.play()
}

function pause() {
    audio.pause();
}

$play.addEventListener('click', play);
$pause.addEventListener('click', pause);

const [a, b, c, d, e] = [3, 5, 'hello', null, {name: 'bob', age: 44}];
console.log(a, b, c, d, e);

console.log(typeof 1 / 0);
console.log(typeof NaN);
console.log(1 / 0);
console.log(typeof Infinity);
console.log(0 / 1);
console.log(Number(null));
console.log(Number(undefined));
console.log(Number('34n'));
console.log(Number('000002'));
console.log(Number('\n0\n'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log('03n' > 2)
console.log(null == undefined);
console.log(0 == NaN)
console.log(null == "\n0\n");
console.log(null == 0);
if ('e' / 3) console.log('hello');
const age = 350;
let message = age < 10 ? 'hello,junior' : age < 16 ? 'hello,guy'
    : age < 30 ? 'hello,man' : age < 60 ? 'hello,grand' : 'old man';
console.log(message);

//const value = +prompt('enter digit', '');
//const res = value > 0 ? 1 : value < 0 ? -1 : 0;
//alert(res);
if (0 || 1) {
    console.log('condition')
}
if (age <= 14 && age >= 90) {
}
if (!(age >= 14 && age <= 90)) {
}
for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) console.log(i);
}
//for (let i = 0; i < 3; i++)
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

function getNum(n) {
    for (let i = 2; i < n; i++) {
        if (!n % i === 0) {

        }
    }
}

const getMin = (a, b) => a < b ? a : b;
console.log(getMin(3, -1));
console.log(getMin(1, 1));
let [nameFriend, isAdmin, isTrue, gender] = ['name', 'isAdmin', true, 'Gender'];

const user = {
    name: 'bob',
    age: 33,
    [isAdmin]: false,
    [nameFriend + 'Friend']: 'tommy',
    [isTrue]: 'it is true',

}
user['your' + gender] = true;
let key = 'name';
console.log(user['name']);
console.log(user.name);
console.log(user[key]);
console.log(user[isAdmin]);
console.log(user['nameFriend']);
console.log(user['isAdmin']);
console.log('true' in user);
console.log('///////////////');
for (const keyKey in user) {
    console.log(`${keyKey}: ${user[keyKey]}`)
}
const isEmpty = (obj) => {
    for (const objKey in obj) {
        return false;
    }
    return true;
}

//console.log(isEmpty(user));
const objEmp = {};
console.log(isEmpty(user));
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = (obj) => {
    let sum = 0;
    for (const objKey in obj) {
        sum += obj[objKey];
    }
    return sum;
}
console.log(sum(objEmp));
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
const multiplyNum = (obj) => {
    for (const objKey in obj) {
        if (typeof obj[objKey] === "number") {
            obj[objKey] *= 2;
        }
    }
}
multiplyNum(menu);
console.log(menu);
const menuCopy=Object.assign({},menu);
console.log(menuCopy);
console.log({...menu})
function fun() {
    console.log(this);
}

fun();

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
const user33=makeUser();
//console.log(user33.ref.name);

// создаём функцию и сразу же вызываем её с помощью new
let userN = new function() {
    this.name = "John";
    this.isAdmin = false;

    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};
userN.name='tom';
console.log(Object.assign({},userN));
const obj={}
function A() {
    return obj;
}
function B() {
    return obj;
}

console.log(new A()==new B())