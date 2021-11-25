import {culc, sum} from './reducer';

test('sum', () => {
    expect(sum(4, 5)).toBe(9);
});
test('culc', () => {
    expect(culc(10, {type: 'sum', num: 34})).toBe(44);
    expect(culc(23, {type: 'sub', num: 12})).toBe(11);
});
