import {reducer, sum} from './reducer';

test('sum', () => {
    expect(sum(4, 5)).toBe(9);
});
test('culc', () => {
    expect(reducer(10, {type: 'sum', num: 34})).toBe(44);
    expect(reducer(23, {type: 'sub', num: 12})).toBe(11);
});
