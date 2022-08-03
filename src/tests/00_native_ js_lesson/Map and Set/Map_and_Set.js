console.log('%cMap and Set', 'color:blue;font-size:19px;margin-left:200px');

const map = new Map();
console.log(map);
map.set('h1', 100);
map.set(1, 'hello');
map.set(null, 'empty');
map.set(4 + 3, 'empty2');
const obj = {name: 'bob'};
map.set(obj, {age: 33})
console.log(map);

console.log(map.size);
// map.keys(), map.values(),map.entries() - возращают итерируемый объект,который можно прогнать через for..of
for (const keyMap of map.keys()) {
    console.log(keyMap)
}
console.log(Array.from(map.keys()));

// создание Map из обычного объекта

let man = {
    name: "John",
    age: 30
};
const manMap = new Map(Object.entries(man));
console.log(manMap)

// get simple object from Ma

let mapFruits = new Map();
mapFruits.set('banana', 1);
mapFruits.set('orange', 2);
mapFruits.set('meat', 4);
console.log(Object.fromEntries(mapFruits))

//Set - коллекция уникальных значенийi

const set = new Set();
const bob = {name: 'bob'};
set.add(bob);
set.add({name: 'ann'});
set.add({name: 'tom'});
set.add(bob)
console.log(set);
for (const setElement of set) {
    console.log(setElement)
}

//задачи
//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
function unique(arr) {
    const set = new Set();
    arr.forEach(x => set.add(x));
    return Array.from(set);
    //return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values))

//**********************************************************************************************
//WeekMap and WeakSet
//WeekMap - ключи только в виде объектов,которые удаляются,если ссылка на объект исчезает - этим и отличается от Map
//таким образом происходит автоматизация очищения коллекции,когда пропадает ссылка на объект,который был ключом,а с ним
// пропадают и данные,хранящиеся в свойстве с этим ключом
let john = {name: 'john'};
const mapJohn = new Map(Object.entries(john));
const weakMapJohn = new WeakMap();
weakMapJohn.set(john, 'some data about john')
console.log('map john: ', mapJohn);
console.log('weakMap john:', weakMapJohn);
//обратно получить объект из Map
console.log(Object.fromEntries(mapJohn));
//теперь удаляю ссылку на объект,который был помещен в Map
john = null;
//но в Map он остался
console.log('map john: ', mapJohn);
//в случае же с WeakMap он будет удален, но когда, неизвестно, но точно будет удален!
console.log('weakMap john:', weakMapJohn);
//хотя в консоли показывает,что коллекция не обновилась в связи с удалением ссылки на john,но ключа уже такого нет,
//что доказывает,что процесс с автоматически удалением в WeakMap работает!
console.log(weakMapJohn.has(john));

// хранение инфы о количестве посещений юзером
let userBob = {user: 'bob'};
const dataUser = new WeakMap();
const visitSiteByUser = (user) => {
    //проверяю: есть ли в коллекции ключ object user,если нет, то присваиваю count значения ноль
    let count = dataUser.get(user) ?? 0;
    dataUser.set(user, ++count);
}
visitSiteByUser(userBob);
visitSiteByUser(userBob);
visitSiteByUser(userBob);
console.log(dataUser.has(userBob))//true
//теперь я удалю ссылку на объект userBob и все данные о нем в коллекции WeakMap исчезнут автоматически
userBob=null;
console.log(dataUser.has(userBob))//false

// кэширование результатов вызова ф-ции
let someObj={obj:'some object'};
//коллекция WeakMap в данном случае выступает в качестве кэша,где хранятся результаты вызовов ф-ции
let cache=new WeakMap();
const process = (obj) => {
    //если в коллекции cache нет такого объекта в виде ключа, то войти в  if и установить данные в cache
    //иначе,если объект уже есть в коллекции,то сразу же вернуть данные по нем из коллекции
  if(!cache.has(obj)){
      let result='вычисления какие-то для obj';
      cache.set(obj,result);
  }
  return cache.get(obj);
}
//первый вызов ф-ции заполняет данные в кэш, а потом возращаются во вне
process(someObj);
// при повторном вызове данные сразу же берутся уже из кэша,минуя блок с if, где происходит собственно кэширование
process(someObj);
//теперь же удаляем ссылку на объект и кэш автоматически очищается
someObj=null;
console.log(cache.has(someObj))//false

// решение задач
//задача о выборе структуры данных
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
const messagesSet=new WeakSet();
for (const el of messages) {
    messagesSet.add(el)
}
messages.splice(0,3)
console.log(messages)
console.log(messagesSet.has( messages[0]));

// выбор структуры данных - тот же самый массив, но нам нужно знать время прочтения сообщения
//create collection for messages and time of reading
let messages2 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
const messagesRead=new WeakMap();
function readMessages(mes) {
    messagesRead.set(mes,new Date().toLocaleTimeString());
}

for (const el of messages2) {
    setTimeout(()=>readMessages(el),300)
}
console.log(new Date().toLocaleTimeString())
console.log(new Date().toLocaleTimeString())
console.log(messagesRead)