let arr=[2,4,5];
console.log(arr.indexOf(5));//?
console.log(arr.includes())
let num=112223334455666777888
let obj={}
console.log(num.toString().split(',').forEach((x,i)=>{
    if(obj[x[i]]){
        obj[x[i]]++;
    }
    else obj[x[i]]=1;
    return obj;
}))//?
