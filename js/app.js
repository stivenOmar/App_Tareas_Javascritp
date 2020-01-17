let form;
let titleTask;
let descriptionEvent;
form = document.getElementById('formTask');

form.addEventListener('submit',getDatesOfForm);

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
    localStorage.setItem('tasks',JSON.stringify(arrayOfLocalStorage));

    console.log(arrayOfLocalStorage);
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