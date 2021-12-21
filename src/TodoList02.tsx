import React from 'react';
import {AddTitle} from './components02/AddTitle';
import {EditableSpan02} from './components02/EditableSpan02';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from './redux/store';
import {Button02} from './components02/Button';
import {addTask} from './redux/tasksReducer02';
import {removeList} from './redux/todoListReducer02';

type PropsType = {
    title: string;
    idL: string;
}
export const TodoList02 = ({title, idL}: PropsType) => {

    const tasks = useSelector((state: RootStateType) => state.tasks);
    const dispatch = useDispatch();
    const addTaskCur = (title: string) => {
        dispatch(addTask(title, idL))
    };
    const removeListCur = () => dispatch(removeList(idL));
    return <div style={{marginRight: '40px', paddingTop: '30px'}}>
        <EditableSpan02 title={title}/>
        <Button02 title={'x'} callBack={removeListCur}/>
        <AddTitle callBack={addTaskCur}/>
        {tasks[idL].map(x => <div>
            <input type="checkbox" checked={x.isDone}/>
            <span>{x.title}</span>
            <Button02 title={'x'} callBack={() => {
            }}/>
        </div>)}
        <button onClick={()=>{}}>all</button>
        <button onClick={()=>{}}>active</button>
        <button onClick={()=>{}}>completed</button>
    </div>
}