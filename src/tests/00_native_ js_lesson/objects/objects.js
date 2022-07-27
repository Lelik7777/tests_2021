let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sumSal = (obj) => {
    let sum = 0;
    for (const objKey in obj) {
        sum += obj[objKey];
    }
    return sum;
}
console.log(sumSal(salaries));

const multiplyNum = (obj) => {
    for (const objKey in obj) {
        if (typeof obj[objKey] === "number") {
            obj[objKey] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};
multiplyNum(menu)
console.log(menu)

//поскольку когда я копирую переменную,содержащую объект, то я создаю новую ссылку на этот объект
// (обе эти переменные ссылаются на один и тот же объект),поэтому
// я могу через новую переменную мутировать объект
let user = {name: "Иван"};

let admin = user;

console.log(user);
admin.name = 'bob';
console.log(user)

//сравнение объектов
let a = {};
let b = a;// здесь переменные,ссылаются на один и тот же объект, они содержат одинаковые ссылки,поэтому
//при сравнении вернут true
console.log(a === b)//true
//but
let a1 = {};
let b1 = {};
console.log(a1 == b1)// false, поскольку ссылки разные и их сравнение вернет false

//копирование объекта
console.log(menu);
const menu1 = {};
console.log(menu1)
Object.assign(menu1, menu);// этим метод осуществляю копирование - первый аргумент -это целевой объект, а второй -
// это тот объект, чьи свойства будут копироваться в целевой, но при этом ссылка на объект menu1 будет отличаться
//от ссылки на menu
console.log(menu1)
console.log(menu == menu1)// false
let user00 = {name: "Иван"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// копируем все свойства из permissions1 и permissions2 в user
const arrObj = [permissions1, permissions2];
Object.assign(user00, ...arrObj);
console.log('user00', user00);
for (const arrObjKey in menu) {
    console.log(arrObjKey)
}


function f() {

    console.log(this);
}

f();

let user11 = {name: "Джон"};
let admin11 = {name: "Админ"};

function sayHi() {
    alert(this.name);
}

// используем одну и ту же функцию в двух объектах
user11.f = sayHi;
admin11.f = sayHi;
console.log('user11', user11);

// функция-конструктор и оператор new
// по своей сути это то,что в классе называется констурктором, только более древний синтаксис
//есть метод специально для ф-ции-конструктора new.target,который проверяет как была вызвана ф-ция:
//с new или без. Он возращает undefined,если вызвана без new и  собственно ф-цию-конструктор,если с ним
function User(name, age) {
    if (!new.target) {//проверка,как будет вызываться эта ф-ция, по итогу она всегда будет вызываться с оператором new!!!
        return new User(name, age);
    }
    this.name = name;
    this.age = age;
    console.log(new.target);
}

//поэтому оба вызова дадут один и тот же результат
const user1 = new User('bob', 44);
const user2 = User('tom', 33);
console.log(user1);
console.log(user2);

// применение return в ф-ции-конструкторе
function BigUser(name) {

    this.name = name;
   // return 5;
    return {age: 34};  // <-- возвращает этот объект
}

const bigUser = new BigUser('bob');
console.log(bigUser);

function Calculate() {
    this.read = function () {
        this.value1 = +prompt('enter digit');
    }
    this.sum = function () {
        return this.value1 + this.value1;
    }
}

let calculate = new Calculate();
calculate.read();
console.log(calculate.sum());

//

function Accumulator(value) {
    this.value = value;
    this.read = function () {
        this.value += +prompt('enter digit', 0);
    }
}
let accumulator=new Accumulator(4);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
//опциональная цепочка
let obj={};
console.log(obj?.name);// undefined
delete obj?.name;

// symbol
const id1=Symbol('id');
const id2=Symbol('id');
console.log(id1);
console.log(id2);