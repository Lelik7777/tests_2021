import React from 'react';
import {Button02} from './Button';

type PropsType={
callBack:(t:string)=>void;
}
export const AddTitle = ({callBack}:PropsType) => {
    return (
        <div>
            <input type="text"/>
            <Button02 title={'+'} callBack={callBack}/>
        </div>
    )
}
