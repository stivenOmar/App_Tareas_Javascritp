let form;
let titleTask;
let descriptionEvent;
let sectionTasks;
form = document.getElementById('formTask');
sectionTasks = document.getElementById('tasks')

form.addEventListener('submit',getDatesOfForm);
sectionTasks.addEventListener('click',deleteTask)

window.addEventListener('DOMContentLoaded',getTaskArrayOfLocalStorage)

function getDatesOfForm(event){
    event.preventDefault();
    titleTask = form.querySelector('#titleEvent').value;
    descriptionEvent = form.querySelector('#descriptionEvent').value;
    
    generateObjectTask(titleTask,descriptionEvent);
}

function generateObjectTask(titleTask,descriptionEvent){
    let Task;
    Task = {
        title : titleTask,
        description : descriptionEvent
    }

    addTask(Task);
    
}


function addTask(Task){

    let arrayOfLocalStorage;

    arrayOfLocalStorage = getTaskArrayOfLocalStorage();
    arrayOfLocalStorage.push(Task);
    drawTask(Task.title, Task.description);
    localStorage.setItem('tasks',JSON.stringify(arrayOfLocalStorage));

}

function drawTask(title,description){

    let card;
    card = document.createElement('div');
    card.setAttribute('class','card horizontal');

    card.innerHTML = `
    <div class="card-stacked">
        <div class="card-action ">
            <h6 class="titleCard">${title}</h6>
            <a class="waves-effect waves-light pink darken-1 btn right btnDeleteTask"><i
                    class="material-icons">delete_forever</i></a>
        </div>
        <div class="divider"></div>
        <div class="card-content">
            <p>${description}</p>
        </div>
    </div>
    `

    sectionTasks.appendChild(card);
}

function deleteTask(event){
    let titleDelete;
    let descriptionDelete;
    if(event.target.classList.contains('btnDeleteTask')){
        event.target.parentElement.parentElement.parentElement.remove();
       titleDelete = event.target.parentElement.children[0].textContent
       descriptionDelete = event.target.parentElement.parentElement.querySelector('.card-content p').textContent;
       deleteInArrayLocalStorage(titleDelete,descriptionDelete);
    }

}

function deleteInArrayLocalStorage(titleDelete,descriptionDelete){
    let arrayOfLocalStorage = getTaskArrayOfLocalStorage();
    let indice;
    for (const object of arrayOfLocalStorage) {
        if(object.title == titleDelete && object.description == descriptionDelete){
           indice =  arrayOfLocalStorage.indexOf(object);
           arrayOfLocalStorage.splice(indice,1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(arrayOfLocalStorage));
}

function getTaskArrayOfLocalStorage(){
    let tasks;
    if ( localStorage.getItem('tasks') == null ){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    

    return tasks;
}