import axios from 'axios';

export const login = (email, password) => async (dispatch) => {

        const loginInformation = {
        email: email,
        password: password
    }

    try { //caso o usuário erre o login
        const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/mariana/login", loginInformation)

        window.localStorage.setItem("token", response.data.token) //pra guardar o item no local storage
    } catch (error) {
        console.log(error)
        window.alert("Erro no login")
    }
}
