export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitString(string: string) {
    return string.toLowerCase().split(' ');
}

export function getCount(string: string) {
    const arr = string.toLowerCase().split('');
    return arr.filter(x => x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u').length;
}

export function miniNumSteps(numbers: Array<number>, value: number) {
debugger
 let sum= Math.min(...numbers);
 let counter=0;
 while (numbers.length>1){
     numbers=numbers.filter(x=>x!=Math.min(...numbers));
    sum+=Math.min(...numbers);
    counter++;
    if(sum>=value){
        break;
    }
 }
 return counter;
}
