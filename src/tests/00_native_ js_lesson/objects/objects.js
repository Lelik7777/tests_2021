let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sumSal = (obj) => {
    let sum = 0;
    for (const objKey in obj) {
        sum += obj[objKey];
    }
    return sum;
}
console.log(sumSal(salaries));

const multiplyNum = (obj) => {
    for (const objKey in obj) {
        if(typeof obj[objKey]==="number"){
            obj[objKey]*=2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNum(menu)
console.log(menu)