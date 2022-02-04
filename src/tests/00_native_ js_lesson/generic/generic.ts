function fun<T>(value: T): T {
    return value;
}

console.log(fun<number>(4));
console.log(fun<string>('hello'));
console.log(fun<Number[]>([2, 3, 4, 5]));

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
const objNum=new UniversalClass<Number>(5);
console.log(objNum.getValue())//?
const objString=new UniversalClass<string>('hello');
console.log(objString.getValue())//?