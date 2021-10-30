import React, {ChangeEvent, KeyboardEvent} from 'react';

type PropsType = {
    title: string;
    setTitle: (s: string) => void;
    addTask: (s: string) => void;
}
export const Input = ({title, setTitle, addTask}: PropsType) => {
    const titleTrim = title.trim();
    const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.currentTarget.value);
    }
    const changeOnKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter' && titleTrim) {
            addTask(titleTrim);
            setTitle('');
        }
    }
    return (
        <input
            value={title}
            type="text"
            placeholder={'enter new text'}
            onChange={onChangeInput}
            onKeyPress={changeOnKeyPress}
        />
    )
}