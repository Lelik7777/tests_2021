const obj = {a: 1, b: 3, c: 5, d: {t: 34}};
console.log(JSON.stringify(obj));
//третим параментром можно передать разделитель в виде пустой строки или \t, также можно передать число,
//которое будет означать кольичество пробелов в пустой строке
console.log(JSON.stringify(obj, null, ' '))
console.log(JSON.stringify(obj, null, 3))
console.log(JSON.stringify(obj, null, '\t'))
//вторым параметром можем передать ф-цию,которая отмапит значения объекта
//к примеру эта ф-ция увеличивает все значения объекта на единицу
const changer = JSON.stringify(obj, function (key, value) {
    if (typeof value === "number") {
        return value + 1;
    }
    return value;
}, ' ')
console.log(changer);
//метод toJSON в объекте - по итогу в ключ,в котором объект с методом toJSON запишется результат,который
// возвращает этот метод
const obj2 = {
    a: 2,
    b: 5,
    c: {
        t: 'hello',
        toJSON: () => 'test',
    }
};
console.log(JSON.stringify(obj2,null,' '))
