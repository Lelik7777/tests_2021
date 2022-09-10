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

console.log(Math.trunc(13.956666))

const obj1=Object.create(userAny,{name:{value:'bob',writable:true},job:{value:'developer'},age:{value:44}});
console.log(obj1);
const fun = (arr,...rest) => {
    const copy=[...arr,...rest.flat(1)];
    console.log(copy);
}
fun([1,2,3],[4,5,6],[7,8,9],10,[11,12]);
let id=Symbol('id of bob');
const bob1={
    name:'bob'
}
bob1[id]=100;
console.log(bob1);
console.log(bob1[id]);






