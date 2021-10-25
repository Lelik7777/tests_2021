import React, {ChangeEvent, useState} from 'react';
import {FilterType, TaskType} from './App';

export type TodoListType = {
    data: TaskType[];
    title: string;
    removeTask: (id: string) => void;
    getStatusTasks: (f: FilterType) => void;
    addTask: (t: string) => void;
}

export function TodoList(props: TodoListType) {
    let [title, setTitle] = useState<string>('');
    const statusAll = () => {
        props.getStatusTasks('all');
    }
    const statusActive = () => {
        props.getStatusTasks('active');
    }
    const statusCompleted = () => {
        props.getStatusTasks('completed');
    }
    const addTaskOnClick = () => {
debugger
        props.addTask(title);
        setTitle('');
        props.addTask(title);
    }
    const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.currentTarget.value);
    }
    return (
        <div className={'todoList'}>
            <h1>{props.title}</h1>
            <div>
                <input
                    type="text"
                    placeholder={'enter new text'}
                    onChange={onChangeInput}
                />
                <button onClick={addTaskOnClick}>+</button>
            </div>
            <ul>
                {props.data.map(x => {
                    const removeTaskByBut = () => {
                        props.removeTask(x.id);
                    }
                    return (
                        <li key={x.id}>
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