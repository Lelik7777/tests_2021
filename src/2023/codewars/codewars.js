//Duplicate Encoder
/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.*/
const duplicateEncode = (word) => [...word.toLowerCase()].map((char, i, arr) => arr.filter(el => arr[i] === el).length > 1 ? ')' : '(').join('');


//Human readable duration format
const formatDuration2 = seconds => {
    const time = {
        minute: 60,
        hour: 3600,
        day: 86400,
        month: 2.628e6,
        year: 3.154e7,
        getKey(value) {
            for (const nameKey in this) {
                if (value === this[nameKey]) {
                    return nameKey;
                }
            }
        },
        getPrevKey(value) {
            if (value) {
                if (Object.values(this)[0] === value) {
                    return Object.keys(this)[0];
                }
                const index = Object.values(this).findIndex(x => x === value);
                return Object.keys(this)[index - 1];
            }
        }
    }
    const endOfStr = num => num > 1 ? 's' : '';
    const roundNum = num => Math.trunc(num);
    const getStrTime = (value, str1, str2) => `${roundNum(seconds / value)} ${str1}${endOfStr(roundNum(roundNum(seconds / value)))}${seconds % value ? ` and ${seconds % value} ${str2}${endOfStr(roundNum(seconds % value))}` : ''}`;
    const timeString = (time, str1, str2) => `${Math.trunc(seconds / time)} ${str1}${endOfStr(Math.trunc(seconds / time))}${seconds % time ? ` and ${seconds % time} ${str2}${endOfStr(Math.trunc(seconds % time))}` : ''}`;
    if (seconds < time.minute) {
        return `${seconds} second${endOfStr(seconds)}`;
    }
    if (seconds >= time.minute && seconds < time.hour) {
        // return `${Math.trunc(seconds / minute)} minute${multiOrOne(Math.trunc(seconds / minute))}${seconds % minute ? ` and ${seconds % minute} seconds` : ''}`;
        return timeString(time.minute, 'minute', 'second');
    }
    if (seconds >= time.hour && seconds < time.day) {
        return getStrTime(time.hour, time.getKey(time.hour), time.getPrevKey(time.hour));
    }
}


//console.log(getTime(90000));

const formatDuration3 = seconds => {
    const time = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        month: 2.628e6,
        year: 3.154e7,
    }
    const getRoundNum = num => Math.trunc(num);
    const getDate = (value, time) => getRoundNum(value / time);
    const getRest = (value, time) => value % time;
    const endStr = value => value > 1 ? 's' : '';

    const years = getDate(seconds, time.year)
    const restFromYears = getRest(seconds, time.year);
    const months = getDate(restFromYears, time.month);
    const restFromMonths = getRest(restFromYears, time.month);
    const days = getDate(restFromMonths, time.day);
    const restFromDays = getRest(restFromMonths, time.day);
    const hours = getDate(restFromDays, time.hour);
    const restOfHours = getRest(restFromDays, time.hour);
    const minutes = getDate(restOfHours, time.minute);
    const seconds2 = restOfHours % time.minute;
    const date = {years, months, days, hours, minutes, seconds2};
    console.log(date);
    if (seconds === 0) return 'now';
    return `${years ? `${years} year${endStr(years)}` : ''}${months ? `, ${months} month${endStr(months)}` : ''}${days ? `, ${days} day${endStr(days)}` : ''}${hours ? `, ${hours} hour${endStr(hours)}` : ''}${minutes ? `, ${minutes} minute${endStr(minutes)}` : ''}${seconds2 ? ` and ${seconds2} second${endStr(seconds2)}` : ''}`.trim().replace(/\,/, '').replace(/^and/, '').trim();
}

const formatDuration = seconds => {
    const time = {year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1};
    const str = [];
    for (const key in time) {
        if (seconds === 0) return 'now';
        if (seconds >= time[key]) {
            const substr = Math.trunc(seconds / time[key]);
            str.push(`${substr} ${key}${substr > 1 ? 's' : ''}`)
        }
        seconds = seconds % time[key];
    }

    return str.join(', ').replace(/,([^,]*)$/, ' and$1', str)
}
console.log(formatDuration(23444))

function formatDuration5(seconds) {
    var time = {year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1},
        res = [];

    if (seconds === 0) return "now";

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push((val += val > 1 ? " " + key + "s" : " " + key));
            seconds = seconds % time[key];
        }
    }

    return res.length > 1
        ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
        : res[0];
}

//7 kyu
// Which color is the brightest?

function brightest(colors) {
    const arr = [];
    colors.forEach(color => {
        const max = Math.max(...color.slice(1).match(/.{2}/g).map(num => Number.parseInt(num, 16)));
        arr.push(max);
    })
    return colors[arr.indexOf(Math.max(...arr))];
}

function head(arr) {
    return arr[0];
}

function tail(arr) {
    return arr.slice(1);
}

function init(arr) {
    return arr.slice(0, -1);
}

function last(arr) {
    return arr.at(-1);
}

console.log([3, 4, [4, 5, [4]]].length)

function deepCount(a) {
    // return a.reduce((acc, cur) => {
    //     return acc + (Array.isArray(cur) ? deepCount(cur) : 0)},
    //     a.length);
    let length = a.length;
    for (const el of a) {
        if (Array.isArray(el)) {
            length += deepCount(el);
        }
    }
    return length;
}

function deepCount2(a) {
    return a.reduce(
        (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
        a.length
    );
}

console.log(deepCount([3, 4, [4, 5, [4]]]));

//Length of missing array
function getLengthOfMissingArray(arrayOfArrays) {
    const lengths = (arrayOfArrays || []).map(arr => arr ? arr.length : 0).sort((a, b) => a - b);
    if (lengths.includes(0)) return 0;
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1;
        }
    }
    return 0;
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([0, []]));

//Pair of gloves
function numberOfPairs(gloves) {
    let count = 0;
    let arr = [...gloves].sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < gloves.length - 1; i++) {
        if (gloves[i] === gloves[i + 1]) {
            count++;
            i++;
        }
    }
    return count;
}

const numberOfPairs2 = gloves => {
    const uniqueArr = [...new Set(gloves)];
    return uniqueArr.reduce((acc, cur) => acc + Math.floor(gloves.join('').match(new RegExp(cur, 'g')).length / 2), 0);

}
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
console.log(["red", "green", "red", "blue", "blue"].sort());
console.log(["red", "green", "red", "blue", "blue"].join('').match(new RegExp('red', 'g')));
console.log(["red", 'red', "green", "red", "blue", "blue"].join('').match(/red/g));
console.log(numberOfPairs2(["red", 'red', "green", "red", "blue", "blue"]));

//Sorting by bits
console.log(7..toString(2).split('').reduce((acc, cur) => acc + Number(cur), 0));
console.log(6..toString(2));
console.log(8..toString(2));
console.log(15..toString(2));

function sortByBit(arr) {
    //transform num to bit
    const convertBit = (bit) => [...bit.toString(2)].reduce((acc, cur) => acc + Number(cur), 0);
    //
    return arr.sort((a, b) => convertBit(a) === convertBit(b) ? a - b : convertBit(a) - convertBit(b));
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));
console.log([3, 8, 3, 6, 5, 7, 9, 1].map(el => [...el.toString(2)].reduce((a, b) => a + Number(b), 0)));

console.log([0, 1, '^^'].find(x => x === '^^'));
const res = [
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
].reduce((acc, cur) => {
    if (cur.find(x => x === '^^')) {
        acc += cur.filter(x => x === '^^').length;
    }
    return acc;
}, 0);
console.log(res);

let matrix = [
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
];
for (let i in matrix) {
    console.log(matrix[i])
}
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {

    const k = 0.693 / HALF_LIFE_PERIOD;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof sampleActivity !== 'string' || Number.isNaN(sampleActivity) || !sampleActivity || (Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY)) return false;

    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
}

console.log(dateSample('10'));

function check2(arr1, arr2) {
    let count = 0;
    arr1.forEach(el => {
        if (arr2.includes(el)) {
            count++;
            arr2.splice(arr2.indexOf(el), 1)
        }
    })
    return count;
}

const check = (arr1, arr2) => [...arr1].reduce((acc, cur) => {
    if ([...arr2].includes(cur)) {
        [...arr2].splice(arr2.indexOf(cur), 1);
        acc++;
    }
    return acc;
}, 0)

function getCommonCharacterCount(s1, s2) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arr1 = [...s1];
    const arr2 = [...s2];
    return arr1.reduce((acc, cur) => {
        if (arr2.includes(cur)) {
            arr2.splice(arr2.indexOf(cur), 1);
            acc++;
        }
        return acc;
    }, 0)
}

console.log(getCommonCharacterCount("adcaa", "aabcc"));

function deleteDigit(n) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arrNum = [...String(n)];
    const arr = [];
    for (let i = 0; i < arrNum.length; i++) {
        const subStr = [...arrNum];
        subStr.splice(i, 1);
        arr.push(subStr);
    }
    return Math.max(...arr.map(x => +x.join('')));
}

console.log(deleteDigit(1001));

function createDreamTeam(members) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //return  members.map(name => typeof name === 'string' ? [...name.toUpperCase()].splice(0, 1) : '').sort().join('');
    return members.filter(name => typeof name === 'string').map(name => [...name.toUpperCase()].splice(0, 1).join('')).sort().join('');
}

console.log(createDreamTeam(['Peter', 'adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']));
console.log([...'maat'].splice(0, 1))

console.log('  A sd g'.replace(/ /g, ''));

function encodeLine(str) {
    const strArr = [...str];
    const arr = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (str[i] !== str[i + 1]) {
            arr.push(strArr.splice(0, count));
            count = 0;
        }
    }
    return arr.map(el => el.length > 1 ? `${el.length}${el[0]}` : el[0]).join('');

}

//repeater('STRING', { repeatTimes: 3, separator: '**',
// //addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
function repeater(str, options) {
    options = {
        repeatTimes: options.repeatTimes ?? 1,
        separator: options.separator ?? '+',
        addition: options.addition === null ? 'null' : options.addition === undefined ? '' : options.addition,
        additionRepeatTimes: options.additionRepeatTimes ?? 1,
        additionSeparator: options.additionSeparator ?? '|',
    }
    let arr = []
    let substr;
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        arr.push(options.addition);
    }
    substr = arr.join(options.additionSeparator);
    arr = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        arr.push(String(str) + substr);
    }
    return arr.join(options.separator);
}

console.log(repeater('STRING', {
    repeatTimes: 3, separator: '**',
    addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'
}));


// ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
function renameFiles(names) {
    const arr = [];
    const temp = [];

    names.forEach(el => {
        const length = temp.filter(x => x === el).length;
        if (arr.includes(el)) {
            arr.push(`${el}(${length})`);
            temp.push(`${el}(${length})`);
        } else {
            arr.push(el);
        }
        temp.push(el);
    });
    return arr;
}

renameFiles(["file", "file", "image", "file(1)", "file"]);


function isMAC48Address(n) {
    // let str = n.split('-').join('');
    // console.log(n.replace(/-/g,'')===str)
    // //let reg = /[ABCDEF0123456789]/g;
    // let reg=/[0-9]|[A-F]/g;
    // console.log(str.match(reg))
    // if (str.match(reg).join('') === str && str.match(reg).join('').length === str.length) {
    //     return true;
    // } else {
    //     return false;
    // }
    console.log(n.replace(/-/g, ''))
    console.log(n.replace(/-/g, '') === n.replace(/-/g, '').match(/[A-F]|[0-9]/g).join(''))
    return n.replace(/-/g, '') === n.replace(/-/g, '').match(/[A-F]|[0-9]/g).join('')
}

isMAC48Address('00-1B-63-84-45-E6');
isMAC48Address('00-1B-63-84-45-z6');

function calculateHanoi(disksNumber, turnsSpeed) {
    console.log(2)
    return {turns: 2 ** disksNumber - 1, seconds: Math.floor((2 ** disksNumber - 1) * 3600 / turnsSpeed)};
}

function getMatrixElementsSum(matrix) {
    let result = 0;
    matrix[0].forEach((el) => result += el);

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i - 1][j])
            if (matrix[i - 1][j] != 0) {
                result += matrix[i][j];
            }
        }
    }
    return result;
}

console.log(getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
]));

class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        arr.forEach(el => {
            let innerCount = 1;
            if (Array.isArray(el)) {
                innerCount += this.calculateDepth(el);
                if (innerCount > count) count = innerCount;
            }
        });
        return count;
    }
}

console.log(new DepthCalculator().calculateDepth([[[]]]));
console.log([3, 4, 5].splice(3, 1));

function sortByHeight(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const sortArr = arr.filter(el => el !== -1).sort((a, b) => a - b);
    // arr.forEach((el, i) => {
    //     if (el === -1) {
    //         sortArr.splice(i,0,-1);
    //     }
    // })
    console.log(sortArr)
    console.log(arr.map((el, i) => el === -1 ? -1 : el));
};
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

function getSumOfDigits(n) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sum = String(n).split('').reduce((acc, cur) => acc + (+cur), 0);
    return sum > 10 ? getSumOfDigits(sum) : sum;
}

getSumOfDigits(132)

//res += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[index++ % key.length])) % this.alphabet.length];
function transform(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
    arr.forEach((el, i) => {
        if (el === '--double-next') {
            arr.splice(i, 1, arr[i + 1]);
        }
    })
    arr.forEach((el,i) => {
        if (el === '--double-prev') {
            if(arr[i-2]==='--discard-next'){
                console.log(arr)
                arr.splice(i-2,3);
                console.log(arr)
            } else{
                arr.splice(i, 1, arr[i - 1]);
            }


        }
    })
    arr.forEach((el,i) => {
        if (el === '--discard-next') {

            if(arr[i+2]==='--discard-prev'){
                arr.splice(i, 3);

            }

            else {
                arr.splice(i, 2);
            }
        }
    });
    arr.forEach((el,i) => {
        if (el === '--discard-prev') {
            arr.splice(i - 1, 2);
        }
    })


    return arr;
}

transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// let array = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
// array.splice(array.indexOf('--discard-next'),2)
// console.log(array)

console.log([3,4,5].at(-1))


class BinarySearchTree {
    constructor() {
        this.node = null;
    }

    root() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.node;
    }

    add(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let leaf = new Node(data);
        if (!this.node) {
            this.node = leaf;
            return this.node;
        }
        let currNode = this.node;
        let isEnd = false;
        while (!isEnd) {
            if (currNode.data > leaf.data) {
                if (!currNode.left) {
                    currNode.left = leaf;
                    break;
                } else {
                    currNode = currNode.left;
                }
            } else if (currNode.data < leaf.data) {
                if (!currNode.right) {
                    currNode.right = leaf;
                    break;
                } else {
                    currNode = currNode.right;
                }
            } else break;
        }
    }

    has(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.find(data) ? true : false;
    }

    find(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!this.node) return null;
        let currNode = this.node;
        let isEnd = false;
        while (!isEnd) {
            if (currNode.data === data) {
                return currNode;
            } else if (currNode.data > data) {
                if (!currNode.left) {
                    return null;
                }
                currNode = currNode.right;
            }
        }
    }

    remove(data) {
        /// throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.node = removeNode(this.node, data);

        function removeNode(currNode, data) {
            if (!currNode) return null;
            if (data > currNode.data) {
                currNode.right = removeNode(currNode.right, data);
            } else if (data < currNode.data) {
                currNode.left = removeNode(currNode.left, data);
            } else {
                if (!currNode.left) {
                    return currNode.right;
                } else if (!currNode.right) {
                    return currNode.left;
                } else {
                    let min = currNode.right;
                    while (min.left) {
                        min = min.left
                    }
                    currNode.data = min.data;
                    currNode.right = removeNode(currNode.right, min, data);
                }
            }
            return  currNode;
        }
    }

    min() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if(!this.node) return this.node;
        let currNode=this.node;
        while (true){
            if(currNode.left){
                currNode=currNode.left;
            }else {
                return  currNode.data;
            }

        }
    }

    max() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if(!this.node) return this.node;
        let currNode=this.node;
        while (true){
            if(currNode.right) {
                currNode=currNode.right
            }else {
                return currNode.data;
            }
        }
    }
}

console.log(4<<2)