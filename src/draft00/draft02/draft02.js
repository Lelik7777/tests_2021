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
        console.log('this is ', this);
        return `${this.firstName} ${this.lastName}`;
    },
    __proto__: userAny,
}

let fruits = ["Апельсин", "Груша", 'абрикос', "вишня"];
console.log(fruits.pop('абрикос'))

let urls2 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://picsum.photos/333',
    'https://no-such-url'
    // new Error('ошибочный url')
];

function User(name) {
    if (!new.target) return new User(name);
    this.name = name;
}

console.log(User('bob'));

//function finds primes
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const findPrimes = (num) => {
    console.log('primes: ')
    for (let i = 2; i <= num; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}
findPrimes(33);
// function async
async function f() {
    //await new Promise((res, rej) => setTimeout( rej, 4000,new Error('error')));
    await new Promise((res, rej) => setTimeout( res, 4000,'resolved'));
    return 'f worked';
}

console.log(f());
f().then(res => console.log(res)).catch(er => console.log(er));