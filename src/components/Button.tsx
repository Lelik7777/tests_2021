import React from 'react';

type PropsType={
    title:string;
    callBack:()=>void;
}
export const Button = ({title,callBack}: PropsType) => {

    const onClick = ()=>callBack();
    return (
        <button onClick={onClick}>{title}</button>
    )
}