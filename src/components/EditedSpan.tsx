import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Input} from './Input';

type PropsType = {
    title: string;
    changeTitle: (t: string) => void;
    fontSize:number
}
export const EditedSpan = ({title, changeTitle,fontSize, ...props}: PropsType) => {
    const style = {fontSize: fontSize+'rem', marginRight: '5px', fontWeight: 600};
    const [edited, setEdited] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const valueTrim = value.trim();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget?.value);
        setError(false);
    };
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        valueTrim && e.key === 'Enter' && changeTitle(value);
        e.key === 'Enter' && setEdited(false);
        !valueTrim && e.key === 'Enter' && setError(true);
    };
    const onBlur = () => {
        setEdited(false);
        valueTrim && changeTitle(value);
        !valueTrim && setError(true);
    }
    return (
        edited ?
            <Input type={'text'}
                   onKeyPress={onKeyPress}
                   onChange={onChange}
                   onBlur={onBlur}
                   valueInput={value}
            />

            :
            <span style={style}
                  onDoubleClick={() => setEdited(true)}
            >
               {error ? <span style={{color: 'red', fontSize: '1rem'}}>Error:enter text</span> : title}

      </span>
    )
}