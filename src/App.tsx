import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {v1} from 'uuid';
//import {solution1} from './tests/00_codewars/test01';

//solution1();
export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}
export type FilterType = 'all' | 'active' | 'completed';

function App() {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'Html&&css', isDone: true},
        {id: v1(), title: 'Js', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Angular', isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterType | string>('all');
    const getFilterTasks = (filer: FilterType | string): TaskType[] => {
        switch (filer) {
            case 'active':
                return tasks.filter(x => !x.isDone);
            case 'completed':
                return tasks.filter(x => x.isDone);
            default:
                return tasks;
        }
    }
    const removeTask = (id: string): void => {
        setTasks(tasks.filter(x => x.id !== id));
    }
    const getStatusTasks = (filter: FilterType | string): void => {
        setFilter(filter);
    }
    const addTask = (title: string): void => {
        setTasks([{id: v1(), title, isDone: false}, ...tasks]);
    }
    const changeCheckBox = (id: string, isDone: boolean) => {
        setTasks(tasks.map(x => x.id === id ? {...x, isDone: isDone} : x));
    }
    return (
        <div className="App">
            <TodoList
                data={getFilterTasks(filter)}
                title0={'List of technologies'}
                removeTask={removeTask}
                getStatusTasks={getStatusTasks}
                addTask={addTask}
                changeCheckBox={changeCheckBox}
                filter={filter}
            />

        </div>
    );
}

export default App;
