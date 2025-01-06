
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show'); 
});


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">V</button>
                <button class="delete">X</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
