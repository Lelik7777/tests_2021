import React from 'react';
import {AddTitle} from './components02/AddTitle';
import {TodoList02} from './TodoList02';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from './redux/store';
import {addList} from './redux/todoListReducer02';

export const AppWithSelector = () => {
   const todoLists = useSelector((state:RootStateType)=>state.todoLists);
   const dispatch=useDispatch();
    const addListCur = (title:string)=>{dispatch(addList(title))};
    return (
        <div style={{display:'flex',paddingTop:'30px'}}>
            <AddTitle callBack={addListCur}/>
            {todoLists.map(x=>{
               //debugger
                return <TodoList02 key={x.id} title={x.title} idL={x.id}/>})
            }

        </div>
    )
}
