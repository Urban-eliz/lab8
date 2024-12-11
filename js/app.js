// находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

//добавление задачи
form.addEventListener('submit', addTask)


// удаление задачи
taskList.addEventListener('click', deleteTask)

// функции
function addTask(event) {
    //отменяем отправку формы
    event.preventDefault();
    

    //достаем текст задачи из поля ввода
    const taskText = taskInput.value;


    // // Создаём новый элемент задачи
     const taskItem = document.createElement('li');
     taskItem.classList.add('task-item'); // Добавляем класс для стилей

    // // Создаём разметку для задачи
     taskItem.innerHTML = `
         <span class="task-text">${taskText}</span>
         <div class="task-actions">
             <button class="complete-btn">&#10004</button>
             <button class="delete-btn">&#10006</button>
         </div>
     `;
     
     // Добавляем задачу в список
    taskList.appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = '';

    //перевод фокуса на поле ввода
    taskInput.focus();

}

function deleteTask(event) {
    // Проверяем, что клик был по кнопке удаления
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.closest('li'); // Находим соответствующий элемент <li>
        taskItem.remove(); // Удаляем его из DOM
    }
}




    




// // Получаем элементы из DOM
// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const taskList = document.getElementById('taskList');

// // Добавление новой задачи
// addTaskBtn.addEventListener('click', () => {
//     const taskText = taskInput.value.trim();

//     if (taskText === '') {
//         alert('Введите текст задачи!');
//         return;
//     }

//     // Создаём новый элемент задачи
//     const listItem = document.createElement('li');
//     listItem.textContent = taskText;

//     // Добавляем кнопки управления
//     const completeBtn = document.createElement('button');
//     completeBtn.textContent = '✓';
//     completeBtn.style.backgroundColor = '#5cb85c'; // Зелёная кнопка
//     completeBtn.addEventListener('click', () => {
//         listItem.classList.toggle('completed');
//     });

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'X';
//     deleteBtn.addEventListener('click', () => {
//         taskList.removeChild(listItem);
//     });

//     // Добавляем кнопки в задачу
//     listItem.appendChild(completeBtn);
//     listItem.appendChild(deleteBtn);

//     // Добавляем задачу в список
//     taskList.appendChild(listItem);

//     // Очищаем поле ввода
//     taskInput.value = '';
// });

// // Добавляем поддержку Enter для добавления задачи
// taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         addTaskBtn.click();
//     }
// });
