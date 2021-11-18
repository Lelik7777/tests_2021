import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import '../App.css';

type PropsType = {
  type:string;
  callBack1:(e:ChangeEvent<HTMLInputElement>)=>void;
  callBack2:(e:KeyboardEvent<HTMLInputElement>)=>void;
  valueInput?:string;
  error?:string;
}
export const Input = ({type,callBack1,callBack2,valueInput,error, ...props}: PropsType) => {
    console.log('input rendering');


    return (
        <input
            value={valueInput}
            type={type}
            placeholder={'enter new text'}
            onChange={callBack1}
            onKeyPress={callBack2}
            className={error ? 'error' : ''}
        />
    )
}