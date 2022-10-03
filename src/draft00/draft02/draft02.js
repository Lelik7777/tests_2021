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

console.log([...'hello']);
console.log([...'😂']);
console.log('😂'.split(''));
console.log(Array.from('😂'));
//const setTax = rate => value => value + rate * value;
const setTax = function (rate) {
    return function (value) {
        return value + rate * value;
    }
};

const range = (start, end) => {
    if (end - start === 2) return [start + 1];
    else {
        const arr = range(start, end - 1);
        arr.push(end - 1);
        return arr;
    }
}
console.log(range(4, 9));

const getArrWithRandomValues = (length, from, end) => {
    return Array.from({length}, () => Math.trunc(Math.random() * end - from + 1) + from);
}
console.log(getArrWithRandomValues(20, 2, 10));
//optional chain
console.log(userData.getName?.());
