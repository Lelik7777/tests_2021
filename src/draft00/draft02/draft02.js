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

function User(name) {
    this.name = name;
    return bob;
}

const user1 = new User('tom');
const user2 = new User('nick');
console.log(user1 === user2);
const fun = ({name = 'tom', age = 33, job = 'admin'}) => {
    console.log(` his name is ${name}, age is ${age} and he works a ${job}`);
}
fun({name: 'bob', age: 45, job: 'developer'});
fun({});

const nestedArr=[3,4,[5,6]];
const [a,,[b,c]]=nestedArr;
console.log(a,b,c);
const booking=[];
function createBooking(flightNum,numPassengers=1,price=200*numPassengers) {
    //ES5
    //numPassengers??=3;
    const bookingLoc={flightNum,numPassengers,price};
    booking.push(bookingLoc);
    console.log(booking);
}
createBooking(2,undefined,500);

function maskNum(num) {
    const str=num.toString();
    return str.slice(-4).padStart(str.length,'*');
}

console.log(maskNum(34434343434));