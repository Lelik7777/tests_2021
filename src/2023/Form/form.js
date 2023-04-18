const textarea = document.querySelector('#textaria');
const paragraph = document.querySelector('#paragraph');
const input = document.getElementById('input');
const checkbox = document.getElementById('checkbox');
textarea.addEventListener('focusout', () => {
    paragraph.innerHTML = textarea.value;
});
document.getElementById('button-block').addEventListener('click', () => {
    input.disabled = true;
});
document.getElementById('button-unblock').addEventListener('click', () => {
    input.disabled = false;
});
document.getElementById('button-know').addEventListener('click', () => {
    alert(input.disabled);
});

checkbox.addEventListener('change', function () {
    console.log(this.checked);
});
document.getElementById('btn-one').addEventListener('click', function () {
    checkbox.checked = true;
});
document.getElementById('btn-two').addEventListener('click', function () {
    checkbox.checked = false;
});

function putText() {
    if (document.querySelector('.block_checkbox input').checked) {
        document.querySelector('.block_checkbox p').innerHTML = 'hello';
    } else {
        document.querySelector('.block_checkbox p').innerHTML = 'bye';
    }
}

document.querySelector('.block_checkbox button').addEventListener('click', function () {
    putText();

});

document.querySelector('.block-checkbox-2 input[type="submit"]').addEventListener('click', function () {
    document.querySelector('.block-checkbox-2 input[type="checkbox"]').checked = !document.querySelector('.block-checkbox-2 input[type="checkbox"]').checked;
})
document.querySelector('.block-radio button').addEventListener('click', function (event) {

    Array.from(document.querySelectorAll('.block-radio input[type="radio"]')).forEach(el => {
        if (el.checked) {
            document.querySelector('.block-radio p').textContent = el.value;
        }
    })
});
document.querySelector('.block-input-parag input').addEventListener('change', function () {
    if(this.value.length<5||0){
        this.style.borderColor='blue';
    }
    else {
        this.style.border='5px solid red'};

});
document.querySelector('.block-input-parag input').addEventListener('input', function () {
    if(this.value.length<=5){
        document.querySelector('.block-input-parag p').textContent = `у вас еще осталось ${5-this.value.length}  символов`;
    }
    else {
        document.querySelector('.block-input-parag p').textContent = `вы превысили количество символов на  ${this.value.length-5} `;
    }


});
document.querySelector('.block-input-parag input[type="checkbox"]').addEventListener('change', function () {
    if(checkbox.checked) console.log(true);
    else console.log(false);

});

document.querySelector('.block-inputs input[name="input-first"]').addEventListener('input',function () {
    if(this.value.length===2){
        document.querySelector('.block-inputs input[name="input-second"]').focus();
    }
});
document.querySelector('.block-inputs input[name="input-second"]').addEventListener('input',function () {
    if(this.value.length===2){
        document.querySelector('.block-inputs input[name="input-second"]').blur();
    }
})