import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {Input} from './Input';

type PropsType = {
    title: string;
    changeTitle: (t: string) => void;
}
export const EditedSpan = ({title, changeTitle, ...props}: PropsType) => {
    const style = {fontSize: '1.5rem', marginRight: '5px', fontWeight: 600};
    const [edited, setEdited] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const valueTrim = value.trim();
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget?.value);
    };
    const onKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {

    };
    const onBlur = () =>{
        setEdited(false);
        valueTrim&&changeTitle(value);
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
                {title}
      </span>
    )
}