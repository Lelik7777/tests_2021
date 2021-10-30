import {filterAge, getGreetings, getRazrabs, UserType04} from './04_filter_map';

let users004: UserType04[];
beforeEach(() => {
    users004 = [
        {id: 1, name: 'Bob', age: 33},
        {id: 2, name: 'Nick', age: 23},
        {id: 3, name: 'Ann', age: 24},
        {id: 4, name: 'Sam', age: 29},
    ];
})
test('filter users less 29 age', () => {

    const res = filterAge(users004, 28);
    expect(res.length).toBe(2)
    expect(res[1].name).toBe('Ann');
    expect(res[1].id).toBe(3);
});
test('get razrabs', () => {
const res=getRazrabs(users004);
    expect(res[0].stack.length).toBe(3);
});
test('get greetings',()=>{
   const res=getGreetings(users004);
   expect(res[0]).toBe('Hello,Bob. Welcome to us!');
});