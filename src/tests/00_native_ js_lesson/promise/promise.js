console.log('hello')
let pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       reject(new Error('Whoops: you don`t wait'))
       // resolve('done','second parameter');//second parameter проигнорируется
    },5000)
});
pr.then((res)=>{
    console.log(res)},
    (rej)=>{
        console.log(rej)
    }
    )
pr.then(alert).catch(alert)
let axios={
    get(){
        let prom=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //resolve('hello,world');
                 reject(new Error('whoops'));
            },3000);
        });
        return prom;
    }
}
axios.get().then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err)
});
new Promise((resolve, reject) => {
   // debugger
    setTimeout(() => resolve("result"), 2000)
})
    .finally(() => alert("Промис завершён"))
    .then(result => alert(result)); // <-- .then обработает результат

function delay(ms) {
    return new Promise(res=>setTimeout(res,ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

showCircle