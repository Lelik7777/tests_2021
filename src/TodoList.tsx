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
    changeCheckBox: (id: string, isD: boolean) => void;
    filter: FilterType | string;
}

export function TodoList({data, title0, removeTask, getStatusTasks, addTask, changeCheckBox,filter}: TodoListType) {
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const titleTrim = title.trim();
    const mappedButtons = ['all', 'active', 'completed'].map((x, i) => {
        const callBack = () => filterButton(x);
        return (
            <Button title={x} callBack={callBack} name={x} filter={filter}/>
        )
    });

    const addTaskOnClick = () => {
        /* if (titleTrim) {
             addTask(titleTrim);
             setTitle('')
         }*/
        titleTrim && addTask(titleTrim);
        titleTrim && setTitle('');
        !titleTrim && setError(true);
    }
    const filterButton = (f: FilterType | string) => {
        getStatusTasks(f);
    }


    return (
        <div className={'todoList'}>
            <h1>{title0}</h1>
            <div>
                <Input
                    title={title}
                    setTitle={setTitle}
                    addTask={addTask}
                    setError={setError}
                    error={error}
                />
                <Button title={'+'} callBack={addTaskOnClick} filter={''} name={''}/>
                {error && <p className={'error-message'}>Title is required</p>}
            </div>
            <MappedUl data={data}
                      removeTask={removeTask}
                      changeCheckBox={changeCheckBox}
            />
            <div>
                {mappedButtons}
            </div>
        </div>
    )
}

