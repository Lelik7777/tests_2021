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
    const instance = this;
    PieFactory = function () {
        return instance;
    }
}

const factory1 = new PieFactory();
const factory2 = new PieFactory();
console.log(factory1 === factory2);//true

function toReadable(number) {
    const arrOnes = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const arrTens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const getOnes = num => num % 10;
    const getTens = num => Math.floor(num / 10);
    const getHundreds = num => Math.floor(num / 100);
    const tens = number % 100;
    if (number < 20) return arrOnes[number];
    if (number < 100) return `${arrTens[getTens(number)]} ${getOnes(number) === 0 ? '' : arrOnes[getOnes(number)]}`.trim();
    return `${arrOnes[getHundreds()]} hundred ${arrTens[getTens(tens)]}`

}

//toReadable(89);
//console.log(toReadable(2));
function toBinary(n) {
    return +n.toString(2);
}

console.log(toBinary(5));

function mergeArrays(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return [];
    return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
}

console.log(mergeArrays([1, 4, 5], []));

function add(num1, num2) {
    const str1 = String(num1);
    const str2 = String(num2);
    const maxLength = str1.length > str2.length ? str1.length : str2.length;
    for (let i = 0; i < maxLength; i++) {

    }
}

//write your code here
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,

}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,

}];
questions.map(obj => ({userAnswer: null}));
console.log(questions)
let obj = {};
const arr = [["white", "goodness"], ["blue", "tranquility"]];
const arr2 = [];
for (let [key, value] of arr) {
    arr2.push({[key]: value})
}
console.log(arr2)
console.log(arr.map(([key, value]) => ({[key]: value})));

const obj1 = {a: 10, b: 20, c: 30};
console.log(Object.entries(obj1));



//example with arrow functions
function thisFn() {
    console.log(`this:`, this);

    function oldFn() {
        return this;
    }

    const arrFn = () => this;
    const obj = {
        a: 5,
        oldFn,
        arrFn,
    }
    // console.log('call oldFn', obj.oldFn());
    // console.log('call arrFn', obj.arrFn());

    console.log(obj.oldFn.call({hello: 'hello world'}));
    console.log(obj.arrFn.call({hello: 'hello world'}));

    console.log(oldFn.call({b: 4}));
    console.log(arrFn.call({b: 4}));

    console.log(obj.oldFn.bind({status: 'binded'}).call({a: 5}));

}

//thisFn.call({context: 'from bind or call'});

const nicknameGenerator = name => name.length < 3 ? 'error' : name.slice(0, 3 + 'aeiou'.includes(name[2]));
console.log(nicknameGenerator("Jaennie"));

const sortMyString = s => [...s].filter((_, i) => i % 2 === 0 || i === 0)
    .concat([' '])
    .concat([...s].filter((_, i) => i % 2 !== 0)).join('');
console.log(sortMyString("CodeWars"))

function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}

console.log([3, 4, 5, 6, 2].sort((a, b) => a - b));
const arrObj = [
    {'4': 'dog'}, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];

function spread(func, args) {

    return func(...args);
}

console.log(spread(function (x, y) {
    return x + y
}, [1, 2]))

const arrVowels = 'aeiou';
console.log("aeiou, abc".split('').map(el => arrVowels.includes(el) ? '1' : '0').join(''));

function vowelOne(s) {
    return s.toLocaleLowerCase().split('').map(el => arrVowels.includes(el) ? '1' : '0').join('');
}

console.log(vowelOne("vowelOne"));//01010001
const killer = (obj, arr) => {
    let value = false;
    for (const objKey in obj) {
        //if (obj[objKey].includes(arr[0]) && obj[objKey].includes(arr[1])) return objKey;
        for (const el of arr) {
            if (obj[objKey].includes(el)) value = true;
            else value = false;
        }
        if (value) return objKey;
    }
}
console.log(killer({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill']));

console.log(Object.keys({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}))

const data = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];

const arrSegments = [];
const length = data.length / 8;
for (let i = 0; i < length; i++) {
    arrSegments.push(data.splice(0, 8));
}
console.log(arrSegments.reverse().flatMap(x => x))
console.log(['3,4,5,6,7'].map(Number));
const list = [
    {'4': 'dog'}, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];
console.log(list.sort((a, b) => Object.keys(a) - Object.keys(b)).map(x => Object.values(x)[0]).join(' '));

function addNew(num1, num2) {

}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

console.log(Object.entries(objB));
//decodeArray.push(element.replace(/00/gi, "").replace(/10/gi, ".").replace(/11/gi, "-"));
console.log('0000001111'.replace(/00/gi,'').replace(/10/gi,'.').replace(/11/gi,'-'));

