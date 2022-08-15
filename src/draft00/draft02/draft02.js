
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

let urls2 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://picsum.photos/333',
    'https://no-such-url'
    // new Error('ошибочный url')
];
const promiseFun = (src) => {
  return new Promise((res,rej)=>{
  loadImg(src,(err,img)=>{
      if(err) rej(err);
      else res(img)
  })
  })
};
function loadImg(src,callback) {
    const img=document.createElement('img');
    img.src=src;
    img.onload=()=>callback(null,img);
    img.onerror=()=>callback(new Error(`error when loaded img with src= ${src}`));
    document.body.append(img);
};
promiseFun('https://picsum.photos/344').then(img=>console.log(`img ${img} loaded wiht src= ${img.src}`)).catch(er=>console.log(er));
for (const keys in userData) {
    if(userData.hasOwnProperty(keys))console.log(keys)
}