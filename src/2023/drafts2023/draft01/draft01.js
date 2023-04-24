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

let [a, b, c, d, e] = [3, 5, 'hello', null, { name: 'bob', age: 44 }];
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
const menuCopy = Object.assign({}, menu);
console.log(menuCopy);
console.log({ ...menu })

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

const user33 = makeUser();
//console.log(user33.ref.name);

// создаём функцию и сразу же вызываем её с помощью new
let userN = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};
userN.name = 'tom';
console.log(Object.assign({}, userN));
const obj = {}

function A() {
    return obj;
}

function B() {
    return obj;
}

console.log(new A() == new B());
const calendarEvent = {
    title: "Builder.io Conf",
    date: new Date(123),
    attendees: ["Steve"],
    sayHi() {
        const sayHi = () => console.log(this?.title);
        sayHi();
    }
}
calendarEvent.sayHi.call(null);

function sayBye() {
    return {
        ref: this,
    }
}

calendarEvent.sayBye = sayBye;
console.log(calendarEvent.sayBye());

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

console.log(new User('Bob'));
const $play1 = document.getElementById('play')?.innerHTML;
console.log($play1);

const id = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id === id2);
console.log(id.description);
calendarEvent[id] = 'number1';
console.log(calendarEvent);
for (const idKey in calendarEvent) {
    console.log(idKey);
}


//get property by Symbol - very hard
const object1 = {};
const a2 = Symbol('a');
const b2 = Symbol.for('b');

object1[a2] = 'localSymbol';
object1[b2] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols);
console.log(object1[objectSymbols[0]]);
console.log(calendarEvent[id]);
console.log(Boolean(calendarEvent));
console.log(Boolean({}));
console.log(String({}));
calendarEvent[{ name: 'bob' }] = 123;
console.log(calendarEvent);
console.log(Number({}))
console.log(+{})
console.log({} - {});
console.log('hello'.toUpperCase());
const zero = new Number(0);
console.log(zero);

//toString(base)
const num = 255;
console.log(num.toString(2));
console.log(num.toString(16));
console.log(255..toString(2));


console.log("#001000" < "#000000");
console.log('res', 'hello');
console.log(typeof 'Vasia'.toUpperCase().length.toString());
console.log(4 === 3 + 1);
console.log('A' > 'a');
console.log('13px' > 12);
console.log(4 * 'five');
console.log(7 * 3 + (4 / 2) - (8 + (2 - 1)))
console.log(Math.abs('hello'.length - 16));

console.log(typeof Math);

function getThis() {
    return this;
}

console.log(getThis())
for (var j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log(j);
    }, 100)
}
const details = {
    message: 'hello',
}

function getMessage() {
    return this.message;
}

console.log(getMessage.call(details));
var a3 = 1, b3 = function a3(x) {
    x && a3(--x);
}
console.log(a3);
var name = 'bob';

function getName() {
    console.log(name);
    var name = 'peter';
    console.log(name);
}

getName();

function multi(a, b) {
    return a * b;
}

const bar = multi.bind(null, 2);
console.log(bar(3));
console.log((function (a) {
    console.log(arguments);
    arguments[0] = 10;
    return a;
})(5));
var nameUser = 'John'
var objUser = {
    name: 'Peter',
    getName() {
        console.log(`hello,${this.name}`);
    }
}
var printMessage = objUser.getName;
//printMessage();

let userName = 'Vasya';

function getUserName() {
    console.log(userName);
}

setTimeout(() => {
    let userName = 'Gosha';
    getUserName();
}, 100)

//const foo = someBar();
const someAge = 13;

function someBar() {
    return someAge;
}

function getObj() {
    return {
        bar: 1,
    }
}

console.log(typeof getObj().bar)

function getThis2() {
    return this;
}

console.log(getThis2());

const detail = {
    name: 'bob',
}

function getMess(mess) {
    return `${mess} ${this.name}`;
}

console.log(getMess.apply(detail, ['Hello']));

function foo11() {
    console.log(this);
}

foo11.call(null);