import React from 'react';

type PropsType = {
    title: string;
    callBack: () => void;
}
export const Button02 = ({title,callBack}:PropsType) => {
    return (
        <button onClick={callBack}>{title}</button>
    )
}