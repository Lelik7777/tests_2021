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

//2 Disemvowel Trolls kata 7kyu
//удалить из строки все гласные буквы
const disemvowel = (s) => {
     return s.replace(/[a,e,i,o,u,A,E,I,O,U]/g,'');

}
console.log(disemvowel("What are you, a communist?"));//?