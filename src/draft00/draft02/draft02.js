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
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    __proto__: userAny,
}

let fruits = ["Апельсин", "Груша",'абрикос',"вишня"];

let urls2 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
    'https://no-such-url'
    // new Error('ошибочный url')
];

const ourArray = [1, 2, 3];

const iterator = ourArray[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next())
for (const number of iterator) {
    console.log(number)
}
console.log('a'.codePointAt(0))