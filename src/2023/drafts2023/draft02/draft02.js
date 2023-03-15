console.log('hello');
console.log('hello'.split(''));
console.log(new Set('hello').size);

const isIsogram = (str) => new Set(str.toLowerCase()).size === str.length ? true : false;

console.log(isIsogram("Dermatoglyphics"));
const explode = s => s.split('').filter(x => x != 0).map(x => x.repeat(x)).join('');
console.log(explode('3430'));
