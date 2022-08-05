console.log('%cFetch', 'color:blue;font-size:18px;margin-left:300px');
//fetch - это метод для сетевых запросов,ответ которого происходит в два этапа
//let promise=fetch(url,[options]);==базовый синтаксис этого метода
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
promise.then(res => res.text()).then(res => console.log('text:', res));
//тоже самое, но через async-await
(async function () {
    try {//первый этап
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //здесь на первом этапе мы получили объект Response,у которого обычно нам интересны свойства:
        //ok:true or false , status: 200 or 400 or 500 , url - собственно наш url запроса
        console.log('Response: ', res)//Response{type: 'cors',
        // url: 'https://api.github.com/users/iliakan',
        // redirected: false, status: 200, ok: true, …
        console.log(res.headers)

        //на втором этапе используются уже разные метооды объекта Response, но можно запускать только один, остальные не отработают
        // const text = await res.text();
        // console.log(text);
        //одновременно получить res.text() and res.json() нельзя, только что-то одно
        const json = await res.json();
        console.log('json: ', json)//{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        // const blob = await res.blob();
        // console.log(blob)//Blob {size: 83, type: 'application/json'}
        // const arrayBuffer=await res.arrayBuffer();
        // console.log(arrayBuffer);//ArrayBuffer(83)
    } catch (e) {
        console.log(e)
    }
})();
(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const text = await res.text();
    console.log(text)
})();

(async ()=>{
const res=fetch('https://jsonplaceholder.typicode.com/posts/100',{
    method:'PUT',
    body:JSON.stringify({
        id:1,
        title:'some text',
        body:'safdsdfasdfsdafdsafdsaf',
        userId:1,
    }),
    headers:{
        'Content-type':'application/json;charset=UTF-8'
    }
});
const json=(await res).json();
    console.log(json);
})();
(async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/100');
        const json = await res.json();
        console.log(json)
    }catch (e) {
        console.log(e)
    }
})()
