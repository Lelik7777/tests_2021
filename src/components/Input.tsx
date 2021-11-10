import React, {ChangeEvent, KeyboardEvent} from 'react';
import '../App.css';

type PropsType = {
    valueInput?: string;
    setValueInput?: (t: string) => void;
    addTask?: (t: string,idL:string) => void;

    setError?: (v: boolean) => void;
    error?: boolean;
    idL?:string;
}
export const Input = ({valueInput, setValueInput, addTask, setError, error,idL}: PropsType) => {

    const titleTrim = valueInput?.trim();
    const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        setValueInput?.(ev.currentTarget.value);
        setError?.(false);
    }
    const changeOnKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter' && titleTrim) {
           idL&& addTask?.(titleTrim,idL);
            setValueInput?.('');
        } else {
            setError?.(true)
        }
    }
    return (
        <input
            value={valueInput}
            type="text"
            placeholder={'enter new text'}
            onChange={onChangeInput}
            onKeyPress={changeOnKeyPress}
            className={error ? 'error' : ''}
        />
    )
}