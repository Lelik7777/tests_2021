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
        return new Date().getFullYear() - this.age;
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

const obj={
    firstName:'tom',
    lastName:'jonson'
}

obj.getFullName=userData.getFullName;
console.log(obj);
console.log(obj.getFullName());
console.log(obj['getFullName']());

const maskNum = (num) => {
  const str=String(num);
  const length=str.length;
    console.log('123'.padStart(5,'*'))
  return str.slice(-4).padStart(length,'*');
}
console.log(maskNum(3444633754));
const flights00 =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const seeCode=str=>str.slice(0,3).toUpperCase();
for (const flight of flights00.split('+')) {
    const [type,from,to,time]=flight.split(';');
    const output=`${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_',' ')} from ${seeCode(from)}  to ${seeCode(to)} (${time.replace(':','h')})`.padStart(45,' ');
    console.log(output);
}

const set=new Set([arrUsers]);
console.log(set);
console.log([...set]);
console.log(Array.from(set));