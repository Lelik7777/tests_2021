console.log('%cdraft02','color:green;font-size:16px;margin-left:200px;')
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

const collectionUserData=new Map(Object.entries(userData));
console.log(collectionUserData);
//обработка неявной ошибки,именно неявной - без использования reject
//если же использовать reject,то
new Promise((res,rej)=>{
    setTimeout(()=>{
        throw new Error('error')
    },3000)
}).catch(er=>console.log(er));

async function wait() {
   await new Promise(resolve => setTimeout(resolve, 6000));

    return 'this function wait 6 sec'
}

console.log(wait())
wait().then(res=>console.log(res));