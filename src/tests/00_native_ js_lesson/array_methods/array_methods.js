const red='color:red';
const blue='color:blue';
//splice change array has start, deleted quan, added items
const array=[1,3,4,5,6,7,6]
const removeArr=array.splice(2,0,'hello')
console.log(array)
const removeArr2=array.splice(2,1,'new hello');
console.log(array)
console.log(removeArr);

// concat return  joined  array  or copy
const  joinedArr=array.concat(['cat','dog']);
const copy=array.concat();
console.log(joinedArr)
console.log(copy==array)
console.log('%ctype of copy: ','color:blue'+typeof copy)

//indexOf return index or -1
const index=array.indexOf('new hello');
console.log(index)
console.log(typeof index)

// includes return boolean
const isDog=joinedArr.includes('dog');
console.log(isDog);
const isSeven=array.includes(7);
console.log(isSeven)

//join return string
const string=array.join(' * ');
console.log(string);
console.log(typeof string);

//Object.entries() return 2-D array
const obj={name:'alex',age:44,friends:['bob','ann']};
const arrayFromObj=Object.entries(obj)
console.log(`%carray: %c${  Object.entries(arrayFromObj)}`,'color:red','color:blue');
console.log(Object.entries(obj))

//every return boolean, check all items
const isNumbers=array.every((x)=>typeof x==='number');
console.log(isNumbers);
const arrNum=[1,3,4,5,6,4];
console.log(arrNum.every(x=>typeof x==='number'));

//fill return new array(don`t change length) has start and end(not index but number of item)

const newArrNum=arrNum.fill(2,1,2)
console.log(newArrNum)

//filter return new array of items that have been checked
const filterNum=array.filter(x=>typeof x==='number');
console.log(`%carray: %c${array}`,'color:red','color:blue')
console.log(`%cfilterNum: %c${filterNum}`,red,blue);
//copy
console.log(array.filter(x=>x)==array)


//find return first element or undefined (check incomplete)
console.log(arrNum.find(x=>x===4));
console.log(array.find(x=>typeof x==='string'));

//forEach return undefined
array.forEach(x=>x*x);
console.log(array.forEach(x=>x-3));
console.log(array.forEach(x => console.log('hello')));

//Array.from  return array from array like or iterated object(Map or Set)
console.log(Array.from('hello world'))
const setItems=new Set(['dog','cat',window]);
console.log( typeof setItems)
console.log(Array.from(setItems));

//lastIndexOf return last found element or -1 , second param - find less or equal - antonym indexOf
console.log('hello,world,hello'.lastIndexOf('hello'));
console.log('hello,world,hello'.lastIndexOf('hello',0));
console.log('hello,world,hello'.lastIndexOf('hello',11));
console.log(arrNum)
console.log(arrNum.lastIndexOf(4));
console.log(arrNum.lastIndexOf(4,0));
console.log(arrNum.lastIndexOf(4,2));

//pop return deleted elem
console.log(arrNum.pop());
console.log(arrNum);

//push return length
console.log(arrNum.push(4));
console.log(arrNum);

//reverse return new array
console.log(arrNum.reverse());
console.log(arrNum);
console.log(arrNum.reverse());


//reduce accept callback(accept prev,curr,currIndex,array)
// and initial value(if it isn`t that prev=first value and curr=second value of array)
//return new array
console.log(arrNum.reduce((prev,curr)=>prev+curr,0));
const arrObj=[{x:1},{x:4},{x:5}];
console.log(arrObj.reduce((prev,cur)=>{

   return  prev+cur.x
},10));

// Flattening an Array of Arrays
let mulArray = [[3, 5], [1, 7], [12, 9]];

console.log(mulArray.reduce((acc,curr)=>acc.concat(curr)));

//count instances,properties in object
let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari'];

console.log(myCars.reduce((acc,curr)=>{
   if(curr in acc){
      acc[curr]++;
   }
   else {
      acc[curr]=1;
   }
   return acc;
},{}));
//group objects
let student = [

   { name: 'David', age: 23, hobby: 'fishing' },

   { name: 'Rachel', age: 25, hobby: 'cooking' },

   { name: 'Rahul', age: 22, hobby: 'fishing' }

];
function checkProp(arrObjs,prop) {
   return arrObjs.reduce((acc,curr)=>{
      const key=curr[prop];
      if(!acc[key]){
         acc[key]=[];
      }
      acc[key].push(curr);
      return acc;
   },{});
}

console.log(checkProp(student,'hobby'));
