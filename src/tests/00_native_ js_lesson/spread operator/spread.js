//spread ...
let s1=[3,4,5];
let s2=[2,...s1,6];
console.log(s2);
//copy array
let s3=[...s1];
console.log(s3);
//concatenation
let s4=[...s1,...s2];
console.log(s4);
// unshift()
s4=[...s4,56,66]
console.log(s4)
//delete dubbing
let s5=[5,5,5,56,6,4,5,6,3];
let s6=[...new Set(s5)];
console.log(s6)
//string
let str='esafssf';
let s7=[...str];
console.log(s7);
//objects
let b1={name:'alex',age:33};
let b2={name:'bob',age:44};
let b3={...b1,...b2};//перезатирание
console.log(b3);
//add property
let b4={...b3,city:'Simferopol'};
console.log(b4);

//... rest
function fun (a,...b){
    console.log(b);
}
fun(44,5,5,5,5,5,[4,4,'a'],'a');
//example with variable
const [a,...b]=[200,44,44,55,66,4];
console.log(a)
console.log(b)

const ar=['bob','alex','sam','ann'];
console.log(ar.some(x=>x=='sam'))//?

const man={name:'bob',age:44,friends:['ann','nick']}
const {name,...rest}=man;
console.log( typeof name)
console.log( typeof rest)
