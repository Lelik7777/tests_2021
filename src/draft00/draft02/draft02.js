

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

const visitSite=new WeakMap();
const countVisitsUsers = (user) => {
let count=visitSite.get(user)||0;
visitSite.set(user,++count)
}
countVisitsUsers(tom);
countVisitsUsers(tom);
countVisitsUsers(ann);
countVisitsUsers(ann);
countVisitsUsers(nick);
console.log(visitSite)
const newDiv=document.createElement('div');
newDiv.innerHTML='hello! it is new div';
newDiv.style.backgroundColor='yellow';
newDiv.style.marginTop='20px';
document.body.append(newDiv);
newDiv.remove();

const objIterable={
    from:1,
    to:6,
    *[Symbol.iterator](){
        for (let i=this.from;i<=this.to;i++){
            yield i;
        }
    }
}
console.log(Array.from(objIterable));
function f(a,b,...rest) {
    console.log(arguments);
    console.log(Array.from(arguments));
}
f(3,4,5,6,7,8,8,);

console.log(Math.round(Math.random()*10));
const weakSet=new WeakSet();

async function asyncFun() {
    const promise=new Promise(res=>{
        setTimeout(res,2000,'done');
    });
    const res=await promise;
    console.log(res);
};
asyncFun()

async function f1() {
    let promise=new Promise(res=>{
        setTimeout(res,3000,'done promise in f1');
    });
    let res=await promise;
    console.log(res);

}
f1();

const cach=new WeakMap();
const process = (obj) => {
    let start=Date.now();
    let current=Date.now();
  if(!cach.has(obj)){
      for (let i=0;i<1e9;i++){}
      current=Date.now();
      let value='some calculations';
      cach.set(obj,value);
  }
  return{
      0:cach.get(obj),
      1:current-start,
  }
}
console.log(process(userData));
console.log(process(userData));
console.log(process(userData));


