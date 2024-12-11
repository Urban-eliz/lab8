// находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

//добавление задачи
form.addEventListener('submit', addTask)

// отмечаем задачу выполненной

taskList.addEventListener('click', doneTask)


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

function doneTask(event){
    // Проверяем, что клик был по кнопке выполнения
    if (event.target.classList.contains('complete-btn')) {
        const taskItem = event.target.closest('li'); // Находим соответствующий элемент <li>
        taskItem.classList.toggle('task-title--done'); // отмечаем выполненным
    }
}