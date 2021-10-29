import React from 'react';

type PropsType={
    title:string;
    fun:()=>void;
}
export const Button = (props:PropsType) => {
    const fun = () => {
      props.fun();
    }
    return (
        <button onClick={fun}>{props.title}</button>
    )
}