import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import logo from '../../img/futuretube-logo.png';
import { connect } from 'react-redux';
import { routes } from '../Router/index.js';
import { push } from 'connected-react-router';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-around;
`

const ButtonDiv = styled.div`
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: space-between;

`

function RootPage(props) {
    return (
        <MainContainer>
            <LoginContainer>
                <img width='300px' src={logo}></img>
                    <ButtonDiv>
                        <Button variant="contained" color="primary" onClick={props.goToLogin}>Login</Button>
                        <Button variant="contained" color="primary">Cadastro</Button>
                    </ButtonDiv>
            </LoginContainer>
        </MainContainer>
    )
        
}

const mapStateToProps = state => ({
    // activeOrder: state.orders.active
})

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RootPage);