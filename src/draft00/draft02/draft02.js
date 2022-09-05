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
    some: {
        t: 'hello',
        toJSON() {
            return 'test';
        }
    },

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

console.log(JSON.stringify(userData, function (key, value) {
    if (typeof value === "number") {
        return value + 1;
    }
    return value;

}, ' '));
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);
console.log(backToDate)
console.log(new Date())
console.log('Сериализованный объект даты: ' + jsonDate);
const f = (arg) => {
  const inner = (arg2) => {
    arg+=arg2;
  }
  return inner;
}
const map=new Map(Object.entries(userData));
console.log(map);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
for (const mapElement of map.values()) {
    console.log(mapElement);
}
// for (let i=0;i<Infinity;i++){
//     let start=Date.now();
//     if(start+1e9) break;
//     console.log(i);
// }