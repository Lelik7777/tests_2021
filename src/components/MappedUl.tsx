import {Button} from './Button';
import React, {useState} from 'react';
import {TaskType} from '../App';
import {InputCheckBox} from './InputCheckBox';
import '../App.css';

type PropsType = {
    data: TaskType[];
    removeTask: (id: string) => void;
    changeCheckBox: (id: string, isD: boolean) => void;
}
export const MappedUl = ({data, removeTask, changeCheckBox}: PropsType) => {

    return (
        <ul>
            {
                data.map(x => {
                    const callBack = (): void => removeTask(x.id);
                    return (
                        <li key={x.id}>
                            <InputCheckBox
                                changeCheckBox={changeCheckBox}
                                isDone={x.isDone}
                                id={x.id}
                            />
                            <span>{x.title}</span>
                            <Button title={'x'}
                                    callBack={callBack}
                                    filter={''}
                                    name={''}

                            />

                        </li>
                    )
                })
            }
        </ul>
    );
}