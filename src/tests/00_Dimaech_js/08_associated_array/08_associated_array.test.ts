let users:{[key:string]:{id:number,name:string}};
beforeEach(()=>{
    users={
        123:{id:123,name:'bob'},
        3445:{id:3445,name:'ann'},
        4444:{id:4444,name:'nick'},
    }
});
test('should be ',()=>{
    users[123].name='tom';
    expect(users[123].name).toBe('tom');
    expect(Object.keys(users).length).toBe(3);
    delete users[4444];
    expect(Object.keys(users).length).toBe(2);
    expect(users[4444]).toBeUndefined();
})