const sum = (num,quantity) => {
  let res=0;
  for (let i=1;i<=quantity;i++){
      res+=num;
  }
  return res;
}
console.log(sum(4,3));
const sum2 = (num,quan) => {
  if(quan===1)return num;
  return num+sum2(num,quan-1)
}
console.log(sum2(4,5));
{
    console.log(typeof not)
    console.log(typeof nameIs)
    let name='nick';
}

//let a = fff(); // =>ReferenceError
//console.log(a)
const b = 2;
function fff() { return b; }


function fun32(a=b,b) {

}
//fun32(undefined,4)//=>ReferenceError

eval(' alert("say hello")')

let a = 'Hello World!';
console.log(a)
function first() {
    console.log('Inside first function');
    second();
    console.log('Again inside first function');
}
function second() {
    console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
