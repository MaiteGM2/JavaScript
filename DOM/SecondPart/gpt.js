document.getElementById('add-list-btn').addEventListener('click', function() {
    const listsContainer = document.getElementById('lists-container');
    const newListInput = document.getElementById('new-list');
    const newListName = newListInput.value.trim();

    if (newListName !== '') {
        const listDiv = document.createElement('div');
        listDiv.className = 'list';

        const listTitle = document.createElement('h2');
        listTitle.textContent = newListName;

        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.placeholder = 'Nueva tarea...';

        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = 'Agregar';
        addTaskBtn.className = 'add-task-btn';

        const taskList = document.createElement('ul');
        taskList.className = 'task-list';

        const removeListBtn = document.createElement('button');
        removeListBtn.textContent = 'Eliminar Lista';
        removeListBtn.id = 'remove-list-btn';
        removeListBtn.addEventListener('click', function() {
            listsContainer.removeChild(listDiv);
        });

        addTaskBtn.addEventListener('click', function() {
            const newTaskText = taskInput.value.trim();

            if (newTaskText !== '') {
                const newTaskItem = document.createElement('li');
                newTaskItem.className = 'task-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const taskText = document.createElement('span');
                taskText.textContent = newTaskText;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Eliminar';
                deleteBtn.addEventListener('click', function() {
                    taskList.removeChild(newTaskItem);
                });

                newTaskItem.appendChild(checkbox);
                newTaskItem.appendChild(taskText);
                newTaskItem.appendChild(deleteBtn);

                taskList.appendChild(newTaskItem);

                taskInput.value = '';
            }
        });

        listDiv.appendChild(listTitle);
        listDiv.appendChild(taskInput);
        listDiv.appendChild(addTaskBtn);
        listDiv.appendChild(taskList);
        listDiv.appendChild(removeListBtn);

        listsContainer.appendChild(listDiv);

        newListInput.value = '';
    }
});

