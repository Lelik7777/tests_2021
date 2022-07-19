console.log('%citerable objects', 'color:blue;font-size:1.2rem');
// создаем итерируемый объект
//у самого объекта range нет метода next(),который присутствует у объекта итератор
//здесь мы разделяем итерируемый объект и собственно итератор
const range = {
    from: 1,
    to: 5,
};
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true};
            }
        }
    }
}
for (const rangeElement of range) {
    console.log(rangeElement)
}
//мы можем создать next()прямо у объекта range для упрощения кода,только через метод [Symbol.iterator] нужно создать
//промежуточную переменную,которую будем изменять в методе next()
const range2 = {
    from: 1,
    to: 4,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        // if (this.current <= this.to) {
        //     return {done: false, value: this.current++}
        // } else {
        //     return {done: true};
        // }
        // the same but by ternary operator
        return this.current <= this.to ? {done: false, value: this.current++} : {done: true};
    }
}
for (const number of range2) {
    console.log(number)
}

//можно обойтись и без цикла for...of , прогнав итерируемый объект через цикл while
let iter=range[Symbol.iterator]();
let res=null;
while (true){
    res=iter.next();
    if(res.done) break;
    console.log(res.value);
}

//А вот объект, который является псевдомассивом, но его нельзя итерировать:

    let arrayLike = { // есть индексы и свойство length => псевдомассив
        0: "Hello",
        1: "World",
        length: 2
    };

console.log(arrayLike);
console.log(Array.from(arrayLike))
console.log(Array.from(range))
//превращение строки с псевдопарами в массив
let str = '𝒳😂';
let pseudoPair='😂';
console.log(Array.from(pseudoPair))
console.log(pseudoPair)
console.log(JSON.stringify(str));
console.log(Array.from(str));
//также я могу в массив превратить обычную стоку этими двумя методами
console.log(Array.from('hello world'));
console.log('hello'.split(''));
//это доказывает,что строки - это итерируемые объекты
const iterString='hello'[Symbol.iterator]();
while (true){
    let res=iterString.next();
    if(res.done) break;
    console.log(res.value);
}