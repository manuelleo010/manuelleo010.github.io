const task = document.getElementById('input-task')
const addBtn = document.getElementById('add')
const taskLists = document.querySelector('.list-items')


addBtn.addEventListener('click',(e) => {
  e.preventDefault
  //creating a child div
  if( task.value === ''){

    alert('empty field') 

  }else{

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    const taskAdded = document.createElement('div')
  taskAdded.classList.add('lists')
  taskAdded.innerHTML = task.value
  taskContainer.appendChild(taskAdded)

  //creating checked button
  const checked = document.createElement('button')
  checked.classList.add('checked')
  checked.innerHTML = '&#10003'
  taskContainer.appendChild(checked)
  

  //creating delete task button
  const del = document.createElement('button')
  del.classList.add('del')
  del.innerHTML = '&#x267D'
  taskContainer.appendChild(del)

  
  taskLists.appendChild(taskContainer)
  task.value = ''

  //adding functionality to the checked button

  checked.addEventListener('click',()=>{
    taskAdded.style.textDecoration = ' line-through'
    checked.style.display = 'none'
  })
  del.addEventListener('click', ()=>{
    taskAdded.parentElement.style.display = 'none'
  })
}





})

  