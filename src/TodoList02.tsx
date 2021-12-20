import React from 'react';
import {AddTitle} from './components02/AddTitle';
import {EditableSpan02} from './components02/EditableSpan02';
import {useSelector} from 'react-redux';
import {RootStateType} from './redux/store';
import {Button02} from './components02/Button';

type PropsType={
    title:string;
    idL:string;
}
export const TodoList02 = ({title,idL}:PropsType) => {
  const tasks=useSelector((state:RootStateType)=>state.tasks);
    return <>
        <EditableSpan02 title={title}/>
        <AddTitle/>
        {tasks[idL].map(x=><div>
            <input type="checkbox" checked={x.isDone}/>
            <span>{x.title}</span>
            <Button02 title={'x'} callBack={()=>{}}/>
        </div>)}
    </>
}