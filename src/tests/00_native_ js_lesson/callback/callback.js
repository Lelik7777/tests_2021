console.log('%cCallbacks', 'font-size:20px;color:blue;')

// пример применение методов append() and prepend()
let div = document.createElement('div');
//вставка элемента в начало body
document.body.prepend(div);
let p = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
p3.innerHTML = 'text in third paragraph';
//одновременная вставка текста,а потом элемента в конец div,т.е. текст будет в диве
let a = div.append('some text in div', p, p2, p3);
//метод append() ничего не возращает
console.log(a)
p.append('some text in p');
let div2 = document.createElement('div');
document.body.appendChild(div2);
const child = div2.appendChild(p2);
//методы appendChild возращает вставляемый узел,принимает только один аргумент
console.log(child)//<p></p>


//эта ф-ция загружает на страницу новый скрипт в конце body

const loadScript = (src, callback) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('загрузка не удалась'))
    //script.addEventListener('load',()=>callback(script))
    console.log(script)
    document.body.append(script);
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (err, value) => {
    if(err){
        //handle error
        console.log(err)
    }else {
        console.log(`скрипт ${value.src} loaded`);
    }


});
loadScript('sdf', (err, value) => {
    if(err){
        //handle error
        console.log(err)
    }else {
        console.log(`скрипт ${value.src} loaded`);
    }
});
console.log('код после вызова ф-ции loadScript')


const funSuper = (text, callback) => {
    console.log(text);
    callback();
}
funSuper('funSuper worked the first time', () => {
    console.log('first callback worked');
    funSuper('funSuper worked the second time', () => {
        console.log('second callback worked')

    });


});
//асинхронный колбэк
const loadPage = async (callback) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.text();
    callback(data);
}
//тоже самое только через then()
const loadPageByThen = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json()).then(data => callback(data));
}

function showData(data) {
    console.log('got server response');
    console.log(data);
}

loadPage(showData);
loadPageByThen(showData);

//пример ада колбэков
const loadPageWithCallbackHell = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => { //внутри этого колбэка снова вызывается fetch
            console.log('got server response');
            console.log(data);
            fetch('https://jsonplaceholder.typicode.com/users/' + data.userId)
                .then(res => res.json())
                .then(data => {
                    console.log('got server response');
                    console.log(data);

                })
        })
}
loadPageWithCallbackHell();
//исправление ада колбэкав
const showDate = (data) => {
    console.log('got server response');
    console.log(data);
}
const loadPageWithoutHell = (url, param1, param2, callback) => {
    fetch(url + param1)
        .then(res => res.json())
        .then(data => {
            callback(data);
            return fetch(url + param2 + data.userId)
        })
        .then(res => res.json())
        .then(data => callback(data))
}
loadPageWithoutHell('https://jsonplaceholder.typicode.com/', 'todos/1', 'users/', showDate)

// create button
const $button = document.createElement('button');
$button.innerHTML = 'say hello'
document.body.prepend($button);


