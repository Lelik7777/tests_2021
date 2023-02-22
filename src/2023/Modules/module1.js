
//IIFE
const utils=(function () {
    const utils={};
    const obj={
        name:'bob',
        age:43,
    }
    utils.getAge=function () {
        return obj.age;
    }
    return utils;
})();
console.log(utils.getAge())
console.log(utils);

