const $sm = document.querySelector('#small');
const $med = document.querySelector('#medium');
const $big = document.querySelector('#big');

const handler1 = (e) => {
    alert(e.currentTarget.id);

}
function handler() {
    alert(this.id);
}
const handler2 = (e) => {
    alert('med');
}
const listener = ()=>alert('big');
//$sm.addEventListener('click',handler1,);
//$sm.removeEventListener('click',handler);
$med.addEventListener('click',handler1,);

//$big.addEventListener('click',handler1);
const arr=[1,3,4,5];

const handlerButtons = (e) => {
 e.stopImmediatePropagation();
  if(e.target.tagName==='BUTTON')
      alert(e.target.name);
}
$sm.addEventListener('click',handlerButtons);