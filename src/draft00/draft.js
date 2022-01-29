

function Test(name){
    this.name=name;
}

let obj1=new Test('alex');
obj1.__proto__.sayHello=function () {
    console.log(`hello ${this.name}`)
}

//let protoObj1=Object.getPrototypeOf(obj1);
    Object.getPrototypeOf(obj1).sayName=function (){
    console.log(`say name ${this.name}`)};
console.dir(obj1)
class TestClass {
    constructor(name) {
    this.name=name;
    }
    sayName(){
        console.log(this.name);
    }
}

let objClass1=new TestClass('alex');
console.log(objClass1)
objClass1.sayName();//?
Object.getPrototypeOf(objClass1).sayGoodBye=function () {
    console.log(`goodbye ${this.name} `)
}
TestClass.prototype.newFun=function () {

}
 delete obj1.name;
console.log(obj1);

let num=112266663335665888888888888;
let obj={}
const findLuckyNum = (num) => {
    debugger

    let obj={};
    num=[...num.toString()];
    console.log(num)
    num.forEach((x,i)=>{
        //debugger
        if(obj[num[i]]){
            obj[num[i]]++;
        }
        else
            obj[num[i]]=1;
    });
    let res=[];
    Object.keys(obj).forEach((x,i)=>{
        debugger
        if(x==Object.values(obj)[i]){
            res.push(x);
        }

    })
    if(!res.length){
        res.push(0);
    }
  let luckyNum= Math.max(...res);
    return luckyNum>0?luckyNum:0;
}
console.log(findLuckyNum(num));//?
const data='user.name.firstName=bob&user.name.lastName=smith&user.favoriteColor=light%20blue&experiments.theme=dark';
const arrStrings=data.split('&');
console.log(arrStrings);
const resObj={};
const arrStrings2=arrStrings.map(x=>x.split('='));
console.log(arrStrings2)
arrStrings2.forEach((x,i)=>{
    x.forEach((x2,i2)=>{
    })
})
console.log('hello')
console.log('hello,world');