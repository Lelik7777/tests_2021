const $blockText = document.querySelector('.block__text');
const $btn = $blockText.querySelector('button');
$btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e instanceof Event);//true
    console.log(this === e.target);//true
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
const newText = document.createElement('p');
newText.textContent = 'new text';
const newText2 = document.createElement('p');
newText2.textContent = 'changed new text';
//add element
$blockNumbers.append(newText);
//delete element
$blockNumbers.removeChild(newText);
//add element in determined position
$blockNumbers.insertBefore(newText, $blockNumbers.children[2]);
//replace
$blockNumbers.replaceChild(newText2, newText);

//element
console.log('attributes:', $blockNumbers.attributes);
[...$blockNumbers.attributes].forEach(att => {
    console.log(att.textContent.split(' ')[1]);
});
console.log($blockNumbers.children);
//get element id
console.log($blockNumbers.id);
//innerHTML
console.log($blockNumbers.innerHTML)
console.log($blockNumbers.innerHTML.split(/\n/g).filter(x => x !== '').map(x => x.trim()));
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
$blockNumbers.setAttribute('data-my', 'block');
$blockNumbers.setAttribute('name', 'block-numbers');
//change value class attribute
$blockNumbers.setAttribute('class', 'block block-nums');


//create input and button
const $blockInput = document.createElement('div');
$blockInput.innerHTML = `<input class="block__input" type='text'>
<button>add user</button>
`;
$blockInput.classList.add('block-input');
// create list 
const $ul = document.createElement('ul');

function renderItems(container, data) {
    container.innerHTML = data
        .map(item => `<li class='${item.removed ? "_removed" : ""}'>${item.name}</li>`)
        .join('');
}

renderItems($ul, window.data);
document.body.append($blockInput);
document.body.append($ul);

//old school method transform array-like to array
console.log([].slice.call($ul.children));

//html collection transform in array and вешаем обработчик на каждый li
// [...$ul.children].forEach(item => {
//     item.addEventListener('click', function () {
//         item.classList.toggle('_removed');
//     });
// });
//using event delegation
$ul.addEventListener('click', function (e) {
    e.target.classList.toggle('_removed');
    //add flag removed
    //суть в том,что когда нажимаем на li, то в объекте,который храниться  в window.date добавляем свойство removed,которое проверяется при отрисовке 
    const index = [...$ul.children].indexOf(e.target);
    console.log(window.data[index].removed);//undefined
    //!undefined === true         return true
    window.data[index].removed =  !window.data[index].removed;
    
});
$blockInput.addEventListener('click', function (e) {
    const input = document.querySelector('.block__input');
    // const li = document.createElement('li');
    // li.textContent = input.value;
    // if (li.textContent) {
    //     $ul.append(li);
    //     input.value='';
    // }
    //вместо создания li , я обновляю данные и заново отрисовываю
    if (input.value) {
        window.data.push({
            name: input.value,
        });
        renderItems($ul, window.data);
        input.value = '';
    }

})

var testFunction = function () {
    console.log(arguments.constructor);
    console.log([].constructor)
};

//пример императивного программирования
function sum(...items) {
    let sum=0;
    for (let i=0;i<items.length;i++){
        sum+=items[i];
    }
    return sum;
}

console.log(sum(3,4,5));
//пример декларативного программирования
const sum2=(...items)=>items.reduce((acc,curr)=>acc+curr);
console.log(sum2(4,5,6));

function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();

//console.log(a) 