import {combineReducers, createStore} from 'redux';
import {ActionTasksType, tasksReducer02} from './tasksReducer02';
import {ActionTodoListsType, todoListReducer02} from './todoListReducer02';
export type ActionType=ActionTasksType|ActionTodoListsType;
const rootReducer = combineReducers({
    tasks:tasksReducer02,
    todoLists:todoListReducer02,
});
export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);