import React from 'react';
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
    addTask: (t: string, idL: string) => void;
    changeCheckBox: (id: string, isD: boolean, idL: string) => void;
    filter: FilterType | string;
    valueInput: string;
    setValueInput: (s: string) => void;
    error: boolean;
    setError: (b: boolean) => void;
    removeList: (idL: string) => void;
    addList: (title: string) => void;
}

export function TodoList({
                             idL,
                             data,
                             title0,
                             removeTask,
                             getStatusTasks,
                             addTask,
                             changeCheckBox,
                             filter,
                             valueInput, setValueInput,
                             error, setError,
                             removeList,
                             addList,
                         }: TodoListType) {

    const titleTrim = valueInput.trim();
    const mappedButtons = ['all', 'active', 'completed'].map((x, i) => {
        const callBack = () => filterButton(x, idL);
        return (
            <Button key={i} title={x} callBack={callBack} name={x} filter={filter}/>
        )
    });

    const addTaskOnClick = () => {
        titleTrim && addTask(titleTrim, idL);
        titleTrim && setValueInput('');
        !titleTrim && setError(true);
    }
    const filterButton = (f: FilterType | string, Kid: string) => {
        getStatusTasks(f, idL);
    }
    const callBack1 = () => removeList(idL);
    return (
        <div className={'todoList'}>
            <div style={{display: 'flex', marginBottom: '20px'}}>
                <span style={{fontSize: '1.5rem', fontWeight: 'bolder', marginRight: '5px'}}>
                    {title0}
                </span>
                <Button title={'x'} callBack={callBack1}/>
            </div>
            <div>
                <Input
                    valueInput={valueInput}
                    setValueInput={setValueInput}
                    addTask={addTask}
                    setError={setError}
                    error={error}
                    idL={idL}
                />
                <Button title={'+'} callBack={addTaskOnClick}/>
                {error && <p className={'error-message'}>Title is required</p>}
            </div>
            <MappedUl data={data}
                      removeTask={removeTask}
                      changeCheckBox={changeCheckBox}
                      idL={idL}
            />
            <div>
                {mappedButtons}
            </div>
        </div>
    )
}

