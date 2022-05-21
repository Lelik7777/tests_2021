function f(arg) {
    return function (arg2) {
        return arg+arg2;
    }
};
console.log(f(5)(6))
const fun=f(5);
console.log(fun(5));
console.log(fun(5))
function f1() {
    let a=50;
    return function () {
        console.log(a+=50)
    }
}
const fun1=f1();
fun1()
fun1()
const fun2=f1();
fun2()

function f2(arg) {
    console.log('arg in f2 =',arg)
    function inner(arg2) {
        console.log('arg in inner =',arg)
        arg+=arg2;
        console.log('arg of f2 =',arg)
    }
    return inner;

}

const someFun=f2(5);
//const someFun2=f2(10);
console.log(someFun(5));
console.log(someFun(10))
console.log(someFun(10))
//console.log(someFun2(10))
const a=100;
const func = (callback) => {
  return callback;
}
console.log(func((arg)=>{
    console.log('a= '+a);
    console.log('arg = ',arg);
})(5));
const func2 = (callback) => {
  const a=10;
    callback(a);
}
console.log(func2((arg2)=>{
    console.log('arg2',arg2);
    console.log('a= ',a)
}))
