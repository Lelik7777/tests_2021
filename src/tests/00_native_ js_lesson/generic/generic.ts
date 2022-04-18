function fun00<T>(value: T): T {
    return value;
}

console.log(fun00<number>(4));
console.log(fun00<string>('hello'));
console.log(fun00<Number[]>([2, 3, 4, 5]));

//generic for classis
interface UniverseI<T> {
    value: T;
    getValue: () => T;
};

class UniversalClass<T> implements UniverseI<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}
const objNum=new UniversalClass<Number >(5);
console.log(objNum.getValue())//?
const objString=new UniversalClass<string>('hello');
console.log(objString.getValue())//?
type UserType={
    name:string;
    age:number;
}
const obj1:UserType={
    name:'alex',
    age:33,
}

