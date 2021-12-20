import React, {useState} from 'react';

type PropsType={
    title:string;
}
export const EditableSpan02 = ({title}:PropsType) => {
    const [edit, setEdit] = useState(false);
    return (
        edit
            ? <input type={'text'}/>
            : <span>{title}</span>
    )
}