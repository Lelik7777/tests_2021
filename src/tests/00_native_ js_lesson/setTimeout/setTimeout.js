//arguments of setTimeout: literal or ref function or string

//function literal
const idNumber=setTimeout(function (a,b) {
    console.log(a+b);
},1000,3,4);
//ref function
function fun(a,b) {
    console.log(a*b);
}
setTimeout(fun,2000,45,44);
//string - здесь запускается и работает встроенная ф-я eval
setTimeout('console.log("some text")',3000);
setTimeout('fun(3,4)',4000);

// using bind()
setTimeout(function (arg1,arg2) {
    console.log(arg1+arg2);
}.bind(undefined,10,23),5000)
// delete setTimeout
//clearTimeout(idNumber);

// если в качестве колбэк ф-ции используется метод объекта,
// то this всегда указывает на глобальный объект Window

var x=200;// если объявить через const or let,то вернет undefined
const obj={
    name:'alex',
    x:100,
    getName(){
        console.log('this refer to :',this);
    },
    getNumber(){
        console.log(this.x);
    }
}
obj.getName();// this refer to : {name: 'alex', getName: ƒ}
setTimeout(obj.getName,6000);// this refer to : Window{...}
setTimeout(obj.getNumber,7000);// 200;
//это можно исправить
setTimeout(obj.getName.bind(obj),6000);//this refer to : {name: 'alex', getName: ƒ}

var startTime = new Date();
setTimeout(function () {
    console.log(new Date() - startTime);
}, 10)


var div = document.getElementsByTagName('div')[0];

// Записываем первый метод
for(var i=0xA00000;i<0xFFFFFF;i++) {
    div.style.backgroundColor = '#'+i.toString(16);
}

// Запись второго метода
var timer;
var i=0x100000;

function func() {
    timer = setTimeout(func, 0);
    div.style.backgroundColor = '#'+i.toString(16);
    if (i++ == 0xFFFFFF) clearInterval(timer);
}

timer = setTimeout(func, 0);
