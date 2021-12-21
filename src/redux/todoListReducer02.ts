import {ActionType} from './store';
import {v1} from 'uuid';

type FilterType = 'all' | 'completed' | 'active';
type TodoListType = {
    id: string;
    title: string;
    filter: FilterType;
}
const initialState: TodoListType[] = [];

export const todoListReducer02 = (state = initialState, action: ActionType): TodoListType[] => {
    switch (action.type) {
        case 'ADD-LIST':
            return [...state, {id: action.payload.id, title: action.payload.title, filter: 'all'}];
        case 'REMOVE-LIST':
            return state.filter(x => x.id !== action.payload.idL);
        default:
            return state;
    }
}
export type ActionTodoListsType = ReturnType<typeof addList | typeof removeList>;
export const addList = (title: string) => {
    return {
        type: 'ADD-LIST',
        payload: {
            title, id: v1(),
        },
    } as const;
};
export const removeList = (idL: string) => {
    return {
        type: 'REMOVE-LIST',
        payload: {idL,},
    } as const;
};