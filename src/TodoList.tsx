import React from 'react';
import {FilterType, TaskType} from './App';
import {Button} from './components/Button';
import {MappedUl} from './components/MappedUl';
import {AddItemForm} from './components/AddItemForm';
import {EditedSpan} from './components/EditedSpan';


export type TodoListType = {
    idL: string;
    data: TaskType[];
    title0: string;
    removeTask: (id: string, idL: string) => void;
    getStatusTasks: (f: FilterType | string, idL: string) => void;
    addTask: (t: string, idL: string) => void;
    changeCheckBox: (id: string, isD: boolean, idL: string) => void;
    filter: FilterType | string;
    removeList: (idL: string) => void;
    addList: (title: string) => void;
    changeTitleList: (t: string, idL: string) => void;
    changeTitleTask: (t: string, id: string, idL: string) => void;
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
                             removeList,
                             changeTitleList,
                             changeTitleTask,
                             ...props
                         }: TodoListType) {

    console.log('todoList rendering');
    const mappedButtons = ['all', 'active', 'completed'].map((x, i) => {
            const callBack = () => filterButton(x, idL);
            return (
                <Button key={
                    i
                }
                        title=
                            {
                                x
                            }
                        callBack=
                            {
                                callBack
                            }
                        name=
                            {
                                x
                            }
                        filter=
                            {
                                filter
                            }
                />
            )
        })
    ;

    const filterButton = (f: FilterType | string, Kid: string) => {
        getStatusTasks(f, idL);
    }

    const callBack1 = () => removeList(idL);
    const callBack2 = (t: string) => {
        addTask(t, idL);
    };
    const changeTitle = (t: string) => {
        changeTitleList(t, idL)
    };
    return (
        <div className={'todoList'}>
            <div style={{display: 'flex', marginBottom: '20px'}}>
                <EditedSpan title={title0}
                            changeTitle={changeTitle}
                            fontSize={1.5}/>
                <Button title={'x'} callBack={callBack1}/>
            </div>
            <div>
                <AddItemForm callBack={callBack2} titleButton={'+'}/>
            </div>
            <MappedUl data={data}
                      removeTask={removeTask}
                      changeCheckBox={changeCheckBox}
                      idL={idL}
                      changeTitleTask={changeTitleTask}
            />
            <div>
                {mappedButtons}
            </div>
        </div>
    )
}

