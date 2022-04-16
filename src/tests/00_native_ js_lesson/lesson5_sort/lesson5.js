const array = [2, 43, 5454, 66, 33, 1, 4, 67];
console.log(array)
for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1])
            [array[j], array[j + 1]] = [array[j + 1], array[j]]
    }
}
console.log(array)
const sortArray = (array) => {
    let copy = [...array];
    let arr = [];
    /*for (let i=0;i<array.length;i++){
            arr2[i]=arr.reduce((a,x)=>x<a?a:x);//max
            arr.array_methods(arr.indexOf(Math.max(...arr)),1)
        }*/
    array.forEach((x, i) => {
        arr[i] = copy.reduce((a, x) => x < a ? a : x);
        copy.splice(copy.indexOf(Math.max(...copy)), 1);
    })
    return arr;
}
const arr = [3, 4, 5, 6, 71, 1, 400];
//console.log(sortArray(arr));
const sort2 = (arr) => {
  const copy=[...arr];
  const array=[];
  arr.forEach((x,i)=>{
      array[i]=copy.reduce((a,x)=>x<a?a:x);
      copy.splice(copy.indexOf(Math.max(...copy)),1);
  })
    return array;
}
console.log(sort2(arr));
console.log(arr.reduce((a,x)=>x>a?a:x))
const names = ["Bob", "Alex", "Nick", "Donald", "Joe", "999", "!alex", "Юрий", "!юрий"]
console.log(names.sort());
console.log(arr.sort((x,y)=>y-x));
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

/*console.log(students.sort((a,b)=>{a.scores-b.scores}));*/
console.log(students)
console.log(students.sort((a,b)=>a.name.toLowerCase()<=b.name.toLowerCase()?-1:1));
console.log(students);
