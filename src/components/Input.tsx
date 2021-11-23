import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import '../App.css';

type PropsType = {
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
    valueInput?: string;
    error?: string;
    onBlur?: () => void;
}
export const Input = ({type, onChange, onKeyPress, valueInput, error, onBlur, ...props}: PropsType) => {
    return (
        <input
            value={valueInput}
            type={type}
            placeholder={'enter new text'}
            onChange={onChange}
            onKeyPress={onKeyPress}
            className={error ? 'error' : ''}
            onBlur={onBlur}
            autoFocus
        />
    )
}