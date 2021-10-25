import React from 'react';
import {FilterType, TaskType} from './App';

export type TodoListType = {
    data: TaskType[];
    title: string;
    removeTask: (id: number) => void;
    getStatusTasks: (f: FilterType) => void;
}

export function TodoList(props: TodoListType) {
    const statusAll = () => {
        props.getStatusTasks('all');
    }
    const statusActive = () => {
        props.getStatusTasks('active');
    }
    const statusCompleted = () => {
        props.getStatusTasks('completed');
    }
    return (
        <div className={'todoList'}>
            <h1>{props.title}</h1>
            <div>
                <input type="text" placeholder={'enter new text'}/>
                <button>+</button>
            </div>
            <ul>
                {props.data.map(x => {
                    const removeTaskByBut = () => {
                        props.removeTask(x.id);
                    }
                    return (
                        <li>
                            <input type="checkbox" checked={x.isDone}/>
                            <span>{x.title}</span>
                            <button onClick={removeTaskByBut}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={statusAll}>All</button>
                <button onClick={statusActive}>Active</button>
                <button onClick={statusCompleted}>Completed</button>
            </div>
        </div>
    )
}