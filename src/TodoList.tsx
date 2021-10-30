import React, {useState} from 'react';
import {FilterType, TaskType} from './App';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {MappedUl} from './components/MappedUl';

export type TodoListType = {
    data: TaskType[];
    title0: string;
    removeTask: (id: string) => void;
    getStatusTasks: (f: FilterType | string) => void;
    addTask: (t: string) => void;
}

export function TodoList({data, title0, removeTask, getStatusTasks, addTask}: TodoListType) {
    const [title, setTitle] = useState<string>('');
    const titleTrim = title.trim();
    const mappedButtons = ['all', 'active', 'completed'].map(x => {
        const callBack = () => filterButton(x);
        return (
            <Button title={x} callBack={callBack}/>
        )
    });

    const addTaskOnClick = () => {
        if (titleTrim) {
            addTask(titleTrim);
            setTitle('')
        }
    }
    const filterButton = (f: FilterType | string) => {
        getStatusTasks(f);
    }


    return (
        <div className={'todoList'}>
            <h1>{title0}</h1>
            <div>
                <Input title={title} setTitle={setTitle} addTask={addTask}/>
                <Button title={'+'} callBack={addTaskOnClick}/>
            </div>
            <MappedUl data={data} removeTask={removeTask}/>
            <div>
                {mappedButtons}
            </div>
        </div>
    )
}

