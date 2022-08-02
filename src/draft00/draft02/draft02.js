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
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    __proto__: userAny,
}
let fruits = ["Апельсин", "Груша"];
const camelize = (str) => {

}
console.log('ee-asf-sadf'.split('').filter(x=>x!='-'))
let arr = [5, 3, 8, 1];
console.log(arr.map(x=>x>=1&&x<=4?x:null).filter(x=>x))