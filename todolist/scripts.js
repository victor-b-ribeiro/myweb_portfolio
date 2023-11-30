const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-tasks')
let myList = []

// Adicionar novas tarefas 
function addNewTask() {
    myList.push({
    task: input.value,
    concluded: false,
    
})
input.value = ''
showTasks()
}
function showTasks(){
    let newLi = ''
    myList.forEach((item, position) => {
        newLi = 
         newLi + 
        `
        
        <li class="task ${item.concluded && 'done'}">
          <img src="./img/check.png" alt="check-na-tarefa" onclick="finishTask(${position})">
          <p>${item.task}</p>
          <img src="./img/trash.png" alt="lixo-excluir-tarefa" onclick="deleteTask(${position})">
        </li>`

    })

    completeList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myList))
}
function finishTask(position){
    myList[position].concluded = !myList[position].concluded
    showTasks()

}

function deleteTask(position) {
    myList.splice(position, 1)
    showTasks()

}

function reloadTasks(){
    const tasksLocalStorage = localStorage.getItem('list')
    if (tasksLocalStorage) {
        myList = JSON.parse(tasksLocalStorage)
    }
    showTasks()
}

reloadTasks()

button.addEventListener('click',addNewTask)