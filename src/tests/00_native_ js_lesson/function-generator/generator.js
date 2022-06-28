function* generator(){
    yield 1;
    yield 2;
    return 3;
}

let a=generator();
console.log(a)
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
//генераторы - это итерируемая сущность,поэтому для перебора можно использовать for of , только нужно использовать
// для возвращения только yield, поскольку return for of не увидит
function* generator2(){
    yield 1;
    yield 2;
    yield 3;
}
const objGenerator2=generator2();
for (let value of objGenerator2){
    console.log(value)
}
//также можно использовать spread operator ... , но развернуть я могу лишь вызвов генератора, но не объект,который
//возращает вызванный генератор

console.log([0,...generator2()]);
const arr=[1,3,34];
console.log(Math.max(...arr));
console.log([...'hello'])
const[prev,cur]=['предыдущий','текущий'];
console.log(`prev=${prev} and cur=${cur}`)

function* fibonacci() { // функция-генератор
    let [prev, curr] = [0, 1];
    for (;;) {
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
for (let n of fibonacci()){
    if(n>10) break;
    console.log(n)
}
console.log('**********************************')
var gen = (function *(){
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

console.log('hello world'.split(' '))
const [firstWord,secondWord]='hello world'.split(' ');
console.log(firstWord, secondWord)
const [aa,,,bb,cc]='hello';
console.log(aa,bb,cc);
const [one,sec,third]=new Set([1,3,4]);
console.log(one,sec,third);
const options={
    title:'menu',
}
const{title,width:w=100}=options;
console.log(title,w)
console.log(options);
let options2 = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
const {
    size:{width,height},
    items:[cake,donut],
    extra
}=options2;
console.log(width,height,cake,donut,extra)
