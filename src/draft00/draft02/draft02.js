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

//recursion
function pow(x, n) {

    for (var i = 0, res = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

console.log(pow(3, 3));

function powRecursion(x, n) {
    return (n === 1) ? x : x * powRecursion(x, n - 1);
}

console.log(powRecursion(3, 4));

function factorialNum(num) {
    return num === 1 ? 1 : num * factorialNum(num - 1);
}

console.log(factorialNum(5));

//range numbers get by recursion

const range = (start, end) => {
   if(end-start==2) return [start+1];
   else {
       const array=range(start,end-1);
       array.push(end-1);
       return array;
   }
};
console.log(range(3,7))