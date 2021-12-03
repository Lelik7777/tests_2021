// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
//+
export function sum(...nums: Array<any>): number {

    return nums.reduce((a, x) => a + x, 0);
}


// 2. Функция getTriangleType принимает три параметра:??
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && b === c) {
            return '10'
        }
        if (a === b || b === c || c === a) {
            return '01'
        }
        return '11'
    } else return '00'
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
//+
export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return String(number)
        .split('')
        .reduce((a, x) => a + Number(x), 0);
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
//+
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    /* let sum1=0;
     let sum2=0;
     for (let i=0;i<arr.length;i++){
         if(i%2===0){
             sum1+=arr[i];
         }
         else sum2+=arr[i];
     }
     console.log(sum1,sum2)
     return sum1>sum2;*/

    return arr.filter((x, i) => i % 2 === 0)
            .reduce((a, x) => a + x, 0)
        > arr.filter((x, i) => i % 2 !== 0)
            .reduce((a, x) => a + x, 0);
}
// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
//+

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array
        .map(x => x > 0 && x % 2 === 0 ? x ** 2 : 0)
        .filter(x => x);
}


// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    /*  let sum=0;
      for (let i=0;i<=N;i++){
          sum+=i;
      }
      return sum;*/
    return N === 0 ? 0 : N + sumFirstNumbers(N - 1);
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}