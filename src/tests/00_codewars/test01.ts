export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitString(string: string) {
    return string.toLowerCase().split(' ');
}

//Vowel Count kata 7kyu
export function getCount(string: string) {
    const arr = string.toLowerCase().split('');
    return arr.filter(x => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u').length;
}

// Minimum Steps (Array Series #6) kata 7kyu
export function miniNumSteps(numbers: Array<number>, value: number) {
    let sum = Math.min(...numbers);
    let counter = 0;
    if (sum >= value) {
        return counter;
    }
    while (numbers.length > 1) {
        numbers = numbers.filter(x => x !== Math.min(...numbers));
        sum += Math.min(...numbers);
        counter++;
        if (sum >= value) {
            break;
        }

    }
    return counter;
}

//Frequency sequence kata 7kyu
export function freqSeq(str: string, sep: string) {
    let arr = str.split('');
    let arrNew: Array<string | number> = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length - i; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
            arrNew.splice(arrNew.length, 0, counter, sep);
            counter = 0;
        }
    }
    return arrNew.join('');
}

export function changeArg(a: number) {
    debugger
    arguments[0] = 5;
    console.log(a);
    return a;
}

