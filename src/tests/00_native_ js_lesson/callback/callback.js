console.log('%cCallbacks', 'font-size:20px;color:blue;')

// пример применение методов append() and prepend()
let div = document.createElement('div');
//вставка элемента в начало body
document.body.prepend(div);
let p = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
//одновременная вставка текста,а потом элемента в конец div,т.е. текст будет в диве
let a=div.append('some text in div', p, p2, p3);
//метод append() ничего не возращает
console.log(a)
p.append('some text in p');
let div2=document.createElement('div');
document.body.appendChild(div2);
const child=div2.appendChild(p2);
//методы appendChild возращает вставляемый узел,принимает только один аргумент
console.log(child)//<p></p>


//эта ф-ция загружает на страницу новый скрипт в конце body

const loadScript =  (src, callback) => {
    const script = document.createElement('script');
    script.src = src;

   script.onload =() => callback(null,script);
   script.onerror=()=>callback(new Error('загрузка не удалась'))
    //script.addEventListener('load',()=>callback(script))
    console.log(script)
    document.body.append(script);
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (err,value) => {
    console.log(`скрипт ${value.src} loaded`);

});
loadScript('sdf',(err,value)=>console.log(err))
console.log('код после вызова ф-ции loadScript')
console.log(process.pid)
