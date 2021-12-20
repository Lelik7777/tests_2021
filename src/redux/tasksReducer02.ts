import {ActionType} from './store';
import {v1} from 'uuid';

type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}
type TasksType = {
    [key: string]: TaskType[];
}
const initialState: TasksType = {};
export const tasksReducer02 = (state = initialState, action: ActionType): TasksType => {
    switch (action.type) {
        case 'ADD-TASK':
            return {
                ...state,
                [action.payload.idL]: [...state[action.payload.idL], {
                    id: v1(),
                    title: action.payload.title,
                    isDone: false
                }]
            };
        default:
            return state;
    }
}
export type ActionTypeTasks = ReturnType<typeof addTask>
export const addTask = (title: string, idL: string) => {
    return {
        type: 'ADD-TASK',
        payload: {title, idL,},
    } as const;
};
