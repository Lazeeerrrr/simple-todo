let button = document.querySelector('button');
let list = document.querySelector('ul');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = prompt('Введите название нового ToDo');
    list.prepend(li);
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})