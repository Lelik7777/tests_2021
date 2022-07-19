//ф-ция генератор,когда вызвана, возвращает специальный объект "генератор"


function* generator() {
    yield 1;
    yield 2;
    return 3;
}

// "функция-генератор" создаёт объект "генератор"
let a = generator();
let b=generator();
let c =generator();
console.log(a)
console.log(a.next().value)
console.log(JSON.stringify(a.next(),null,' '))
console.log(a.next())
console.log(a.next())
console.log(a.next())
for (const number of b) {
    console.log(number)
}
//каждый раз вызов ф-ции генератор возвращает новый объект генератор
console.log([...c])
//вторая деструктуризация бессмыслена и вернет пустой массив,поскольку переменная с ,содержащая генератор, была уже использована,
// поэтому при деструктуризации лучше помещать вызов ф-ции генератор
// что гарантирует наличия нового,еще неиспользованного объекта генератор!
console.log([...c])
//или
console.log([...generator()])
//генераторы - это итерируемая сущность,поэтому для перебора можно использовать for of , только нужно использовать
// для возвращения только yield, поскольку return for of не увидит
function* generator2() {
    yield 1;
    yield 2;
    yield 3;
}

const objGenerator2 = generator2();
for (let value of objGenerator2) {
    console.log(value)
}
//также можно использовать spread operator ... , но развернуть я могу лишь вызвов генератора, но не объект,который
//возращает вызванный генератор

console.log([0, ...generator2()]);
const arr = [1, 3, 34];
console.log(Math.max(...arr));
console.log([...'hello'])
const [prev, cur] = ['предыдущий', 'текущий'];
console.log(`prev=${prev} and cur=${cur}`)

function* fibonacci() { // функция-генератор
    let [prev, curr] = [0, 1];
    for (; ;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    // ограничивает последовательность на 1000
    if (n > 1000)
        break;
    console.log(n);
}
for (let n of fibonacci()) {
    if (n > 10) break;
    console.log(n)
}
console.log('**********************************')
var gen = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();
for (let o of gen) {
    console.log(o);
    break;  // Завешение обхода
}

// Генератор нельзя повторно обойти, следующее не имеет смысла!
for (let o of gen) {
    console.log(o); // Не будет вызван
}
let [a0, b0, c0, d0] = [3, 4, 5, 6];
console.log(a0, b0, c0, d0)

//можно извлечь итератор массива
const array = [1, 3, 6, 7, 9];
const iteratorArray = array[Symbol.iterator]();
console.log(iteratorArray);//Array Iterator{}
//console.log(iteratorArray.next())//{value: 1, done: false}
//console.log(iteratorArray.next())//{value: 3, done: false}
//как работает for...of под капотом
const array2 = ['hello', 'my', 'world', '!']
const generatorArray2 = array2[Symbol.iterator]();
let result2 = generatorArray2.next();
while (!result2.done) {
    const el = result2.value;
    console.log(el);
    result2 = generatorArray2.next();
}

// итерируемый объект

const arr1 = [1, 3, 4, 5];
const iterArr1 = arr1[Symbol.iterator]();
let iterStep = iterArr1.next();
console.log(iterStep);
while (!iterStep.done) {
    console.log(iterStep.value);
    iterStep = iterArr1.next();
}
for (const iterStepElement of arr1) {
    console.log(iterStepElement)
}
const obj22 = {a: 3, b: 5, c: 7};
for (const [key, value] of Object.entries(obj22)) {
    console.log(`${key}: ${value}`)
}

class IterableObj extends Object {
    constructor(obj) {
        super();
        Object.assign(this, obj);
    }

    [Symbol.iterator]() {
        let entries = Object.entries(this);
        let index = -1;
        return {
            next() {
                index++;
                return {
                    done: index >= entries.length,
                    value: entries[index]
                }
            }
        }
    }
}

const iterableObj = new IterableObj({a: 3, b: 6, c: 7});
for (const el of iterableObj) {
    console.log(el)
}

// снова генераторы
console.log()
console.log(`%c********************СНОВА ГЕНЕРАТОРЫ******************`,'color:blue');
function* generatorNew() {
    let index=0;
    while(index<10){
        yield index;
        console.log(index);
        index++;
    }
}
const aaa=generatorNew();
console.log(aaa);
while(!aaa.next().done){
    aaa.next();
}
function* getNumber() {
    console.log('start');

    const first = yield 1;
    console.log('first:',first);

    const second = yield 2;
    console.log('second:',second);

    const third = yield 3;
    console.log('third:',third);
}
const iterGetNum=getNumber();

console.log(iterGetNum.next('a'));
console.log(iterGetNum.next('b'));
console.log(iterGetNum.next('c'));
console.log(iterGetNum.next('d'));
console.log(iterGetNum.next('e'))
// for (const number of iterGetNum) {
//     console.log('element of for',number)
// }

//генератот для чисел фибоначчи
function* fibonachi() {
    let[prev,cur]=[0,1];
    while(true){
        [prev,cur]=[cur,prev+cur];
        //console.log(cur);
        yield cur;
    }
}
function numberFibonachi(n,fun){
    for (const number of fun) {
        if(number>n) break;
        console.log(number)
    }
}
numberFibonachi(100,fibonachi());
const result=[0,1];
console.log(result)