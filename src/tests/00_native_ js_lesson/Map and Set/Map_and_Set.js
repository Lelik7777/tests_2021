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

const set=new Set();
const bob={name:'bob'};
set.add(bob);
set.add({name:'ann'});
set.add({name:'tom'});
set.add(bob)
console.log(set);
for (const setElement of set) {
    console.log(setElement)
}