import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import logo from '../../img/futuretube-logo.png';

function LoginPage(props) {
    return (
        <div>
            <img src={logo}></img>
            <Button variant="contained" color="primary">Login</Button>
            <Button variant="contained" color="primary">Cadastro</Button>
        </div>
    )
        
}


export default LoginPage;