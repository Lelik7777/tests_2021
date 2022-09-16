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
console.log(userData);
//полная копия объекта
let {...newUserData} = userData;
console.log(newUserData == userData);//false
//create empty object
let {firstName, lastName, age, getFullName, 'some object': {}, ...newUser} = userData;
console.log(userData)//{firstName: 'Brad', lastName: 'Traversy', age: 38, some object: {…}, getFullName: ƒ}
console.log(newUser);//{}
//частичное копирование свойств в новый объект
let { 'some object':{},getFullName:a, ...copyUser} = userData;
console.log(copyUser);//{firstName: 'Brad', lastName: 'Traversy', age: 38};

Object.freeze(userData);
for (const el of Object.keys(userData)) {
    console.log(el);
}
console.log('userData',userData);
Object.create({},{name:{value:'bob',c}})



