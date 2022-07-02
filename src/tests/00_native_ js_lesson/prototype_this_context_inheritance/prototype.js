//es5
const Animal=function (prop) {
    this.name=prop.name;
    this.age=prop.age;
    this.hasVoice=function () {
        console.log('base voice from',this.name);
    }
}
const dog=new Animal({name:'palkan',age:5});
console.dir(dog);
console.log(dog.hasOwnProperty('age'))
console.log('/////////////////////////')
for (let key in dog){
    console.log(key)
}
console.log('////////////////////////')
Animal.prototype.move=()=>{
    console.log('entity can move ')};
for (let key in dog){
    console.log(key)
}
console.log('//////////////////////////')
console.log(Animal.prototype);
console.log( dog.move())
const Cat=function (data) {
//arguments- это встроенный параметр для метода .apply()
    Animal.apply(this,arguments);
    this.hasTail=data.hasTail;
    this.type=data.type;
}
//переопределяем прототип класса Cat
Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.constructor=Cat;
const cat=new Cat({name:'pushok',age:2,hasTail:true,type:'cat'});
//если метод опрделен в прототипе, то мы можем его переопределить
Animal.prototype.move=function () {
    console.log(this.name+' move to');
}
Cat.prototype.move=function () {
    console.log('cat '+this.name+' go to')
}
dog.move();
console.log(cat);
console.log(cat.hasVoice())
cat.move()

//es6+
class AnimalNew{
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.isVoice = function () {
            console.log('this voice from ', this.name);
        }
    }

    hasVoice(){
        console.log('base voice from ',this.name);
    }
}

console.log('type of AnimalNew is ', typeof AnimalNew)
const pulkan=new AnimalNew({name:'pulkan',age:7});
console.dir(pulkan);
pulkan.isVoice();
pulkan.hasVoice();


class CatNew extends AnimalNew{
    constructor(props) {
        //обращение к конструктору родительского класса
        super(props);
        this.hasTail=props.hasTail;
        this.type=props.type;
    }
    //переопределение родительского метода
    hasVoice() {
        console.log('changed cat`s voice for ',this.name )
    }
}
const murzik=new CatNew({name:'murzik',age:2,hasTail:true,type:'cat'});
console.dir(murzik);
console.log(murzik.hasVoice());
console.log(murzik.isVoice());
//могу определить новый метод для глобального Object
Object.prototype.whoAreYou=function () {
    console.log('this object is ',this);
}
murzik.whoAreYou();
// add method for global Array
Array.prototype.myMapAndLog=function () {
    console.log('aray for map',this);
    return this.map.apply(this,arguments);
}
console.log([3,4,5,5].myMapAndLog(x=>x**2));
String.prototype.toTag=function (tagName) {
    return `<${tagName}>${this}</${tagName}>`
}
console.log('hello'.toTag('strong'))
console.log(Object.values('hello world'))

console.log('*******************************************************************************************')
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk взят из цепочки прототипов
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (из rabbit);
console.log('before',rabbit.walk());
rabbit.walk=function (){
    console.log('rabbit walk')
}
console.log(animal.walk());
console.log('after',rabbit.walk());
console.log(rabbit)
console.log(longEar)
//this in prototype
let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};
console.log(admin.fullName)
console.log(Object.getOwnPropertyDescriptors(user));