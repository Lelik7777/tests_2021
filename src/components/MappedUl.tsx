import React from 'react';
import {TaskType} from '../App';
import {InputCheckBox} from './InputCheckBox';
import '../App.css';
import {EditedSpan} from './EditedSpan';
import {Button} from './Button';

type PropsType = {
    data: TaskType[];
    removeTask: (id: string, idL: string) => void;
    changeCheckBox: (id: string, isD: boolean, idL: string) => void;
    idL: string;
    changeTitleTask: (t: string, id: string, idL: string) => void;
}
export const MappedUl = ({
                             data,
                             removeTask,
                             changeCheckBox,
                             idL,
                             changeTitleTask,
                         }: PropsType) => {

    return (
        <ul>
            {
                data.map(x => {
                    const callBack = (): void => removeTask(x.id, idL);
                    const changeTitle = (t: string) => {
                        changeTitleTask(t, x.id, idL);
                    };
                    return (
                        <li key={x.id}>
                            <InputCheckBox
                                changeCheckBox={changeCheckBox}
                                isDone={x.isDone}
                                id={x.id}
                                idL={idL}
                            />
                            <EditedSpan title={x.title}
                                        changeTitle={changeTitle}
                                        fontSize={1}
                            />
                            <Button title={'x'} callBack={()=>removeTask(x.id,idL)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
}