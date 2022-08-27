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


const man={gender:'male'};
const user={name:'bob',job:'programmer',__proto__: man};
console.log(user);
for (const prop in user) {
    console.log(prop);
}
let a=0;
let b=0;
do{
    console.log('show value a=  ',a )
}while(a>0);
console.log(a==true)
console.log(a==false)
while (!a){
    console.log(a);
    if (b>20) break;
    b++;
}
function f(a,b,...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
};
f(4,5,6,7,7,7,7,);
new Promise((res,rej)=>{
   // throw new Error('error');
    setTimeout(function () {
        throw new Error('error');
    },0);
}).catch(er=>console.log(er));