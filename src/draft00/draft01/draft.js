// function Test(name) {
//     this.name = name;
// }
//
// let obj1 = new Test('alex');
// obj1.__proto__.sayHello = function () {
//     console.log(`hello ${this.name}`)
// }
//
// //let protoObj1=Object.getPrototypeOf(obj1);
// Object.getPrototypeOf(obj1).sayName = function () {
//     console.log(`say name ${this.name}`)
// };
// console.dir(obj1)
//
// class TestClass {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// let objClass1 = new TestClass('alex');
// console.log(objClass1)
// objClass1.sayName();//?
// Object.getPrototypeOf(objClass1).sayGoodBye = function () {
//     console.log(`goodbye ${this.name} `)
// }
// TestClass.prototype.newFun = function () {
//
// }
// delete obj1.name;
// console.log(obj1);
//
// let num = 112266663335665888888888888;
// let obj = {}
// const findLuckyNum = (num) => {
//
//     let obj = {};
//     num = [...num.toString()];
//     console.log(num)
//     num.forEach((x, i) => {
//         //debugger
//         if (obj[num[i]]) {
//             obj[num[i]]++;
//         } else
//             obj[num[i]] = 1;
//     });
//     let res = [];
//     Object.keys(obj).forEach((x, i) => {
//         if (x == Object.values(obj)[i]) {
//             res.push(x);
//         }
//
//     })
//     if (!res.length) {
//         res.push(0);
//     }
//     let luckyNum = Math.max(...res);
//     return luckyNum > 0 ? luckyNum : 0;
// }
// console.log(findLuckyNum(num));//?
// const data = 'user.name.firstName=bob&user.name.lastName=smith&user.favoriteColor=light%20blue&experiments.theme=dark';
// const arrStrings = data.split('&');
// console.log(arrStrings);
// const resObj = {};
// const arrStrings2 = arrStrings.map(x => x.split('='));
// console.log(arrStrings2)
// arrStrings2.forEach((x, i) => {
//     x.forEach((x2, i2) => {
//     })
// })
// console.log('hello')
// console.log('hello,world');
//
// function fun() {
//     return this.name;
//
// }
//
// let name = 'bob';
// const user = {
//     name: 'alex',
//     getName: () => {
//         console.log('user ' + this.name)
//     }
// }
// let group = {
//     name: 'alex',
//     friends: ['ann', 'bob'],
//     showFriends: function () {
//         this.friends.forEach(function (s) {
//             console.log(`${this.name}: ${s}`)
//         })
//     }
// }
// group.showFriends();
//
// function User() {
//
// }
//
// User.prototype.showName = function () {
//     console.log(this.name);
// }
// User.prototype.name = 'prototype';
// const user11 = new User();
// User.prototype = {
//     name: 'new prototype',
//     showNewName() {
//         console.log(this.name);
//     }
// }
//
// let obj11 = {};
// let obj12 = obj11;
//
// function A() {
//     return obj11;
// }
//
// function B() {
//     return obj11;
// }
//
// const a = new A();
// const b = new B();
// console.log(a === b)
// console.log(obj12 === obj11);
//
// function Calculator() {
//
//     this.read = function () {
//         this.a = +prompt('enter first number', 0);
//         this.b = +prompt('enter second number', 0);
//     }
//     this.sum = function () {
//         return this.a + this.b;
//     }
// }
//
// const solution = new Calculator();
// solution.sum()
//
// function Accum(value) {
//     this.value = value;
//     this.read = function () {
//         this.value += (+prompt('enter number', 0));
//     }
//
// }
//
// const accum = new Accum(1);
// accum.read();
// accum.read();
// console.log(accum.value)
// window.alert('hello')
// const promise = new Promise((res, rej) => {
//     setTimeout(() => res('done'), 1000);
// })
// console.log(promise)
// const prom = new Promise((res, rej) => {
//     console.log('Promise is created');
// })
// console.log(prom)
//
// const checkSimpleNum = (n) => {
//     let flag = true;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             flag = false;
//         }
//     }
//     return flag;
// }
// const checkNum = (num) => {
//     let count = 0;
//     for (let i = 2; i <= num; i++) {
//         let flag = checkSimpleNum(i);
//         flag && count++;
//     }
//     return count;
// }
// console.log(checkNum(11));
//
// //каррирование
// function curry(func) {
//
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function(...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
//
// }
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// //alert( curriedSum(1, 2, 3) );
// alert( curriedSum(1)(2,3) );
// alert( curriedSum(1)(2)(3) );// 6, всё ещё можно вызывать нормально