const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

window.addEventListener('load', () => {
    input.focus();
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value === ""){return;}
    let newItem = document.createElement('div');
    newItem.innerHTML = input.value;
    newItem.setAttribute('class','list-item');
    list.appendChild(newItem);
    input.value = "";

    newItem.addEventListener('click',(e)=>{
        list.removeChild(newItem);
    })
    input.focus();
});
