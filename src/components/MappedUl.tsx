import {Button} from './Button';
import React, {ChangeEvent, useState} from 'react';
import {TaskType} from '../App';

type PropsType = {
    data: TaskType[];
    removeTask: (id: string) => void;
    callBack: (id: string, isD: boolean) => void
    checked:boolean;
    setChecked:(c:boolean)=>void;
}
export const MappedUl = ({data, removeTask, ...props}: PropsType) => {

    return (
        <ul>
            {
                data.map(x => {
                    const callBack = (): void => removeTask(x.id);
                    const onChange = (ev: ChangeEvent<HTMLInputElement>) =>{
                        props.setChecked(ev.currentTarget.checked);
                       // props.callBack(x.id,checked);
                    }
                   // props.callBack(x.id, checked);
                    return (
                        <li key={x.id}>
                            <input
                                type="checkbox"
                                checked={props.checked}
                                onChange={onChange}
                                onClick={()=>{}}
                            />
                            <span>{x.title}</span>
                            <Button title={'x'} callBack={callBack}/>
                        </li>
                    )
                })
            }
        </ul>
    );
}