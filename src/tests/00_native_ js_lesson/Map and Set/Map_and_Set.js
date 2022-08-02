console.log('%cMap and Set','color:blue;font-size:19px;margin-left:200px');

const map=new Map();
console.log(map);
map.set('h1',100);
map.set(1,'hello');
map.set(null,'empty');
map.set(4+3,'empty2');

console.log(map);
console.log(map.get())