import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {v1} from 'uuid';
import {Button} from './components/Button';
import {AddItemForm} from './components/AddItemForm';
//import {solution1} from './tests/00_codewars/test01';

//solution1();
export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}
export type TasksType = {
    [key: string]: TaskType[];
}
export type FilterType = 'all' | 'active' | 'completed';
export type TodoListType = {
    id: string;
    title: string;
    filter: FilterType | string;
}

function App() {
    console.log('rendering app');
    const id1 = v1();
    const id2 = v1();
    const [todoLists, setTodoLists] = useState<TodoListType[]>([
        {id: id1, title: 'to learn', filter: 'all'},
        {id: id2, title: 'to buy', filter: 'active'},
    ]);

    const [tasks, setTasks] = useState<TasksType>({
        [id1]: [
            {id: v1(), title: 'Html&&css', isDone: true},
            {id: v1(), title: 'Js', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Angular', isDone: false},
        ],
        [id2]: [
            {id: v1(), title: 'milk', isDone: true},
            {id: v1(), title: 'bread', isDone: true},
            {id: v1(), title: 'beer', isDone: false},
        ]
    });
    /* const [valueInput, setValueInput] = useState<string>('');
     const [error, setError] = useState<boolean>(false);*/

    const getFilterTasks = (filer: FilterType | string, idL: string): TaskType[] => {
        switch (filer) {
            case 'active':
                return tasks[idL].filter(x => !x.isDone);
            case 'completed':
                return tasks[idL].filter(x => x.isDone);
            default:
                return tasks[idL];
        }
    }
    const removeTask = (id: string, idL: string): void => {
        setTasks({...tasks, [idL]: tasks[idL].filter(x => x.id !== id)});
    }
    const getStatusTasks = (filter: FilterType | string, idL: string) => {
        setTodoLists(todoLists.map(x => x.id === idL ? {...x, filter} : x));
    }
    const addTask = (title: string, idL: string): void => {
        const newTask: TaskType = {id: v1(), title, isDone: false};
        setTasks({...tasks, [idL]: [...tasks[idL], newTask]});
    }
    const changeCheckBox = (id: string, isDone: boolean, idL: string) => {
        setTasks({...tasks, [idL]: tasks[idL].map(x => x.id === id ? {...x, isDone} : x)});

    }
    const removeList = (idL: string) => {
        setTodoLists(todoLists.filter(x => x.id !== idL));
        delete tasks[idL];
    }
    const addList = (title: string) => {
        const newList: TodoListType = {id: v1(), title, filter: 'all'};
        setTodoLists([...todoLists, newList]);
        setTasks({...tasks, [newList.id]: []});
    }
    const changeTitleList = (t:string,idL:string) => {

    }
    const mappedList = todoLists.map(x => <
        TodoList
        key={x.id}
        idL={x.id}
        data={getFilterTasks(x.filter, x.id)}
        title0={x.title}
        removeTask={removeTask}
        getStatusTasks={getStatusTasks}
        addTask={addTask}
        changeCheckBox={changeCheckBox}
        filter={x.filter}
        removeList={removeList}
        addList={addList}
    />);
    return (
        <div className="App">
            <AddItemForm callBack={addList} titleButton={'add'}/>
            {
                mappedList
            }


        </div>
    );
}

export default App;
