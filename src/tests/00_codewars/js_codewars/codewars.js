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

            // arr.splice(arr.indexOf(arr.find(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)), 0, ' ')
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
    return s.replace(/[a,e,i,o,u,A,E,I,O,U]/g, '');

}
console.log(disemvowel("What are you, a communist?"));//?
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