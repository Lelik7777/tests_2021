const idTodoList1 = 'sdaf33';
const idTodoList2 = 'sdadf43';
const idTodoList3 = 'sdasddsf453';
const todoLists = [
    {id: idTodoList1, title: 'to buy', filter: 'all'},
    {id: idTodoList2, title: 'to read', filter: 'all'},
    {id: idTodoList3, title: 'to see', filter: 'all'},
];
const tasks = {
    [idTodoList1]: [
        {id: 'asd', title: 'milk', isDone: true},
        {id: 'a32sd', title: 'bread', isDone: true},
        {id: '12a4sd', title: 'beer', isDone: false},
    ],
    [idTodoList2]: [
        {id: 'asdsad', title: 'Html', isDone: true},
        {id: 'a32ddsd', title: 'Js', isDone: true},
        {id: 'adfs12a4sd', title: 'React', isDone: false},
    ],

}
console.log(tasks[idTodoList1].filter(x => x.id !== 'asd'));
console.log({...tasks, [idTodoList1]: tasks[idTodoList1].filter(x => x.id !== 'asd')});// с копией объекта удаление
console.log({...tasks, [idTodoList1]: [...tasks[idTodoList1], {id: 'sadf', title: 'vine', isDone: false}]});//добавление таски
//console.log(tasks[idTodoList1]);

//reduce()
const numbers = [1, 3, 4, 5, 6, 7, 8];
console.log(numbers.reduce((a, x) => a + x), 0);
console.log('max value: ' + numbers.reduce((a, x) => a > x ? a : x));
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];
console.log('sum all scores =' + students.reduce((a, x) => a + x.scores, 0));
console.log(students.reduce((a, x) => {
    if (x.scores >= 100) a.push(x);
    return a;
}, []));
console.log(students.reduce((a,x)=>{(x.name==='Nick')&&(x.isMarried=true);return a},[]))
console.log(students[2]);
