const checkSimpleNum = (num) => {
  let isSimple = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) isSimple = false;
  }
  return isSimple;
};
console.log(checkSimpleNum(7));

function sum(a, b) {
  return a + b;
}