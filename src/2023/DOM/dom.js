

const $blockText = document.querySelector('.block__text');
const $btn = $blockText.querySelector('button');
$btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e instanceof Event);//true
    console.log(this===e.target);//true
    const $text = $blockText.querySelector('p');
    $text.textContent = 'hello world';
    console.log($text.textContent);
});
const $blockNumbers = document.querySelector('.block__numbers');
$blockNumbers.querySelector('button').addEventListener('click', function () {
    let num1 = $blockNumbers.children[0].textContent;
    const num2 = $blockNumbers.children[1].textContent;
    $blockNumbers.children[2].textContent = +num1 + (+num2);
    $blockNumbers.children[0].textContent = ++num1;
    $blockNumbers.children[3].textContent += '?'
});
console.log($blockNumbers.childNodes);
console.log($blockNumbers.childNodes.length);
console.log($blockNumbers.parentNode.previousSibling.previousSibling)
console.log($blockNumbers.contains(document.querySelector('.num')))
console.log(document.childNodes);
console.log(`${document.firstChild}
${document.lastChild}`);
//using node methods
//create element
const newText=document.createElement('p');
newText.textContent='new text';
const newText2=document.createElement('p');
newText2.textContent='changed new text';
//add element
$blockNumbers.append(newText);
//delete element
$blockNumbers.removeChild(newText);
//add element in determined position
$blockNumbers.insertBefore(newText,$blockNumbers.children[2]);
//replace
$blockNumbers.replaceChild(newText2,newText);

//element
console.log('attributes:',$blockNumbers.attributes);
[...$blockNumbers.attributes].forEach(att=>{
    console.log( att.textContent.split(' ')[1]);
});
console.log($blockNumbers.children);
//get element id
console.log($blockNumbers.id);
//innerHTML
console.log($blockNumbers.innerHTML)
console.log($blockNumbers.innerHTML.split(/\n/g).filter(x=>x!=='').map(x=>x.trim()));
console.assert($blockNumbers.classList.contains('block'));
//get name id attribute 
console.log($blockNumbers.getAttribute('id'));
//get element by class name
console.log($blockNumbers.getElementsByClassName('num'));
//has element attribute
console.log($blockNumbers.hasAttribute('id'));
//проверяет,есть ли такой селектор у элемента
console.log($blockNumbers.matches('#block-num'));
//remove element
//$blockNumbers.remove();
//remove attribute
$blockNumbers.removeAttribute('id');
//add attribute
$blockNumbers.setAttribute('data-my','block');
$blockNumbers.setAttribute('name','block-numbers');
//change value class attribute
$blockNumbers.setAttribute('class','block block-nums');

console.log(document.querySelector('#block-num').offsetHeight)

