import {FilterType, TodoListType} from '../App';

export const listsReducer = (state: TodoListType[], action: ActionType): TodoListType[] => {
    switch (action.type) {
        case 'GET-STATUS-TASKS':
            return state.map(x => x.id === action.payload.idL ? {...x, filter: action.payload.filter} : x);
        case 'ADD-LIST':
            return [...state, {id:action.payload.idL, title: action.payload.title, filter: 'all'}];
        case 'CHANGE-TITLE-LIST':
            return state.map(x=>x.id===action.payload.idL?{...x,title:action.payload.title}:x);
        case 'REMOVE-LIST':
            return state.filter(x=>x.id!==action.payload.idL);
        default:
            return [...state];
    }
};

type ActionType = ReturnType<typeof getStatusTasksAC | typeof removeListAC | typeof addListAC|typeof changeTitleListAC>

export const getStatusTasksAC = (filter: FilterType | string, idL: string) => ({
    type: 'GET-STATUS-TASKS',
    payload: {filter, idL}
} as const);

export const removeListAC = (idL: string) => ({type: 'REMOVE-LIST', payload: {idL}}) as const;

export const addListAC = (title: string,idL:string) => ({type: 'ADD-LIST', payload: {title,idL}}) as const;

export const changeTitleListAC = (title: string, idL: string) => ({
    type: 'CHANGE-TITLE-LIST',
    payload: {title, idL}
}) as const;