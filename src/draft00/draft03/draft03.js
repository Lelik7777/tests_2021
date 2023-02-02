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
