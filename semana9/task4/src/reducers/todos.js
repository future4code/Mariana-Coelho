//Reducer responsavel por operações com tarefas 

const initialState = {
    allTasks: [],
}

/*
text: 'Tarefa'
completed: false,
id: 0
 */

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
             return {...state, allTasks:[...state.allTasks, {
                newTask: action.payload.newTask,
                completed: false,
                id : new Date().getTime()
                }]}
        default:
            return state 
    }
}

export default tasks;