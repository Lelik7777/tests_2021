import React from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {useState} from 'react';


export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
export type FilterType = 'all' | 'active' | 'completed';

function App() {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'Html&&css', isDone: true},
        {id: 2, title: 'Js', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Angular', isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterType>('all');
    const getFilterTasks = (filer: FilterType) => {
        switch (filer) {
            case 'active':
                return tasks.filter(x => !x.isDone);
            case 'completed':
                return tasks.filter(x => x.isDone);
            default:
                return tasks;
        }
    }
    const removeTask = (id: number) => {
        setTasks(tasks.filter(x => x.id != id));
    }
    const getStatusTasks = (filter:FilterType) => {
      setFilter(filter);
    }
    return (
        <div className="App">
            <TodoList
                data={getFilterTasks(filter)}
                title={'List of technologies'}
                removeTask={removeTask}
                getStatusTasks={getStatusTasks}
            />
        </div>
    );
}

export default App;
