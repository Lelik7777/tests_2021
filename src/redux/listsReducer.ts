import {TodoListType} from '../App';

export const listsReducer = (state:TodoListType[], action:ActionType) => {
  switch (action.type) {
      default:return [...state];
  }
};

type ActionType=ReturnType<any>