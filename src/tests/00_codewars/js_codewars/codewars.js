//разделить строку по большой букве и добавить перед ней пробел
//1 Break camelCase kata 6kyu
const solution = (string) => {
    if (string === '') return '';
    if (string.split('').find(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)) {
        let arrNumOfUp = [];
        let arr = string.split('');
        arr.forEach((z, i) => z.charCodeAt(0) >= 65 && z.charCodeAt(0) <= 90 ? arrNumOfUp.push(i) : z);
        console.log(arrNumOfUp)//?
        for (let i = 0; i < arrNumOfUp.length; i++) {
            arr.splice(arrNumOfUp[i] + i, 0, ' ');

            // arr.array_methods(arr.indexOf(arr.find(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)), 0, ' ')
        }
        return arr.join('');
    } else {
        return string;
    }
}
const solution2 = (string) => {
    return string.split(/(?=[A-Z])/).join(' ')
}
const solution3 = (string) => {
    return string.replace(/[A-Z]/g, x => ' ' + x);
}
const solution4 = (string) => {
    return string.split('').map(x => x === x.toUpperCase() ? ' ' + x : x).join('');
}

console.log(solution4('camelCamelCamelCamelCamelVfFFDfff'))//?
console.log(solution3('camelCamelCamelCamelCamelVfFFDfff'))
console.log(solution2('camelCamelCamelCamelCamelVfFFDfff'))//?
console.log(solution('camelCamelCamelCamelCamelVfFFDfff'));//?
//----------------------------------------------------------------------------------------------------------------------
//2 Disemvowel Trolls kata 7kyu
//удалить из строки все гласные буквы
const disemvowel = (s) => {
    return s.split('').filter(x => x !== 'a' && x !== 'A' && x !== 'e' && x !== 'E' && x !== 'i' && x !== 'I' && x !== 'o' && x !== 'O' && x !== 'u' && x !== 'U').join('');

}
const disemvowel2 = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return s.split('').filter(x => vowels.indexOf(x.toLowerCase()) === -1).join('');
}
console.log(disemvowel2("What are you, a communist?"));
console.log(disemvowel("What are you, a communist?"));//?
const disemvowel3 = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return s.split('').filter(x => !vowels.includes(x.toLowerCase())).join('');
}
console.log(disemvowel3("What are you, a communist?"));
const disemvowel4 = (s) => s.replace(/[a,e,i,o,u]/gi, '');

console.log(disemvowel4("What are you, a communist?"));
//----------------------------------------------------------------------------------------------------------------------
//3 task
//Sorting the Odd way! 7kyu
//отсортировать массив: четные по убывающим значениям,а нечетные - по возрастающим
const sortItOut = (array) => {
    return array.filter(x => Math.floor(x) % 2 !== 0).sort((a, b) => a - b).concat(array.filter(x => Math.floor(x) % 2 === 0).sort((a, b) => b - a));

}
console.log(sortItOut([1.1, 2.2, 3.3, 4.4, 5.5, 6.6]));//?
//----------------------------------------------------------------------------------------------------------------------
//4 task
//Mumbling 7kyu
//return string:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
const accum = (s) => {
    return s.split('').reduce((a, x, i) => {
        a.push(x.toUpperCase());
        for (let j = 0; j < i; j++) {
            a.push(x.toLowerCase());
        }
        if (i < s.split('').length - 1)
            a.push('-');
        return a;
    }, []).join('');
}
const accum2 = (s) => {
    return [...s].map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join('-');
}
console.log(accum2("ZpglnRxqenU"));

//----------------------------------------------------------------------------------------------------------------------
// 5 task:
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
//How good are you really? 8kyu
const betterThanAverage = (classPoints, yourPoints) => {
    return classPoints.reduce((a, b, i) => a + b) / classPoints.length < yourPoints;
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));
//----------------------------------------------------------------------------------------------------------------------
// 6 task:
//Jumping number is the number that All adjacent digits in it differ by 1.
//Given a number, Find if it is Jumping or not .
const jumpingNumber = (n) => {
    // debugger
    let arr = n.toString().split('');
    let a = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.length > 1 && Math.abs(arr[i] - arr[i + 1]) !== 1) {
            return "Not!!";
        }
    }
    return "Jumping!!";
}
console.log(jumpingNumber(7678));//?
//----------------------------------------------------------------------------------------------------------------------
// task 7:
//Stop gninnipS My sdroW!  6kyu
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

    Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"*/
const spinWords = (string) => {
    return string.split(' ').map(x => x.split('').length >= 5 ? x.split('').reverse().join('') : x).join(' ');
}
console.log(spinWords("Spinning words sda dsf"));
//--------------------------------------------------------------------------------
//test 8:
//Find the odd int 6kyu
/*Given an array of integers, find the one that appears an odd number of times.
    There will always be only one integer that appears an odd number of times.*/
const findOdd = (A) => {
    let a;
    while (A.length > 0) {
        let count = 0;
        let arr = A.filter(x => x === A[count]);
        A = A.filter(x => x !== A[count]);
        if (arr.length % 2 !== 0) a = arr[0];
        count++;
    }
    if (A === 0) return 0;
    if (A.length === 1) return A[0];
    return a;
};
const findOdd1 = (a) => {
    return a.find(x => a.filter(z => z === x).length % 2);
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd(0));
console.log(findOdd([4]))
console.log(findOdd1([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log([2, 3, 4, 4, 4, 5, 6, 6, 6].length % 2);
//------------------------------------------------------------------------------
//test 9:Calculate number of inversions in array 6kyu
//Array inversion indicates how far the array is from being sorted.
//
// Inversions are pairs of elements in array that are out of order.


const countInversions = (array) => {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                count++
            }
        }
    }
    return count;
}

function countInversions2(data) {
    return data.reduce((total, i, index) => data.slice(index).filter(j => (i > j)).length + total, 0) + ' ' + data;
}

console.log(countInversions([6, 5, 4, 3, 2, 1]))
console.log(countInversions2([6, 5, 4, 3, 2, 1]));
console.log(2400 % 1000);

//----------------------------------------------------------------------
//test 10: Minimum Steps (Array Series #6) 7kyu
//Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
const minimumSteps = (numbers, value) => {
    let a = numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)[0];
    let count = 0;
    if (value < a) return count;
    while (numbers.length) {

        a += numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)[0];
        count++;
        if (a >= value) {
            break;
        }
    }

    return count//?
}
const minimumSteps2 = (arr, value) => {
    return arr.sort((a, b) => a - b).filter(f => (value -= f) > 0).length;
}
console.log(minimumSteps2([8, 9, 10, 4, 2], 23))
console.log(minimumSteps([8, 9, 10, 4, 2], 1), 3);//?

const xhr=new XMLHttpRequest();
console.log(xhr);
xhr.open('GET','http://google.com');
xhr.send(null);
xhr.onload=()=>{
    console.log(`load: ${xhr.status} ${xhr.response}`);
}