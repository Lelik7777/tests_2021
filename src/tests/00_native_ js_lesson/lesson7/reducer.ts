export const sum = (a: number, b: number) => {
    return a + b;
}
export const sub = (a: number, b: number) => {
    return a - b;
}
export const mult = (a: number, b: number) => {
    return a * b;
}
export const div = (a: number, b: number) => {
    return a / b;
}
export type ActionType = {
    type: 'sum' | 'sub' | 'div' | 'mult';
    num: number;
}
export const culc = (state: number, action: ActionType) => {
    switch (action.type) {
        case 'sum':
            return state + action.num;
        case 'sub':
            return state - action.num;
        case 'div':
            return state / action.num;
        case 'mult':
            return state * action.num;
        default:
            return state;
    }
}