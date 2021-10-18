const {sum} = require("../01/test01");
const {multi} = require("./02");
let a,b;
beforeEach(()=>{
    a=3;
    b=5;
});
test('sum',()=>{
    const res=sum(a,b);
    expect(res).toBe(8);
})
test('multi',()=>{
    const res=multi(a,b);
    expect(res).toBe(15);

})