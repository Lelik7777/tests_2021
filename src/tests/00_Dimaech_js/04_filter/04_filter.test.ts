import {filterAge, UserType04} from './04_filter';

test('filter users less 29 age',()=>{
    const users004: UserType04[] = [
        {id: 1, name: 'Bob', age: 33},
        {id: 2, name: 'Nick', age: 23},
        {id: 3, name: 'Ann', age: 24},
        {id: 4, name: 'Sam', age: 29},
        ];
    const res=filterAge(users004,28);
    expect(res.length).toBe(2)
    expect(res[1].name).toBe('Ann');
    expect(res[1].id).toBe(3);
});