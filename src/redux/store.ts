import {combineReducers, createStore} from 'redux';
import {ActionTypeTasks, tasksReducer02} from './tasksReducer02';
import {todoListReducer02} from './todoListReducer02';
export type ActionType=ActionTypeTasks;
const rootReducer = combineReducers({
    tasks:tasksReducer02,
    todoLists:todoListReducer02,
});
export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);