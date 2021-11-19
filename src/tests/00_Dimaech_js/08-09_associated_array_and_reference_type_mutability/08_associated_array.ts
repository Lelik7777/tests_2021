let users:{[key:string]:string|null}={
    '1':'alex','2':'bob','3':'ann',
}
console.log(users['1']);//?
console.log(Object.keys(users) );
console.log(Object.values(users));
users['null']=null;
console.log(users);//?
export const users2:{[key:string]:{id:number,name:string}}={
    123:{id:123,name:'bob'},
    3445:{id:3445,name:'ann'},
    4444:{id:4444,name:'nick'},
}
const user={id:3343443,name:'sophia'};
users2[user.id]=user;
console.log(users2);//?
delete users2[123];

const  user08={
    name:'Bob',
    age:32,
}