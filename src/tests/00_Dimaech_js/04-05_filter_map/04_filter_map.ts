export type UserType04 = {
    id: number;
    name: string;
    age: number;
}

export const filterAge = (arr: Array<UserType04>, age: number) => {
    return arr.filter(x => x.age < age);
}

export const getRazrabs = (arr: UserType04[]) => {
    return arr.map(x => ({...x, stack: ['Html&Css', 'Js', 'React']}))
}
export const getGreetings = (arr:UserType04[]) => {
  return arr.map(x=>`Hello,${x.name}. Welcome to us!`);
}