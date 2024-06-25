document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const showAllButton = document.getElementById('show-all-button');
    const showCompletedButton = document.getElementById('show-completed-button');
    const showIncompleteButton = document.getElementById('show-incomplete-button');
    const deleteAllButton = document.getElementById('delete-all-button');

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
            input.focus();
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    showAllButton.addEventListener('click', () => {
        const items = document.querySelectorAll('#todo-list li');
        items.forEach(item => item.style.display = 'flex');
    });

    showCompletedButton.addEventListener('click', () => {
        const items = document.querySelectorAll('#todo-list li');
        items.forEach(item => {
            item.style.display = item.classList.contains('completed') ? 'flex' : 'none';
        });
    });

    showIncompleteButton.addEventListener('click', () => {
        const items = document.querySelectorAll('#todo-list li');
        items.forEach(item => {
            item.style.display = item.classList.contains('completed') ? 'none' : 'flex';
        });
    });

    deleteAllButton.addEventListener('click', () => {
        todoList.innerHTML = '';
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed', checkbox.checked);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
