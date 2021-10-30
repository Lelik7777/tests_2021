type ManType={
    name:string;
    age:number;
    lessons:{title:string}[];
}
let man:ManType;
beforeEach(()=>{
    man={
        name:'Bob',
        age:32,
        lessons:[{title:'1'},{title:'2'}],
    }

})
test('',()=>{
    const {name:n,age:a,lessons:l,lessons:[{title:t1},{title:t2}]}=man;
    const [ti1,ti2]=man.lessons;
const tit1=man.lessons[0].title;
    expect(n).toBe('Bob');
    expect(l.length).toBe(2);
    expect(l[1].title).toBe('2');
    expect(t1).toBe('1');
    expect(t2).toBe('2');
    expect(ti1.title).toBe('1');
    expect(ti2.title).toBe('2');
    expect(tit1).toBe('1');
})
