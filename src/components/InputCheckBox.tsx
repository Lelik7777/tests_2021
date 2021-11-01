import React, {useState} from 'react';
type PropsType = {
    isDone: boolean
    changeCheckBox: (id: string, isD: boolean) => void;
    id: string;
}
export const InputCheckBox = ({isDone, changeCheckBox, id}: PropsType) => {
    const [checked, setChecked] = useState<boolean>(false);
    const onClick = () => {
        setChecked(!checked);
        changeCheckBox(id, checked)
    };
    return (
        <input
            type="checkbox"
            checked={isDone}
            onClick={onClick}
        />
    )
}