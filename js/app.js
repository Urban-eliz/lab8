// находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

// Фильтры
const filterAll = document.querySelector('#filterAll');
const filterCompleted = document.querySelector('#filterCompleted');
const filterUncompleted = document.querySelector('#filterUncompleted');

//массив который содержит в себе все задачи
let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task));
}

// tasks.forEach(function(task) {
//     renderTask(task);
// });

//добавление задачи
form.addEventListener('submit', addTask)

// отмечаем задачу выполненной

taskList.addEventListener('click', doneTask)


// удаление задачи
taskList.addEventListener('click', deleteTask)


filterAll.addEventListener('click', () => filterTasks('all'));
filterCompleted.addEventListener('click', () => filterTasks('completed'));
filterUncompleted.addEventListener('click', () => filterTasks('uncompleted'));


// функции
function addTask(event) {
    //отменяем отправку формы
    event.preventDefault();
    

    //достаем текст задачи из поля ввода
    const taskText = taskInput.value;

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false,
    };

    // добавить задачу в массив с задачей
    tasks.push(newTask)

    // добавляем задачу в хранилище браузера локал сторейдж
    saveToLocalStorage();

    renderTask(newTask);

    // Очищаем поле ввода
    taskInput.value = '';

    //перевод фокуса на поле ввода
    taskInput.focus();

}

function deleteTask(event) {

     // Проверяем, что клик был по кнопке удаления
     if (event.target.classList.contains('delete-btn')) {
        // Находим элемент задачи в DOM
        const taskItem = event.target.closest('li'); 

        // Получаем ID задачи из атрибута
        const taskId = Number(taskItem.getAttribute('data-id'));

        // Удаляем задачу из массива по ID
        tasks = tasks.filter(task => task.id !== taskId);
        saveToLocalStorage();
        // Удаляем задачу из DOM
        taskItem.remove();
    }

}

function doneTask(event){
   // Проверяем, что клик был по кнопке выполнения
   if (event.target.classList.contains('complete-btn')) {
    const taskItem = event.target.closest('li'); // Находим соответствующий элемент <li>
    
    // Получаем ID задачи из атрибута
    const taskId = Number(taskItem.getAttribute('data-id'));

    // Находим задачу в массиве и переключаем её статус
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.done = !task.done; // Меняем статус на противоположный
    }

    // добавляем задачу в хранилище браузера локал сторейдж
    saveToLocalStorage();

    // Обновляем визуальное состояние задачи
    taskItem.classList.toggle('task-title--done'); // Добавляем/убираем класс выполненной задачи
}

}

// сохраняем разметку в локальном хранилише
function saveToLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


function renderTask(task){

    // формируем css класс
    const cssClass = task.done ? "task-title task-title--done" : "task-title";

    // Создаём новый элемент задачи
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item'); // Добавляем класс для стилей

    // Привязываем идентификатор задачи к DOM-элементу
    taskItem.setAttribute('data-id', task.id);

    // Создаём разметку для задачи
    taskItem.innerHTML = `
        <span class= "${cssClass}">${task.text}</span>
        <div class="task-actions">
            <button class="complete-btn">&#10004</button>
            <button class="delete-btn">&#10006</button>
        </div>
    `;
     
     // Добавляем задачу в список
    taskList.appendChild(taskItem);

}

function filterTasks(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (filter === 'all') {
        filterAll.classList.add('active');
    } else if (filter === 'completed') {
        filterCompleted.classList.add('active');
    } else if (filter === 'uncompleted') {
        filterUncompleted.classList.add('active');
    }

    taskList.innerHTML = '';
    let filteredTasks = [];
    if (filter === 'all') {
        filteredTasks = tasks;
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.done);
    } else if (filter === 'uncompleted') {
        filteredTasks = tasks.filter(task => !task.done);
    }
    filteredTasks.forEach(task => renderTask(task));
}