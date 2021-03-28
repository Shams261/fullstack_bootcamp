const input = document.querySelector('#todolist');
const btn = document.querySelector('#btn');
const todocontainer = document.getElementById('todocontainer');

btn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    todocontainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
})

})