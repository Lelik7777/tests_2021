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

const user = {
    firstName: 'bob',
    lastName: 'geits',
    job: 'developer',
    friends: ['mike', 'tom', 'ann'],
    getFriends() {//что-то наподобие function declaration
        //let myFriends=[...this.friends];
        //return myFriends;
        return this.friends;
    },
    getFriends2: function () {// что-то наподобие function expression - здесь ф-ция становится значением свойства объекта
        return [...this.friends];
    }
}
console.log(user["getFriends"]());
const map=new Map(Object.entries(userData));
for (const mapElement of map.values()) {
    console.log(mapElement);

}




