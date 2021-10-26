import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterType, TaskType} from './App';

export type TodoListType = {
    data: TaskType[];
    title: string;
    removeTask: (id: string) => void;
    getStatusTasks: (f: FilterType) => void;
    addTask: (t: string) => void;
}

export function TodoList(props: TodoListType) {
    let [title, setTitle] = useState<string>('');
    const titleTrim = title.trim();
    const statusAll = () => {
        props.getStatusTasks('all');
    }
    const statusActive = () => {
        props.getStatusTasks('active');
    }
    const statusCompleted = () => {
        props.getStatusTasks('completed');
    }
    const addTaskOnClick = () => {
        if (titleTrim) {
            props.addTask(titleTrim);
            setTitle('');
        }

    }
    const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {

        setTitle(ev.currentTarget.value);
    }
    const changeOnKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
        debugger
        if (ev.key === 'Enter' && titleTrim) {
            props.addTask(titleTrim);
            setTitle('');
        }

    }
    const mappedList = () => {
      return <ul>
          {props.data.map(x=>{
              return (
                  <li>
                      <input type="checkbox" checked={x.isDone}/>
                      <span>{x.title}</span>
                  </li>
              )
          })}
      </ul>
    }
    return (
        <div className={'todoList'}>
            <h1>{props.title}</h1>
            <div>
                <input
                    value={title}
                    type="text"
                    placeholder={'enter new text'}
                    onChange={onChangeInput}
                    onKeyPress={changeOnKeyPress}
                />
                <button onClick={addTaskOnClick}>+</button>
            </div>
           {/* <ul>
                {props.data.map(x => {
                    const removeTaskByBut = () => {
                        props.removeTask(x.id);
                    }
                    return (
                        <li key={x.id}>
                            <input type="checkbox" checked={x.isDone}/>
                            <span>{x.title}</span>
                            <button onClick={removeTaskByBut}>x</button>
                        </li>
                    )
                })}
            </ul>*/}
            {mappedList()}
            <div>
                <button onClick={statusAll}>All</button>
                <button onClick={statusActive}>Active</button>
                <button onClick={statusCompleted}>Completed</button>
            </div>
        </div>
    )
}