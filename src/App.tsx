import React, {useReducer} from 'react';
import './App.css';
import {TodoList} from './TodoList';

import {AddItemForm} from './components/AddItemForm';
import {
    addTaskAC,
    changeCheckBoxAC,
    changeTitleTaskAC,
    createTaskAC,
    removeTaskAC,
    taskReducer
} from './redux/taskReducer';
import {addListAC, changeTitleListAC, getStatusTasksAC, listsReducer, removeListAC} from './redux/listsReducer';
import {v1} from 'uuid';
//import {solution1} from './tests/00_codewars/test01';

//getTriangleType(2,2,2);
export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}
export type TasksType = {
    [key: string]: TaskType[];
}
export type FilterType = 'all' | 'active' | 'completed';
export type TodoListType = {
    id: string;
    title: string;
    filter: FilterType | string;
}

function App() {
    console.log('rendering app');
    const id1 = v1();
    const id2 = v1();
    const [todoLists, dispatchLists] = useReducer(listsReducer, [
        {id: id1, title: 'to learn', filter: 'all'},
        {id: id2, title: 'to buy', filter: 'active'},
    ]);

    const [tasks, dispatchTasks] = useReducer(taskReducer, {
        [id1]: [
            {id: v1(), title: 'Html&&css', isDone: true},
            {id: v1(), title: 'Js', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Angular', isDone: false},
        ],
        [id2]: [
            {id: v1(), title: 'milk', isDone: true},
            {id: v1(), title: 'bread', isDone: true},
            {id: v1(), title: 'beer', isDone: false},
        ]
    });

    const getFilterTasks = (filer: FilterType | string, idL: string): TaskType[] => {
        switch (filer) {
            case 'active':
                return tasks[idL].filter(x => !x.isDone);
            case 'completed':
                return tasks[idL].filter(x => x.isDone);
            default:
                return tasks[idL];
        }
    }
    const removeTask = (id: string, idL: string): void => dispatchTasks(removeTaskAC(id, idL));

    const getStatusTasks = (filter: FilterType | string, idL: string) =>
        dispatchLists(getStatusTasksAC(filter, idL));

    const addTask = (title: string, idL: string) => dispatchTasks(addTaskAC(title, idL));

    const changeCheckBox = (id: string, isDone: boolean, idL: string) => dispatchTasks(changeCheckBoxAC(id, isDone, idL));

    const removeList = (idL: string) => {
        dispatchLists(removeListAC(idL));
        delete tasks[idL];
    }

    const addList = (title: string) => {
        let idL=v1();
        dispatchLists(addListAC(title,idL));
       dispatchTasks(createTaskAC(idL));
    }

    const changeTitleList = (title: string, idL: string) =>
        dispatchLists(changeTitleListAC(title, idL));

    const changeTitleTask = (title: string, id: string, idL: string) => dispatchTasks(changeTitleTaskAC(title, id, idL));

    const mappedList = todoLists.map(x => <
        TodoList
        key={x.id}
        idL={x.id}
        data={getFilterTasks(x.filter, x.id)}
        title0={x.title}
        removeTask={removeTask}
        getStatusTasks={getStatusTasks}
        addTask={addTask}
        changeCheckBox={changeCheckBox}
        filter={x.filter}
        removeList={removeList}
        changeTitleList={changeTitleList}
        changeTitleTask={changeTitleTask}
    />);
    return (
        <div className="App">
            <AddItemForm  callBack={addList} titleButton={'add'}/>
            {
                mappedList
            }


        </div>
    );
}

export default App;
