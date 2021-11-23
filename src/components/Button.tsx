import React from 'react';
import {FilterType} from '../App';
import '../App.css';

type PropsType = {
    title: string;
    callBack: () => void;
    name?: string | null;
    filter?: FilterType | string;
}
export const Button = ({title, callBack, filter, name}: PropsType) => {


    return (
        <button onClick={callBack} className={!filter ? '' : filter === name ? 'active' : ''}>{title}</button>
    )
}