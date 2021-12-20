import React, {useState} from 'react';
import {AddTitle} from './components02/AddTitle';
import {TodoList02} from './TodoList02';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from './redux/store';

export const AppWithSelector = () => {
   const todoLists = useSelector((state:RootStateType)=>state.todoLists);
   const dispatch=useDispatch();
    return (
        <div>
            <AddTitle/>
            {todoLists.map(x=><TodoList02 title={x.title} idL={x.id}/>)}
        </div>
    )
}
