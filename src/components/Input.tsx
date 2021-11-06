import React, {ChangeEvent, KeyboardEvent} from 'react';
import '../App.css';

type PropsType = {
    title: string;
    setTitle: (t: string) => void;
    addTask: (t: string) => void;
    setError:(v:boolean)=>void;
    error:boolean;
}
export const Input = ({title, setTitle, addTask,setError,error}: PropsType) => {

    const titleTrim = title.trim();
    const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.currentTarget.value);
        setError(false);
    }
    const changeOnKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter' && titleTrim) {
            addTask(titleTrim);
            setTitle('');
        }
        else{
           setError(true)
        }
    }
    return (
            <input
            value={title}
            type="text"
            placeholder={'enter new text'}
            onChange={onChangeInput}
            onKeyPress={changeOnKeyPress}
            className={error?'error':''}
        />
    )
}