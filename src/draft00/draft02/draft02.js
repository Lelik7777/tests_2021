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

const factorial = num => num === 1 ? 1 : factorial(num - 1) * num;
console.log(factorial(5));
console.log(Object.assign({},userData,{job:'developer',friends:['ann','tom']}));
for (let i=0;i<20;i++){
    console.log(Math.round(Math.random()*10));
}
const {head,...newObj}=userAny;
console.log(newObj);
console.log(head);
const range = (start,end) => {
    if(end-start===2) return [start+1];
    else {
        const array=range(start,end-1);
        array.push(end-1);
        return array;
    }
}
console.log(range(4,10))






