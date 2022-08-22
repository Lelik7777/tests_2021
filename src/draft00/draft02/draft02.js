

const checkSimpleNum = (num) => {
    let isSimple = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isSimple = false;
    }
    return isSimple;
};
console.log(checkSimpleNum(7));

function sum(a, b) {
    return a + b;
}

const ar1 = [3, 4, 5, 5, 5];
const ar2 = [2, 3, 45, 6, 7];
console.log([...ar1, ...ar2])
console.log(...ar1)
const promise = new Promise(res => res('promise has done'));
console.log('собственно объект промис: ', promise);
const promise2 = new Promise((res, rej) => rej('promise has rejected'));
console.log('собственно объект промис', promise2)
const promise3 = new Promise(res => {
});
console.log(promise3);
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
console.log(fruits.pop('абрикос'))

let urls2 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://picsum.photos/333',
    'https://no-such-url'
    // new Error('ошибочный url')
];
let bob={name:'bob'};
const tom={name:'tom'};
const ann={name:'ann'};
const nick={name:'nick'};
const arrUsers=[bob,tom,ann,nick]
const text=`it is `;
const siteData=new WeakMap();
for (const el of arrUsers) {
    siteData.set(el,text+el.name);
}

bob=null;
//после этого bob и связанные с этим объектом данные автоматически удаляться
console.log(siteData)
console.log(new Map(Object.entries(userData)));
for (const key in userData) {
    console.log(userData[key])
}

async function f() {
    const res = new Promise(res => res('done'));
    return res;
}

console.log(f());
f().then(res => console.log(res));

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
})
    .catch(alert);
const a = userData?.age;
//по итогу выкинет не ошибку,а вернет undefined
const b = userData?.job?.place?.office;
console.log(a);
console.log(b);
new Promise((res, rej) => {
    throw new Error('error in 79 line')
    // setTimeout(()=>{
    //     throw new Error('error in line 80')
    // },1000);
}).then(res => console.log(res)).catch(er => console.log('error has done: ',er));
console.log((async function () {
   return  await new Promise(res=>res(' async function has done'));
})())
delete fruits[0];
console.log(fruits.length);
console.log(fruits)//['Апельсин', 'Груша', 'абрикос']
console.log(fruits[0]);
fruits.length=19;
console.log(fruits)
console.log(fruits[18]);
console.log(fruits[120]);
//counter for site
const visitedSite=new WeakMap();
function checkUsers(user) {
    let count=visitedSite.get(user)||0;
    visitedSite.set(user,count+1);
}
checkUsers(ann);
checkUsers(tom);
console.log(visitedSite)