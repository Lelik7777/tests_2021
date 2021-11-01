import React from 'react';
import {FilterType} from '../App';
import '../App.css';

type PropsType = {
    title: string;
    callBack: () => void;
    name: string | null;
    filter: FilterType | string;
}
export const Button = ({title, callBack, filter, name}: PropsType) => {

    const onClick = () => callBack();

    return (
        <button onClick={onClick} className={filter === name ? 'active' : ''}>{title}</button>
    )
}