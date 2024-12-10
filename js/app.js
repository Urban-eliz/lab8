// находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

form.addEventListener('submit', function(event){
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
             <button class="complete-btn">Выполнить</button>
             <button class="delete-btn">Удалить</button>
         </div>
     `;
     console.log(taskItem);

     
    // // формируем разметку для новой задачи
    // const taskHTML = `
    // </div> <ul id="taskList">${taskText}</ul> 
    //     </div>`

    // добавить задачу на страницу



    // // Проверяем, что поле ввода не пустое
    // if (taskText === '') {
    //     alert('Введите задачу');
    //     return;
    // }

    

    // // Добавляем задачу в список
    // taskList.appendChild(taskItem);

    // // Очищаем поле ввода
    // taskInput.value = '';

})



    




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
