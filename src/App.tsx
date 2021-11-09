import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {v1} from 'uuid';
import {MyTestComponent} from './components/MyTestComponent';
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
export type TodoList = {
    id: string;
    title: string;
    filter: FilterType | string;
}

function App() {
    const [todoLists, setTodoLists] = useState<TodoList[]>([
        {id: v1(), title: 'to learn', filter: 'all'},
        {id: v1(), title: 'to buy', filter: 'active'},
    ]);
    const [tasks, setTasks] = useState<TasksType>(
        {
            [todoLists[0].id]: [
                {id: v1(), title: 'Html&&css', isDone: true},
                {id: v1(), title: 'Js', isDone: true},
                {id: v1(), title: 'React', isDone: false},
                {id: v1(), title: 'Angular', isDone: false},
            ],
            [todoLists[1].id]: [
                {id: v1(), title: 'milk', isDone: true},
                {id: v1(), title: 'bread', isDone: true},
                {id: v1(), title: 'beer', isDone: false},
            ]
        });
    // const [filter, setFilter] = useState<FilterType | string>('all');
    const getFilterTasks = (filer: FilterType | string,idL:string): TaskType[] => {
        switch (filer) {
            case 'active':
                return tasks[idL].filter(x => !x.isDone);
            case 'completed':
                return tasks[idL].filter(x => x.isDone);
            default:
                return tasks[idL];
        }
    }
    const removeTask = (id: string,idL:string): void => {
        tasks=tasks
        setTasks(tasks);
    }
    const getStatusTasks = (filter: FilterType | string, idL: string) => {
        setTodoLists(todoLists.map(x => x.id === idL ? {...x, filter} : x));
    }
    const addTask = (title: string): void => {
        setTasks([{id: v1(), title, isDone: false}, ...tasks]);
    }
    const changeCheckBox = (id: string, isDone: boolean) => {
        setTasks(tasks.map(x => x.id === id ? {...x, isDone: isDone} : x));
    }
    return (
        <div className="App">
            {
                todoLists.map(x => <
                    TodoList
                    key={x.id}
                    idL={x.id}
                    data={getFilterTasks(x.filter)}
                    title0={x.title}
                    removeTask={removeTask}
                    getStatusTasks={getStatusTasks}
                    addTask={addTask}
                    changeCheckBox={changeCheckBox}
                    filter={x.filter}
                />)
            }

            <MyTestComponent/>
        </div>
    );
}

export default App;
