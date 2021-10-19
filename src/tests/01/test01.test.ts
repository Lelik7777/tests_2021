import {getCount, miniNumSteps, mult, sum} from './test01';

let a: number;
let b: number;
let string: string;
beforeEach(() => {
    a = 1;
    b = 4;
    string = 'Hello,test,alarm';
});
test('sum', () => {

    const res = sum(a, b);
    expect(res).toBe(5);
});
test('multiply', () => {
    a = 2;
    const res = mult(a, b);
    expect(res).toBe(8);
});
/*test('split string', () => {

    const res = splitString(string);
    expect(res).toStrictEqual(['hello', 'my', 'world'])
})*/
test('fun', () => {
    const res = getCount(string);
    expect(res).toBe(5)
})
test('nimSteps', () => {
    const res = miniNumSteps([2, 3, 4, 5, 6], 12);
    expect(res).toBe(3)
})