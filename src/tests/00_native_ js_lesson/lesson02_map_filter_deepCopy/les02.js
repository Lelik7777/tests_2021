const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
const names = students.map(x => ({name: x.name}));//?
console.log(names);

function getName(obj) {
    return obj.name;
}

function map(arr, fun) {
    const res = [];
    arr.forEach(x => res.push(fun(x)));
    return res;// array objects
}

console.log(map(students, getName))//?
function getAgeElder(obj) {
    return obj.age >= 20;
}

console.log(students.filter(x => x.age >= 20))

function filter(arr, fun) {
    const res = [];
    arr.forEach(x => fun(x) ? res.push(x) : 0);
    return res;
}

console.log(filter(students, getAgeElder));//?

console.log(students.find(x => x.name == 'Bob'));

function findNameBob(obj) {
    return obj.name == 'Bob';
}

function find(arr, fun) {
    let element;
    arr.forEach(x => fun(x) ? element = x : 0)
    return element;
}

console.log(find(students, findNameBob));//?

console.log(students.map(x => x));//[...students] поверхностное копирование
console.log(students.map(x => ({...x, isStudents: true})));// deep copy
console.log(students.map(x => ({...x, isS: true})));
console.log(students.map(x => x.name == 'Nick' ? {...x, isMarried: true} : x));
/*if(x.name==='Nick'){
    return {...x,isMarried:true}
}
else return x;*/
let str='hello';
function checkEl(arr,el) {
    if(~str.indexOf(el)){
        console.log('have');
    }
    if(!~str.indexOf(el)){
        console.log('not')
    }
}
checkEl(str,'h');//?
let[a,b,c]=[1,3,4];
console.log(a);//?
const user={
    name:'alex',
    address:{
        city:'Simferopol',
        street:{
            title:'Kirova',
        }
    }
}
const copy={...user,address: {...user.address,street: {...user.address.street}}}
copy.address.street.title='Chehova';
console.log(user.address.street.title)
console.log(copy.address.street.title)