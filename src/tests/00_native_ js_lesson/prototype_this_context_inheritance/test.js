function Animal(data) {
    this.name=data.name;
    this.age=data.age;
}
Animal.prototype.hasVoice=function () {
    console.log(this.name+' has voice')
}
const dog=new Animal({name:'rex',age:3});
const cat=new Animal({name:'murzik',age:1})
for (let i in dog){
    console.log(`${dog.name} property is`,i)
}
console.log('name is :',dog.hasOwnProperty('name'));
console.log('has voice is',dog.hasOwnProperty('hasVoice'))
console.dir(dog);
dog.hasVoice();
cat.hasVoice();
class Homo {
    constructor(data) {
    this.name=data.name;
    this.age=data.age;
    }
    move(){
    console.log(this.name,'go to ')
}
}
class Boy  extends Homo{
    constructor(data) {
        super(data);
    }
  move(){
      console.log(this.name,'go to school')
  }
}
const man=new Homo({name:'bob',age:20})
console.log(man);
man.move();
const boy=new Boy({name:'alex',age:11});
console.log(boy);

boy.move();
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];
function getStudentName(studentID) {

    for (let student of students) {
        if (student.id == studentID) {
            return student.name;
        }
    }
}
getStudentName(12)
for (const student of students) {
    console.log(student);
}
const person={
    firstName:'bob',
    getName() {
        setTimeout(function (){
            console.log(this.firstName)}.bind(this),1000)
    }
}
person.getName()

