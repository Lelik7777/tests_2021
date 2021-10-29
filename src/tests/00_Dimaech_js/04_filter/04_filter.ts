export type UserType04 = {
    id: number;
    name: string;
    age: number;
}

export const filterAge = (arr: Array<UserType04>, age: number) => {
    return arr.filter(x => x.age < age);
}
