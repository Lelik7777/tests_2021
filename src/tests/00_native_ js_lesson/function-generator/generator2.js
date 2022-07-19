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

function* generateNum(start,end) {
    for(let value=start;value<=end;value++) yield value;
}
function* generatePassword() {
    yield* generateNum(48,57);
    yield* generateNum(65,90);
}
let str='';
for (const number of generatePassword()) {
    str+=String.fromCharCode(number);
}
console.log(str.trim())