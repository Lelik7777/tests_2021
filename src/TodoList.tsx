import React, {useState} from 'react';
import {FilterType, TaskType} from './App';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {MappedUl} from './components/MappedUl';


export type TodoListType = {
    idL: string;
    data: TaskType[];
    title0: string;
    removeTask: (id: string, idL: string) => void;
    getStatusTasks: (f: FilterType | string, idL: string) => void;
    addTask: (t: string) => void;
    changeCheckBox: (id: string, isD: boolean) => void;
    filter: FilterType | string;
}

export function TodoList({
                             idL,
                             data,
                             title0,
                             removeTask,
                             getStatusTasks,
                             addTask,
                             changeCheckBox,
                             filter
                         }: TodoListType) {
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const titleTrim = title.trim();
    const mappedButtons = ['all', 'active', 'completed'].map((x, i) => {
        const callBack = () => filterButton(x, idL);
        return (
            <Button key={i} title={x} callBack={callBack} name={x} filter={filter}/>
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
    const filterButton = (f: FilterType | string, id: string) => {
        getStatusTasks(f, idL);
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
                <Button title={'+'} callBack={addTaskOnClick}/>
                {error && <p className={'error-message'}>Title is required</p>}
            </div>
            <MappedUl data={data}
                      removeTask={removeTask}
                      changeCheckBox={changeCheckBox}
                      idl={idL}
            />
            <div>
                {mappedButtons}
            </div>
        </div>
    )
}

