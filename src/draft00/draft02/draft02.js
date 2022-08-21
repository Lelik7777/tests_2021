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
//promise chain
const prom1 = new Promise(res => res(1));
const prom2 = new Promise(res => res(2));
const prow3 = new Promise((res, rej) => rej(new Error('error')));
prom1.then(res => {
    console.log(res);
    return prom2
}).then(res => {
    console.log(res);
    return prow3
}).then(res => console.log(res)).catch(er => console.log(er));
let weakMap1 = new WeakMap();
const bob = {name: 'bob'};
weakMap1.set(bob, 'name is bob');
weakMap1.set(userData, 'user data')
console.log(weakMap1);
console.log(weakMap1.has(bob));
console.log(weakMap1.has(userData));
console.log(weakMap1.get(bob));
console.log('age' in userData);
console.log('job' in userData);
const mapN = new Map(Object.entries(userData));
console.log(mapN);
for (const el of Object.entries(userData)) {
    console.log(el);
}
console.log(Object.entries(userData));
//промисификация
const loadImg = (src, callback) => {
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.innerHTML = 'you can see new image';
    img.src = src;
    img.onload = () => {
        callback(null,img)
        document.body.prepend(p, img);
    };
    img.onerror = () => callback(new Error('error when loaded image'));

}
const createPromise = (src) => {
    return new Promise((res, rej) => {
        loadImg(src, (err, img) => {
            if (err) rej(err);
            else {
                res(img);
            }
        })
    })
};
createPromise('https://picsum.photos/344')
    .then(res => console.log(`image with src= ${res.src} loaded successfully`))
    .catch(er => console.log('error is',er));
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 6000));

    return 10;
}

console.log(wait())

