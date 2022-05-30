const sum = (num, quantity) => {
    let res = 0;
    for (let i = 1; i <= quantity; i++) {
        res += num;
    }
    return res;
}
console.log(sum(4, 3));
const sum2 = (num, quan) => {
    if (quan === 1) return num;
    return num + sum2(num, quan - 1)
}
console.log(sum2(4, 5));
{
    console.log(typeof not)
    console.log(typeof nameIs)
    let name = 'nick';
}

//let a = fff(); // =>ReferenceError
//console.log(a)
const b = 2;

function fff() {
    return b;
}


function fun32(a = b, b) {

}

//fun32(undefined,4)//=>ReferenceError

//eval(' alert("say hello")')

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
const recursionFun = (x, n) => {
    return n === 1 ? x : x * recursionFun(x, n - 1);
}
console.log(recursionFun(2,4))
let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};
for (let[key,value] of Object.entries(company)){
    console.log(`${key}:${value}`)
}
const entries=Object.entries(company);
for (let i of entries){
    console.log(i)
}
console.log(entries[0][1][0].salary)

const sumSalary = (department) => {

  if(Array.isArray(department)){
      return department.reduce((prev,cur)=>prev+cur.salary,0);
  }else {
      let sum=0;
      for (let subdepart of Object.values(department)){
          sum+=sumSalary(subdepart);
      }
      return sum;
  }

}
console.log(sumSalary(company));
const list={
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:null,
        }
    }
}
list.next.next.next={value:4};
list.next.next.next.next=null;
list.next=list.next.next;
console.log(list);