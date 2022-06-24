const isMomHappy = true;
const phone = {
    model: 'sumsung',
    color: 'black'
}
const willGetPhone = new Promise((resolve, reject) => {

    if (isMomHappy) {
        resolve(phone);
    } else {
        const reason = new Error('mom is not happy');
        reject(reason);
    }
});
//willGetPhone.then((res)=>console.log('get phone \n',JSON.stringify(res,null,' '))).catch(res=>console.log(res));
const showPhone = (phone) => {
    const message = `i got phone: ${JSON.stringify(phone, null, 3)}`;
    return Promise.resolve(message);

}
//willGetPhone.then(showPhone).then(res=>console.log(res)).catch(err=>console.log(err))
//пример того,что промис работает асинхронно
const askMom = () => {
    console.log('before asking Mom');
    willGetPhone.then(showPhone).then(console.log).catch(console.log)
    console.log('after asking Mom');
}
//можно эту же ф-цию записать через async await, но она почему-то работает нелогично
//'use strict'
// const askMomAsync = async () => {
//     try {
//         console.log('before asking Mom');
//         const phone = await willGetPhone;
//         const message = await showPhone(phone);
//         console.log(message);
//         console.log('after asking Mom');
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }
// (async ()=>{
//     await askMomAsync();
//
// })();

askMom();
const firstPromise = new Promise((res) => res('first'));
const secondPromise = new Promise((res, rej) => rej(new Error('error')));
firstPromise.then((res) => {
    console.log('first res:', res);
    return secondPromise
})
    .then((res) => alert(res))
    .catch(er => console.log(er));
const obj = {
    a: 5,
    b: 6,
    c: {
        d: 0,
        e: 19,
    }
}
fetch('https://www.omdbapi.com/?s=war&apikey=e786857c')
    .then(res => res.json()).then(res => console.log(JSON.stringify(res.Search[0], null, 2)));
console.log('---------------------------------------------')
//при наличии ошибки, отрбаботает catch, а если он завершается нормально,без ошибки,то дальше срабатывает цепочка then
fetch('https://asfsdfsf').then(res => res.json())
    .catch(er => console.log('message of error:', er.message))
    .then(() => console.log('continue work'));

new Promise((res, rej) => {
    throw  new Error('error');
}).then(() => console.log('нет ошибки'))
    .catch(er => console.log(er.message))
    .then(() => console.log('продолжаю работу после ошибки'));
//можно перебрасывать ошибки дольше
new Promise((res, rej) => {
    throw new Error('some error');
}).then(() => console.log('ошибки нет'))
    .catch((er) => {
        if (er instanceof URIError) {
            console.log('it`s url-error')
        } else {
            console.log("неизвестная ошибка,не могу обработать");
            throw  er;
        }
    }).then(() => console.log('цепочка после перевого catch'))
    .catch(er => console.log(`неизвестная ошибка: ${er}`))
    .then(() => console.log('continue after catch'));

//событие для отлавливания глобальной ошибки,которая не была обработана catch
//таким образом существует событие unhandledrejection,возникающее при необработанной ошибке,
// которое можно улавливать обработчиком событий
window.addEventListener('unhandledrejection', function(event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});


// необработанная ошибка
new Promise((res,rej)=>{
    //goHome();
    throw new Error('необработанная ошибка в catch')
}).then(res=>console.log(res));