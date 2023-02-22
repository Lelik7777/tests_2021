let str = 'ahb acb aeb aeeb adcb axeb';
console.log('hello');
const arr = [10, 23, 34];
const arr2 = [1, 3, 4, 5];

if (arr.length > arr2.length) {
    for (let i = 0; i < arr.length - arr2.length; i++) {
        arr2.unshift(0);
    }
}
if (arr.length < arr2.length) {
    for (let i = 0; i < arr2.length - arr.length; i++) {
        arr.unshift(0);
    }
}
const newArr = []
if (arr.length === arr2.length) {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + arr2[i]);
    }
}
console.log(arr, arr2);
console.log('1200' > '450')
console.log(+newArr.join(''))

function add1(num1, num2) {
    const arrNum1 = String(num1).split('');
    const arrNum2 = String(num2).split('');
    if (arrNum1.length > arrNum2.length) {
        for (let i = 0; i < arrNum1.length - arrNum2.length; i++) {
            arrNum2.unshift(0);
        }
    }
    if (arrNum1.length < arrNum2.length) {
        for (let i = 0; i < arrNum2.length - arrNum1.length; i++) {
            arrNum1.unshift(0);
        }
    }
    const newNum = [];
    for (let i = 0; i < arrNum1.length; i++) {
        newNum.push(+arrNum1[i] + (+arrNum2[i]));
    }
    console.log(newNum)
    return +newNum.join('')
}

console.log(add1(0, 230));

const add = (num1, num2) => {
    num1 = String(num1).split('').reverse();
    num2 = String(num2).split('').reverse();
    console.log(num1, num2)
    const max = Math.max(num1.length, num2.length);
    const num = [];
    for (let i = 0; i < max; i++) {
        num.push(+(num1[i] || 0) + (+num2[i] || 0));
    }
    return +num.reverse().join('');
}
console.log(add(120, 33));


const minSum1 = arr => {
    const sortedArr = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += (sortedArr[i] * sortedArr[sortedArr.length - 1 - i]);
    }
    return sum;
}
console.log(minSum1([5, 4, 2, 3]));
const minSum2 = arr => arr.sort((a, b) => a - b).reduce((sum, cur, i, array) => {
    if (i < array.length / 2) {
        sum += cur * array[array.length - 1 - i];
    }
    return sum;
}, 0)
console.log(minSum2([5, 4, 2, 3]));
const minSum = arr => arr.sort((a, b) => a - b).reduce((acc, cur) => acc + cur * arr.pop(), 0);

const objA = {a: 10, b: 20, c: 30, e: 34}
const objB = {a: 3, c: 6, d: 3}

const combine = (...objs) => objs.reduce((objCombo, obj) => {
    for (const key in obj) {
        //if (objCombo[key]) objCombo[key] += obj[key];
        // else objCombo[key] = obj[key];
        objCombo[key] = key in objCombo ? objCombo[key] + obj[key] : obj[key];
    }
    return objCombo;
}, {})

console.log(combine(objA, objB));

const factorial = n => n > 1 ? factorial(n - 1) * n : 1;

const strCount1 = obj => {
    let count = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'string') count++;
        if (typeof obj[key] === "object") {
            count += strCount(obj[key]);
        }
    }
    return count;
}
const strCount = obj => Object.values(obj).reduce((acc, cur) => {
    if (typeof cur === 'string') acc += 1;
    if (typeof cur === 'object' && cur !== null) strCount(cur);
    return acc;
}, 0)
const strCount2 = obj =>
    typeof obj !== `string` ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0) : 1;
console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
}))
console.log(strCount(['sadf', 3, 3]))
console.log(Object.values({}).reduce((acc, cur) => acc + cur, 0));
//{} на случай null or undefined
const count = obj => typeof obj !== 'string' ? Object.values(obj ?? {}).reduce((acc, cur) => acc + count(cur), 0) : 1;
console.log(count({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
}));
const matrix = Object.entries({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
})
const arrMatrix = [];
for (let i = 0; i < matrix.length; i++) {
    let sum = '';
    for (let j = 0; j < matrix[i].length; j++) {
        arrMatrix.push(matrix[i][j]);
    }
}
console.log(arrMatrix.flatMap(x => x));
//bubbling sort
const arrNums = [3, 1, 34, 2, 44, 3, 1];
for (let i = 0; i < arrNums.length - 1; i++) {
    for (let j = 0; j < arrNums.length - 1 - i; j++) {
        if (arrNums[j + 1] < arrNums[j]) {
            [arrNums[j + 1], arrNums[j]] = [arrNums[j], arrNums[j + 1]];
        }
    }
}

console.log(arrNums);
let a = 4;
let b = 5;
[a, b] = [b, a];
console.log(a, b);
console.log(Math.log2(100));


console.log(getCard())
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
console.log(expr.match(/\d{10}|\*{10}/g));


function getPart(str) {
    let arr = [];
    for (let i = 0; i < str.length; i += 10) {
        arr.push(str.slice(i, i + 10))
    }
    return arr.map(el => el.replace(/0+0/g, '').replace(/11/g, '-').replace(/10/g, '.')).map(x => MORSE_TABLE[x] || ' ').join('');
}

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
console.log(getPart('asfsfasdfsdfasdfsadfsadfsdfsdfsdfsdfsdfasdfasd'));
const data = '00000011110000000010';

console.log(getPart(expr));


function towelSort(matrix) {
    return matrix.map((x, i) => {
        if (i === 1)
            x.reverse();
        return x;
    })

}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, [4, 5], 8, 9],
];
//towelSort(matrix1)
console.log(matrix1.join().split(','));
//console.log('((()))()'.match(/\(/g).length);
console.log('((()))()'.lastIndexOf('('))
console.log('((()))()'.indexOf(')'))
const brackets = '((()))()'.split('');

function check(str, bracketsConfig) {
    // your solution
    const stack = [];
    const objBrackets = bracketsConfig.reduce((acc, cur) => {
        acc[cur[1]] = cur[0];
        return acc;
    }, {});
    str.split('').forEach(el => {
        if (stack.length === 0) stack.push(el);
        else if (stack[stack.length - 1] === objBrackets[el]) stack.pop();
        else stack.push(el);
    });
    return stack.length === 0;
}

console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));

const isPrime = num => {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }

    return true;

}
console.log(isPrime(8))
//console.log(1929473003)
console.log(isPrime(1929473003));
console.log(Math.sqrt(1929473003));

const returnStr = str => {
    const toLowUpperCase = word => word.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    return str.includes(' ') ? str.split(' ').map(word => toLowUpperCase(word)).join(' ') : toLowUpperCase(str);
}
// "WeIrD StRiNg CaSe"
console.log(returnStr('string hello'))//WeIrD StRiNg cAsE
//console.log(toLowUpperCase('string'))
const returnStr2 = str => str.replace(/\w+/g, x => x[0].toUpperCase() + x.slice(1))
console.log(returnStr2('string hello'))
console.log('34'.toLocaleString('2'))
console.log(Number(255).toString(16))

const convert = (num) => num <= 0 ? '00' : Number(num > 255 ? 255 : num).toString(16);

function rgb(r, g, b) {
    const isTwo = value => convert(value).length < 2 ? '0' + convert(value) : convert(value);
    return `${isTwo(r)}${isTwo(g)}${isTwo(b)}`.toUpperCase();
}

//console.log((convert(255)));
//console.log(rgb((255,255,255)))
console.log(rgb(1, 255, 255));//ADFF2F
console.log(convert(3))

function toHex(d) {
    if (d < 0) {
        return "00";
    }
    if (d > 255) {
        return "FF";
    }
    return ("0" + (Number(d).toString(16))).toUpperCase()
}

console.log(toHex(14))
console.log(Math.max(0, Math.min(255, 300)))

var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
const convertNew = (str, value1, value2) => {

}


function getCard() {
    const array = [];
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const pushArr = (letter, arr, num, min, max) => {
        let set = new Set();
        for (let i = 0; set.size < num; i++) {
            set.add(`${letter}${getRandom(min, max)}`);
        }
        return [...set];
    }
    let a = 0;
    'BINGO'.split('').forEach((letter, i) => {
        if (letter === 'N') array.push(...pushArr(letter, array, 4, ++a, a += 14));
        else array.push(...pushArr(letter, array, 5, ++a, a += 14));
    })
    return array;
}

getCard()
console.log(new Set(['B12', 'B12']))
for (let i = 0; i < 20; i++) {
    console.log(Math.floor(Math.random() * 14 + 1));
}

function getCard1() {
    var arr = [];
    for (var i = 0; i < 5; ++i)
        arr.push('B' + (Math.random() * 14 + 1));
    for (var i = 0; i < 5; ++i)
        arr.push('I' + (Math.random() * 14 + 16));
    for (var i = 0; i < 4; ++i)
        arr.push('N' + (Math.random() * 14 + 31));
    for (var i = 0; i < 5; ++i)
        arr.push('G' + (Math.random() * 14 + 46));
    for (var i = 0; i < 5; ++i)
        arr.push('O' + (Math.random() * 14 + 61));
    return arr;
}

console.log(getCard1());
const countBits = n => Number(n).toString(2).split('').filter(x => x !== '0').length;
console.log(countBits(1234))
console.log('A'.charCodeAt(0))
const bingo = (ticket, win) =>ticket.reduce((acc, cur) => {
        if (cur[0].split('').find(x => x.charCodeAt(0) === cur[1])) acc++;
        return acc;
    }, 0)>= win ? 'Winner!' : 'Loser!';

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))
const bingo2=(tick,win)=>win<=tick.filter(v=>v[0].split('').some(vi=>vi.charCodeAt(0)===vi[1])).length?'lose':'win'
console.log(bingo2([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(Math.log2(512));
console.log(Math.pow(2,9));
console.log(2**9)