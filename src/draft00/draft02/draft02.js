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
    'some object': {father: true, name: 'tom', age: 67},
    __proto__: userAny,

    getYearBorn: function () {
    return new Date().getFullYear()-this.age;
    }
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

console.log(userAny);
console.log(Object.create(null, {name: {value: 'bob'}}));
const fibinatti = (num) => {
    return num < 2 ? num : fibinatti(num - 1) + fibinatti(num - 2);
}
console.log(fibinatti(10))

function fibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(10))
for (let i = 0; i <= 10; i++) {
    console.log(fibonacci(i));
}
console.log(userData.getYearBorn())
const pow = (num,degree) => {
  return degree===1?num:pow(num,degree-1)*num;
}
console.log(pow(2,3));
const range = (start,end) => {
  if(end-start==2) return[start+1];
  else {
      const array=range(start,end-1);
      array.push(end-1);
      return array;
  }
}
console.log(range(3,9))




