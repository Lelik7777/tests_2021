

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
console.log(a===b)//true
//but
let a1={};
let b1={};
console.log(a1==b1)// false, поскольку ссылки разные и их сравнение вернет false

//копирование объекта
console.log(menu);
const menu1={};
console.log(menu1)
Object.assign(menu1,menu);// этим метод осуществляю копирование - первый аргумент -это целевой объект, а второй -
// это тот объект, чьи свойства будут копироваться в целевой, но при этом ссылка на объект menu1 будет отличаться
//от ссылки на menu
console.log(menu1)
console.log(menu==menu1)// false
let user00 = { name: "Иван" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
const arrObj=[permissions1,permissions2];
Object.assign(user00,...arrObj);
console.log('user00',user00);
for (const arrObjKey in menu) {
    console.log(arrObjKey)
}



function f() {

    console.log(this);
}
f();

let user11 = { name: "Джон" };
let admin11= { name: "Админ" };

function sayHi() {
    alert( this.name );
}

// используем одну и ту же функцию в двух объектах
user11.f = sayHi;
admin11.f = sayHi;
console.log('user11',user11)