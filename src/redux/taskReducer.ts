import {TasksType} from '../App';
import {v1} from 'uuid';

export const taskReducer = (state: TasksType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.payload.idL]: state[action.payload.idL].filter(x => x.id !== action.payload.id)};
        case 'ADD-TASK':
            return {
                ...state,
                [action.payload.idL]: [...state[action.payload.idL], {
                    id: v1(),
                    title: action.payload.title,
                    isDone: false
                }]
            };
        case 'CHANGE-CHECK-BOX':
            return {
                ...state,
                [action.payload.idL]: state[action.payload.idL].map(x => x.id === action.payload.id ? {
                    ...x,
                    isDone: action.payload.isDone
                } : x)
            };
        case 'CHANGE-TITLE-TASK':
            return {
                ...state,
                [action.payload.idL]: state[action.payload.idL].map(x => x.id === action.payload.id ? {
                    ...x,
                    title: action.payload.title
                } : x)
            };
        default:
            return {...state};
    }
}
type ActionType = ReturnType<typeof removeTaskAC | typeof addTaskAC | typeof changeCheckBoxAC | typeof changeTitleTaskAC>
//type ActionType =RemoveTaskType|AddTaskType
//type RemoveTaskType=ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string, idL: string) => {
    return {type: 'REMOVE-TASK', payload: {id: id, idL: idL}} as const
}
//type AddTaskType=ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string, idL: string) => ({type: 'ADD-TASK', payload: {title, idL}}) as const;

export const changeCheckBoxAC = (id: string, isDone: boolean, idL: string) => ({
    type: 'CHANGE-CHECK-BOX',
    payload: {id, isDone, idL}
}) as const;

export const changeTitleTaskAC = (title: string, id: string, idL: string) => ({
    type: 'CHANGE-TITLE-TASK',
    payload: {title, id, idL}
}) as const;
