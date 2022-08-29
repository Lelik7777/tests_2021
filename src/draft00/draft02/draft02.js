

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



console.log(255..toString(16));

function loadImg(src,callback) {
const img=document.createElement('img');
img.src=src;
img.onload=()=>{
    callback(null,img);
}
img.onerror=()=>callback(new Error('error by loading image'));
document.body.prepend(img);
}
function promiseLoad(src) {
    return new Promise((res,rej)=>{
        loadImg(src,(err,img)=>{
            if(err) rej(err);
            res(img);
        })
    })
};
promiseLoad('https://picsum.photos/400').then(res=>console.log(res.src)).catch(er=>console.log(er));
Object.seal(userData);

userData.job='programmer';
delete userData.age;
userData.age=55;
console.log(userData);
console.log(parseInt('100px'));
const [a,b,c,d]=[3,4,true,'hello'];
console.log(a,b,c,d);
function calculationComplete() {
    const start=Date.now();
    for (let i=0;i<1e10;i++){}
    console.log('time spent :',Date.now()-start,'ms');
}
calculationComplete();
async function funSome() {
    const promise=new Promise(res=>{
        setTimeout(res,3000,'done');
    });
   let res= await promise;
    console.log(res);
}
funSome()