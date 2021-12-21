import React, {useState} from 'react';
import {Button02} from './Button';

type PropsType = {
    callBack: (t: string) => void;
}
export const AddTitle = ({callBack}: PropsType) => {
    const [value, setValue] = useState('');
    let callBack1 = () => {
        value.trim() && callBack(value.trim())
        value && setValue('');
    };
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <Button02 title={'+'} callBack={callBack1}/>
        </div>
    )
}
