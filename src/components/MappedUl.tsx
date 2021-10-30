import {Button} from './Button';
import React from 'react';
import {TaskType} from '../App';

type PropsType = {
    data: TaskType[];
    removeTask: (id: string) => void;
}
export const MappedUl = ({data, removeTask}: PropsType) => {
    return (
        <ul>
            {
                data.map(x => {
                    const callBack = (): void => removeTask(x.id);
                    return (
                        <li>
                            <input type="checkbox" checked={x.isDone}/>
                            <span>{x.title}</span>
                            <Button title={'x'} callBack={callBack}/>
                        </li>
                    )
                })
            }
        </ul>
    );
}