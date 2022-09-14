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

const promise=new Promise((res,rej)=>{
   rej(new Error('error'));
});
console.log(promise);
console.log('hello');
console.log(Array.of(4));
console.log(new Array(4));

function* generateNum(start,end) {
    for (let i=start;i<end;i++){
        yield i;
    }
}
function* generatePassword() {
    yield* generateNum(47,57);
    yield* generateNum(93,110);
}
let str='';
for (const el of generatePassword()) {
    str+=String.fromCharCode(el);
}
console.log(str);
let a=(3+4,4-1);
console.log(a)







