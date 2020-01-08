//Actions:

//1 Nova Tarefa
function addTask(task) {
	return {
		type: 'ADD_TASK',
		payload: {
			newTask: newTask
	  }
  }
}


//2 Marcar tarefa como completa
function completeTask() {
  return {
    type: 'COMPLETE_TASK',
  }

}

//3 Marcar todas como completas
function completeAll() {
  return {
    type: 'COMPLETE_ALL',
  }
}


//4 Deletar uma tarefa pelo botão x
function deleteTask() {
  return {
    type: 'DELETE_TASK',
  }
}


//5 Deletar todas as tarefas da lista
function deleteCompleted() {
  return {
    type: 'DELETE_COMPLETED',
  }
}


//6 Filtrar mostrando todas
function filterAll() {
  return {
    type: 'FILTER_ALL',
    payload: {
    }
  }
}


//7 Filtrar mostrando as tarefas pendentes
function filterPending() {
  return {
    type: 'FILTER_PENDING',
    payload: {
    }
  }
}


//8 Filtrar mostrando as tarefas completas
function filterCompleted() {
  return {
    type: 'FILTER_COMPLETED',
    payload: {
    }
  }
}
