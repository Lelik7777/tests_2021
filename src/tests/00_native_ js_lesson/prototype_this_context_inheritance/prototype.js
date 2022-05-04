const Animal=function (prop) {
    this.name=prop.name;
    this.age=prop.age;
    this.hasVoice=function () {
        console.log('base voice from',this.name);
    }
}
const dog=new Animal({name:'palkan',age:5});
console.dir(dog);
Animal.prototype.move=()=>{
    console.log('entity can move ')};
console.log(Animal.prototype);
console.log( dog.move())
const Cat=function (data) {

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


