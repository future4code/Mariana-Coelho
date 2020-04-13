import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../img/futuretube-logo.png';
import TextField from '@material-ui/core/TextField';
import { MainContainer } from '../LoginPage/index.js';
import { LoginContainer } from '../LoginPage/index.js';
import { ButtonDiv } from '../LoginPage/index.js';

function SignUpPage(props) {
    return (
        <MainContainer>
            <LoginContainer>
                <img src={logo}></img>
                    <ButtonDiv>
                    <TextField id="standard-basic" label="aaaaaaa" />
                    <TextField id="standard-basic" label="aaaa" />
                    </ButtonDiv>
            </LoginContainer>
        </MainContainer>
    )      
}

export default SignUpPage;