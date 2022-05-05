function Animal(data) {
    this.name=data.name;
    this.age=data.age;
}
Animal.prototype.hasVoice=function () {
    console.log(this.name+' has voice')
}
const dog=new Animal({name:'rex',age:3});
const cat=new Animal({name:'murzik',age:1})
console.dir(dog);
dog.hasVoice();
cat.hasVoice();

