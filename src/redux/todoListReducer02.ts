import {ActionType} from './store';
import {v1} from 'uuid';

type FilterType = 'all' | 'completed' | 'active';
type TodoListType = {
    id: string;
    title: string;
    filter: FilterType;
}
const initialState: TodoListType[] = [
    {id:v1(),title:'to learn',filter:'all'},
    {id:v1(),title:'to buy',filter:'all'},
];

export const todoListReducer02 = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}