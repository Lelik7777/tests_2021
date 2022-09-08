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

const copy=[...arrUsers];
console.log(copy===arrUsers);
console.log(...arrUsers);
console.log(...fruits);
console.log(userData+'hello');
function User(name) {

    this.name=name;
}
const user1=new User('bob');
console.log(user1);
const user2=User('tom');
console.log(user2);
const map=new Map(Object.entries(userData));
console.log(map);
for (const mapElement of map) {
    console.log(mapElement);

}
console.log(map.keys());
for (const el of map.entries()) {
    console.log(el)
}
function f() {
   return(
       'hello'
   ) ;
}

console.log(f());
console.log(345*.25);


