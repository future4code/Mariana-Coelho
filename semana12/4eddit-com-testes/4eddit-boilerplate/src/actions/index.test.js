import { postLogin } from './index'
import { setPosts } from './index'
import { setCreateUser } from './index'
import { setCreatePost } from './index'
import { setPostDetail } from './index'

describe('Testa actions do index', () => {
    test('Testa POST_LOGIN inteira', () => {
        // Preparação
        const idTeste = '1'

        // Execução
        const action = postLogin(idTeste)

        // Verificação
        const expectedAction = {
        type: 'POST_LOGIN', 
        payload: {
            login: idTeste
        }
    }
        expect(action).toEqual(expectedAction)
    })

    test('Testa SET_POSTS inteira', () => {
        // Preparação
        const idTeste = '1'

        // Execução
        const action = setPosts(idTeste)

        // Verificação
        const expectedAction = {
        type: 'SET_POSTS', 
        payload: {
            posts: idTeste
        }
    }
        expect(action).toEqual(expectedAction)
    })

    
    test('Testa CREATE_USER inteira', () => {
        // Preparação
        const idTeste = '1'

        // Execução
        const action = setCreateUser(idTeste)

        // Verificação
       const expectedAction = {
        type: 'CREATE_USER', 
        payload: {
            user: idTeste
        }
    }
        expect(action).toEqual(expectedAction)
    })
        
    test('Testa CREATE_POST inteira', () => {
        // Preparação
        const idTeste = '1'

        // Execução
        const action = setCreatePost(idTeste)

        // Verificação
        const expectedAction = {
        type: 'CREATE_POST', 
        payload: {
            createpost: idTeste
        }
    }
        expect(action).toEqual(expectedAction)
    })

       test('Testa SET_POST_DETAIL inteira', () => {
        // Preparação
        const idTeste = '1'

        // Execução
        const action = setPostDetail(idTeste)

        // Verificação
        const expectedAction = {
        type: 'SET_POST_DETAIL', 
        payload: {
            detail: idTeste
        }
    }
        expect(action).toEqual(expectedAction)
    })
})