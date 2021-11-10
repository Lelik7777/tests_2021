import React, {useState} from 'react';
type PropsType = {
    isDone: boolean
    changeCheckBox: (id: string, isD: boolean,idL:string) => void;
    id: string;
    idL:string;
}
export const InputCheckBox = ({isDone, changeCheckBox, id,idL}: PropsType) => {
    const [checked, setChecked] = useState<boolean>(false);
    const onClick = () => {
        setChecked(!checked);
        changeCheckBox(id, checked,idL)
    };
    return (
        <input
            type="checkbox"
            checked={isDone}
            onClick={onClick}
        />
    )
}