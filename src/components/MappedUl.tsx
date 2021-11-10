import {Button} from './Button';
import React from 'react';
import {TaskType} from '../App';
import {InputCheckBox} from './InputCheckBox';
import '../App.css';

type PropsType = {
    data: TaskType[];
    removeTask: (id: string,idL:string) => void;
    changeCheckBox: (id: string, isD: boolean,idL:string) => void;
    idL:string;
}
export const MappedUl = ({data, removeTask, changeCheckBox,idL}: PropsType) => {

    return (
        <ul>
            {
                data.map(x => {
                    const callBack = (): void => removeTask(x.id,idL);
                    return (
                        <li key={x.id}>
                            <InputCheckBox
                                changeCheckBox={changeCheckBox}
                                isDone={x.isDone}
                                id={x.id}
                                idL={idL}
                            />
                            <span>{x.title}</span>
                            <Button title={'x'}
                                    callBack={callBack}
                                    filter={''}
                                    name={null}

                            />

                        </li>
                    )
                })
            }
        </ul>
    );
}