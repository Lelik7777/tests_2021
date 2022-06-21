console.log("hello");
let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject(new Error('Whoops: you don`t wait'))
    resolve({ name: "bob", message: "hello,bob" }); //second parameter проигнорируется
  }, 5000);
});
pr.then(
  (res) => {
    console.log(res);
    return res.message;
  },
  (rej) => {
    console.log(rej);
  }
).then((res) => {
  console.log(res);
});
pr.then(alert).catch(alert);
let axios = {
  get() {
    let prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve('hello,world');
        reject(new Error("whoops"));
      }, 3000);
    });
    return prom;
  },
};
/*axios.get().then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err)
});
new Promise((resolve, reject) => {
   // debugger
    setTimeout(() => resolve("result"), 2000)
})
    .finally(() => alert("Промис завершён"))
    .then(result => alert(result)); // <-- .then обработает результат*/

/*function delay(ms) {
    return new Promise(res=>setTimeout(res,ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));*/

/*new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function(result) {

    alert(result); // 1
    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) { // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) {

    alert(result); // 4

});*/

/*
const culc={
    num:0,
    plus(a){
        this.num+=a;
        return this;
    },
    minus(a){
        this.num-=a;
        return this;
    }
}
culc.plus(5).minus(3).plus(3);
console.log(culc.num);//?*/

// let fetch = (url) => {
//     return new Promise((res, rej) => {
//         switch (url) {
//             case 'google':
//                 setTimeout(() => {
//                     res({data: ' from google'});
//                 }, 2000);
//                 break;
//             case 'yandex':
//                 setTimeout(() => {
//                     res({data: ' from yandex'})
//                 }, 4000);
//                 break;
//             default:
//                 setTimeout(() => {
//                     res({data: ' from anywhere'})
//                 }, 1000)
//         }
//     });
// }
/*fetch('').then(res=>{
    console.log(res.data)
})
fetch('google').then(res=>console.log(res.data))
fetch('yandex').then(res=>console.log('yoho'))*/
/*fetch('google').then(res => {
    console.log(res.data);
    return fetch('yandex')
})
    .then(res => {
        console.log(res.data);
        return fetch('');
    })
    .then(res => console.log(res.data));*/

// the same with async
const makeRequest = async () => {
  const res = await fetch("google");
  res && console.log(res.data);
  const res2 = await fetch("yandex");
  res2 && console.log(res2.data);
  const res3 = await fetch("");
  res3 && console.log(res3.data);
};
//makeRequest();
const makeRequestOnOneMoment = () => {
  Promise.all([fetch("google"), fetch("yandex"), fetch("")]).then((res) => {
    console.log("1" + res[0].data);
    console.log("2" + res[1].data);
    console.log("3" + res[2].data);
  });
};
//makeRequestOnOneMoment();

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
};
const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?number=10"
  );
  return await res.json();
};
const getPosts2 = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts?number=10").then(
    (res) => res.json()
  );
};
getPosts().then((data) => console.log(data));
getPosts2().then((data) => console.log(data));
Promise.all([getUsers(), getPosts()]).then((res) => console.log(res));

//срабатывает только один - то, что располежен первым
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise is reject");
    resolve("promise is resolved");
  }, 3000);
});
promise.then((value) => console.log(value)).catch((err) => console.log(err));
const promise1 = new Promise((res, rej) => {
  res(1);
  setTimeout(() => {
    res(2);
  }, 4000);
});
promise1.then(alert);

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
delay(6000).then(() => alert("execute in 6 sec"));
