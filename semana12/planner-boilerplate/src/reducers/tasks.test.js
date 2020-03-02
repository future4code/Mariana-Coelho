import { getTasks } from '../actions/index'
import tasks from './tasks'

describe('Testa o tasks reducer', () => {
    test('testar a GET_ALL_TASKS', () => {
        //Preparação
    
        const currentState = {
            allTasks: []
        }

        const action = getTasks(['Tarefa teste','Tarefa 2 teste'])

        //Execução 
        const newState = tasks(currentState, action)

        //Verificação
        expect(newState.allTasks).toHaveLength(2)
    })
})