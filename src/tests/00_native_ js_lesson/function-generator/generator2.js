console.log('%cGenerator2', 'font-size:20px;color:blue');

// variant range by  iterable object

const range = {
    from: 1,
    to: 4,
    [Symbol.iterator]() {
        return {//здесь я создал анонимный объект с двумя полями и одним методом
            current: this.from,
            last: this.to,
            next() {
                return this.current <= this.last ? {done: false, value: this.current++} : {done: true};
            }
        }
    }
};
for (const number of range) {
    console.log(number)
}
console.log([...range]);
const rangeGenerator = {
    from: 1,
    to: 5,
    * [Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};
for (const number of rangeGenerator) {
    console.log(number)
}

function* genSequenceNum(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json));

async function* getJson(src) {
    let res =  yield  fetch(src);
    let json = yield  res.json();
    //yield json;
}

const iter=getJson('https://jsonplaceholder.typicode.com/todos/1');
let a=iter.next();
let b=iter.next();
let c=iter.next();
console.log(a.value)
console.log(b)
console.log(c)

//реализация возможности yield не только выдавать значения наружу, но и принимать их извне
function* gen001() {
    let res=yield 'return some value';
};
const generator001=gen001();
console.log()

