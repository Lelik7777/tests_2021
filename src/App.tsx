import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {v1} from 'uuid';



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
    let [filter, setFilter] = useState<FilterType|string>('all');
    const getFilterTasks = (filer: FilterType|string) => {
        switch (filer) {
            case 'active':
                return tasks.filter(x => !x.isDone);
            case 'completed':
                return tasks.filter(x => x.isDone);
            default:
                return tasks;
        }
    }
    const removeTask = (id: string) => {
        setTasks(tasks.filter(x => x.id !== id));
    }
    const getStatusTasks = (filter: FilterType|string) => {
        setFilter(filter);
    }
    const addTask = (title: string) => {
        setTasks([{id: v1(), title, isDone: false}, ...tasks]);
    }
    return (
        <div className="App">
            <TodoList
                data={getFilterTasks(filter)}
                title={'List of technologies'}
                removeTask={removeTask}
                getStatusTasks={getStatusTasks}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
