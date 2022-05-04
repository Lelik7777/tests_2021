const Animal=function (prop) {
    this.name=prop.name;
    this.age=prop.age;
    this.barking=function () {
        console.log('barking')
    }
}
const dog=new Animal({name:'boby',age:5});
console.dir(dog);
Animal.prototype.move=()=>{};
