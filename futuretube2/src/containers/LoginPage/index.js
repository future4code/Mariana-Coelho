import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../img/futuretube-logo.png';
import TextField from '@material-ui/core/TextField';

export const MainContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-around;
    max-width: 20%;
`

export const ButtonDiv = styled.div`
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: space-between; 

`

function LoginPage(props) {
    return (
        <MainContainer>
            <LoginContainer>
                <img src={logo}></img>
                    <ButtonDiv>
                    <TextField id="standard-basic" label="Usuário" />
                    <TextField id="standard-basic" label="Senha" />
                    </ButtonDiv>
            </LoginContainer>
        </MainContainer>
    )      
}


export default LoginPage;