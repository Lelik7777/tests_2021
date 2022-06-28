// деструктуризация массива
const phrase = 'hello world';
const [firstWord, secondWord] = phrase.split(' ');
console.log(firstWord, secondWord);// hello world

//method split может принимать регулярные выражения
var names = 'Гарри Трамп ;Фрэд Барни; Хелен Ригби ; Билл Абель ;Крис Ханд ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);
//пример с применением rest operator
const [gary, fred, ...rest] = nameList;
console.log(nameList);
console.log(gary, fred, rest)
//пример с ограничением подстрок в методе split
var myString = 'Привет, мир. Как дела?';
var splits = myString.split(' ', 3);

console.log(splits);

//используя запятые,можно пропускать некоторые элементы массива,а также не учитывать последние элементы
// второй элемент не нужен
let [firstName, , title1] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title1); // Consul

// можем осуществлять деструктуризацию любого перебираемого объекта
const [one, second, third] = new Set([1, 3, 4]);
const [a, b, c] = 'abc';
console.log(one, second, third);
console.log(a, b, c);

//при помощи деструктуризации можно объявлять и инициализировать переменные
const [a1, b2 = 2, c1 = 3] = []
console.log(a1, b2, c1);

//деструктуризация объектов

let options = {
    title: "Menu",
    width: 100,
    height: undefined
};

// мы можем через : переименовывать название свойства объекта,а также задвать значения по умолчанию
let {width: w, height: h = 100, title} = options;
console.log(w, h, title);
//также можем нужные ключи проинициализировать,а остальное засунуть в объект
let {title: t, ...others} = options;
console.log(t, others)// others={width:100,height:undefined}
//вложенная деструктуризация
let options2 = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
    size: { // положим size сюда
        width,
        height
    },
    items: [item1, item2], // добавим элементы к items
    title2 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options2;
console.log(width, height, item1, item2, title2);
// деструктуризацию можно использовать,передавая параметры в ф-цию в виде объекта
//функция сама осуществляет деструктуризацию переданного объекта,беря то,что есть из объекта, а если
//чего-то нет, то из параметров по умолчанию
console.log('**********************************')

function showSome({title = 'some title', width = 50, height = 150, items = []}) {
    console.log(title, width, height, items)
}

showSome(options)
showSome(options2);
console.log('as sda sd dsaf '.split())

//examples
let user = {
    name: "John",
    years: 30
};
const {name, years: age, isAdim = false} = user;
console.log(name, age, isAdim)
//У нас есть объект salaries с зарплатами:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
function topSalary(obj) {
    //if (Object.values(obj).length === 0) return null;
    let maxSal = 0;
    let menWithMaxSal = null;
    for (const [key, value] of Object.entries(obj)) {
        if (maxSal < value) {
            maxSal = value;
            menWithMaxSal = key;
        }
    }
    return menWithMaxSal;
}

console.log(topSalary(salaries));
console.log(topSalary({}))