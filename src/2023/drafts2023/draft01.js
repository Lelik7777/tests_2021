//"use strict"
console.log('%cdraft01', 'color:red;font-size:20px');

console.log('hello world,hello world'.replace('world', 'piece'));
['click', 'mouseup'].forEach(ev => window.addEventListener(ev, function () {
    //console.log(ev);
}));
const $footer = document.querySelector('footer');
window.addEventListener('click', function () {
    $footer.scrollIntoView({behavior: "smooth"});
})

function f() {

}

console.dir(function () {

});

function myFunction(name, age) {
    this.name = name;
    this.age = age;
    console.log('this', this);
}

let fakeThis = {a: 1, b: 3}
myFunction.call(fakeThis, 'bob', 23);

console.log('fakeThis', fakeThis);
myFunction.apply(fakeThis, [10, 20])
console.log('fakeThis', fakeThis);

class Hero {
    constructor(heroName) {
        this.heroName = heroName || 'Default';
        let elements = document.getElementsByTagName('button');

        // Добавить callback как обработчика кликов
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', this.log);//decide problem by this.log.bind(this)
        }
    }

    log() {
        console.log(this.heroName);
    }

    //what is difference?
//log=()=>console.log(this.heroName);


    asyncLog() {
        setTimeout(this.log, 5000);//в случае стрелочной ф-ции метода log контекст будет взят извне - в данном случае это будет объект class Hero
    }
}

const batman = new Hero('Batman')
batman.log();
batman.asyncLog();

function f1() {
    console.log('this in f1',this);
}
setTimeout(f1,1000);
const f2=()=>console.log('this in f2',this);
setTimeout(f2,2000);