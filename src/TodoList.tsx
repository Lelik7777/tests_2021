import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType, TaskType} from './App';
import {Button} from './components/Button';

export type TodoListType = {
    data: TaskType[];
    title: string;
    removeTask: (id: string) => void;
    getStatusTasks: (f: FilterType | string) => void;
    addTask: (t: string) => void;
}

export function TodoList(props: TodoListType) {
    const [title, setTitle] = useState<string>('');
    const titleTrim = title.trim();
    const mappedList = props.data.map(x => {
        return (
            <li>
                <input type="checkbox" checked={x.isDone}/>
                <span>{x.title}</span>
                <Button title={'x'} fun={() => props.removeTask(x.id)}/>
            </li>
        )
    })
    const mappedButtons = ['all', 'active', 'completed'].map(x => {
        return (
            <Button title={x} fun={() => filterButton(x)}/>
        )
    });

    const addTaskOnClick = () => {
        if (titleTrim) {
            props.addTask(titleTrim);
            setTitle('')
        }
    }
    const filterButton = (f: FilterType | string) => {
        props.getStatusTasks(f);
    }
    const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.currentTarget.value);
    }
    const changeOnKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter' && titleTrim) {
            props.addTask(titleTrim);
            setTitle('');
        }
    }


    return (
        <div className={'todoList'}>
            <h1>{props.title}</h1>
            <div>
                <input
                    value={title}
                    type="text"
                    placeholder={'enter new text'}
                    onChange={onChangeInput}
                    onKeyPress={changeOnKeyPress}
                />
                <Button title={'+'} fun={addTaskOnClick}/>
            </div>
            {mappedList}
            <div>
                {mappedButtons}
            </div>
        </div>
    )
}
