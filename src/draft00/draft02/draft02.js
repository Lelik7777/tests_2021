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

//использование коллекции WeakMap для кэширования
const cache = new WeakMap();
const execute = (obj, cache) => {
    let start = Date.now();
    if (!cache.has(obj)) {

        for (let i = 0; i < 1e9; i++) {
        }
        cache.set(obj, 'some data');
    }
    return {
        0: cache.get(obj),
        1: Date.now() - start,
    }
}
console.log(execute(userData,cache));
console.log(execute(userData,cache));
console.log(execute(userData,cache));

//использование коллекции WeakMap() для проверки количества посещений сайта пользователями

const usersVisited=new WeakMap();
const countVisits = (user) => {
  let count=usersVisited.get(user)||0;
  usersVisited.set(user,++count);
};
countVisits(bob);
countVisits(bob);
countVisits(ann);
countVisits(nick);
countVisits(ann);
console.log(usersVisited);
nick=null;
console.log(usersVisited.has(nick));

//using WeakSet for checking user visit the site
const usersVisitedSite=new WeakSet();
for (const user of arrUsers) {
    if(!usersVisitedSite.has(user)){
        usersVisitedSite.add(user);
    }
}
console.log(usersVisitedSite.has(ann));
ann=null;
console.log(usersVisitedSite.has(ann));