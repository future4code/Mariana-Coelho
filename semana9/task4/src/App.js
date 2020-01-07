import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import './App.css';

//Actions:

//Nova Tarefa
function insertNewTask(task) {
	return {
		type: 'INSERT_NEWTASK',
		payload: {
			task: task
	  }
  }
}


//Marcar tarefa como completa
function markAsComplete() {
  return {
    type: 'MARK_ASCOMPLETE',
    payload: {
    }
  }

}

//Marcar todas como completas
function markAllAsComplete() {
  return {
    type: 'MARK_ALLASCOMPLETE',
    payload: {
    }
  }
}


//Deletar uma tarefa pelo botão x
function deleteOneTask() {
  return {
    type: 'DELETE_ONETASK',
    payload: {
    }
  }
}


//Deletar todas as tarefas da lista
function deleteAllCompletedTasks() {
  return {
    type: 'DELETE_ALLCOMPLETEDTASKS',
    payload: {
    }
  }
}


//Filtrar mostrando todas
function filterByAll() {
  return {
    type: 'FILTER_BYALL',
    payload: {
    }
  }
}


//Filtrar mostrando as tarefas pendentes
function filterByPending() {
  return {
    type: 'FILTER_BYPENDING',
    payload: {
    }
  }
}


//Filtrar mostrando as tarefas completas
function filterByCompleted() {
  return {
    type: 'FILTER_BYCOMPLETED',
    payload: {
    }
  }
}

function App() {
 return (
    <div>
      <h1>4Task</h1>
      <div>Lista de tasks</div>
      <input placeholder="O que tem que ser feito?"></input>
      <footer>
        <button>Todas</button>
        <button>Pendentes</button>
        <button>Completas</button>
        <button>Remover completas</button>
      </footer>
    </div>
  )
}

export default App;