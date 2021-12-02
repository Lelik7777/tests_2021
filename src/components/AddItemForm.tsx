import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type PropsType = {
    callBack: (t: string) => void;
    titleButton: string;
}
export const AddItemForm = ({callBack, titleButton}: PropsType) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    let valueTrim = value.trim();
    const callBack1 = () => {
        valueTrim && callBack(valueTrim);
        !valueTrim && setError(true);
        valueTrim && setValue('');
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        setError(false);
    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        valueTrim && e.key === 'Enter' && callBack(valueTrim);
        valueTrim && e.key === 'Enter' && setValue('');
        !valueTrim && setError(true);
    };
    return (
        <span>
            <Input type={'text'}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
                   valueInput={value}
            />
          <Button title={titleButton} callBack={callBack1}/>
            {error && <p className={'error-message'}>Title is required</p>}
      </span>
    )
}