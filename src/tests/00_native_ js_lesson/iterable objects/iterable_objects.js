console.log('%citerable objects', 'color:blue;font-size:1.2rem');
// создаем итерируемый объект
//у самого объекта range нет метода next(),который присутствует у объекта итератор
//здесь мы разделяем итерируемый объект и собственно итератор
const range = {
    from: 1,
    to: 5,
};
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true};
            }
        }
    }
}
for (const rangeElement of range) {
    console.log(rangeElement)
}
//мы можем создать next()прямо у объекта range для упрощения кода,только через метод [Symbol.iterator] нужно создать
//промежуточную переменную,которую будем изменять в методе next()
const range2 = {
    from: 1,
    to: 4,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        // if (this.current <= this.to) {
        //     return {done: false, value: this.current++}
        // } else {
        //     return {done: true};
        // }
        // the same but by ternary operator
        return this.current<=this.to?{done:false,value:this.current++}:{done:true};
    }
}
for (const number of range2) {
    console.log(number)
}