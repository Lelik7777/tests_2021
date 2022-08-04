console.log('%cFetch', 'color:blue;font-size:18px;margin-left:300px');
//fetch - это метод для сетевых запросов,ответ которого происходит в два этапа
//let promise=fetch(url,[options]);==базовый синтаксис этого метода
const promise = fetch('https://api.github.com/users/iliakan');
promise.then(res => res.text()).then(res => console.log(res));
//тоже самое, но через async-await
(async function () {
    //первый этап
    const res = await fetch('https://api.github.com/users/iliakan');
    //здесь на первом этапе мы получили объект Response,у которого обычно нам интересны свойства:
    //ok:true or false , status: 200 or 400 or 500 , url - собственно наш url запроса
    console.log('res: ', res)//Response{type: 'cors',
    // url: 'https://api.github.com/users/iliakan',
    // redirected: false, status: 200, ok: true, …

})();