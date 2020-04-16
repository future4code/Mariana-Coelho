import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../img/futuretube-logo.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-around;
`

export const ButtonDiv = styled.div`
    padding: 10px 0 10px 0;
    display: grid;
    grid-gap: 15px;
    align-items: center;
    flex-direction: column;

`

const LogoContainer = styled.div`
    text-align: center;
`

function LoginPage(props) {
    return (
        <MainContainer>
            <LoginContainer>
                <LogoContainer><img src={logo} width='300px'></img></LogoContainer>
                    <ButtonDiv>
                        <TextField variant='outlined' id="standard-basic" label="Usuário" />
                        <TextField variant='outlined' id="standard-basic" label="Senha" />
                        <Button variant="contained" color="primary">Entrar</Button>
                    </ButtonDiv>
            </LoginContainer>
        </MainContainer>
    )      
}


export default LoginPage;