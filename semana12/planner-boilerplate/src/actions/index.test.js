import { getTasks } from './index';

describe('Testa actions do index', () => {
    test('Testa GET_ALL_TASKS', () => {
        const textoTeste = '1'

        const action = getTasks(textoTeste)

        const expectedAction = {
            type: 'GET_ALL_TASKS',
            payload: {
                tasks: textoTeste
            }
        }
        expect(action).toEqual(expectedAction)
    })
}) 