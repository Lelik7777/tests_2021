//примитивы и их "объекты-обертки"
const num = new Number(0);
console.log('num= ', num);
const num1 = Number(0);
console.log('num1= ', num1)
console.log('type of num is ', typeof num);
console.log('type of num1 is ', typeof num1);

console.log(1e5);
console.log(1e-5);
console.log(255..toString(16))
console.log(Math.trunc(2,444545))

console.log("\u{1F60D}" )
console.log('s'.codePointAt(0))
console.log('S'.codePointAt(0))

let str = '';

for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
console.log(str)