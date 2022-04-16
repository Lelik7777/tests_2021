//splice
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

//Object.entries() return
const obj={name:'alex',age:44,friends:['bob','ann']};
const arrayFromObj=Object.entries(obj)
console.log(`%carray: %c${  Object.entries(arrayFromObj)}`,'color:red','color:blue');
console.log(Object.entries(obj))