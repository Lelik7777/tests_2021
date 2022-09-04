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

console.log(.25*345);
console.log(.25*100);
const factorial = (num) => {
  return num===1?1:num*factorial(num-1);
}

console.log(factorial(5));
console.log(arrUsers.splice(-2,2,'hello','world'));
console.log(arrUsers);
const newArr=arrUsers.splice(0,0);
console.log(newArr);
const pow = (num,degree) => {
  return degree===1?num:num*pow(num,degree-1);
}
console.log(pow(2,3));
const userVisitedCite=new WeakMap();
const countVisitsUser = (user,collection) => {
  let count=collection.get(user)||0;
  collection.set(user,++count);
}
countVisitsUser(bob,userVisitedCite);
countVisitsUser(bob,userVisitedCite);
countVisitsUser(ann,userVisitedCite);
countVisitsUser(bob,userVisitedCite);
countVisitsUser(nick,userVisitedCite);
countVisitsUser(nick,userVisitedCite);
console.log(userVisitedCite);

const cache=new WeakMap();
const process = (obj,collection) => {
    const start=Date.now();
  if(!cache.has(obj)) {
      for (let i=0;i<1e9;i++){}
      cache.set(obj,'some operation with obj');
  }
  return{
      timeOperation:Date.now()-start,
      value:cache.get(obj),
  }
}
console.log(process(userData,cache));
console.log(process(userData,cache));
console.log(process(userData,cache));
