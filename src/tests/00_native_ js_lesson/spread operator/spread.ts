type UserType={
    name:string;
    age:number;
    friends:string[];
}
type ForSpreadUser={
    name?:string;
    age?:number;
    friends?:string[];
}
type NewValues={
    location:{
        city:string,
        street:{
            title:string,
        }
    }
}
export function createObj(restValues:ForSpreadUser) {
    let user:UserType = {
        name: 'alex',
        age: 44,
        friends: ['ann', 'nick'],
        ...restValues,
    }
    console.log(restValues)//?
    console.log(user);
}


