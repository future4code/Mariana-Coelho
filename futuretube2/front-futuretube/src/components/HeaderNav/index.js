import React, { Component } from 'react';
import styled from 'styled-components';
import smalllogo from '../../img/futuretube-logo-small.png';

const StyledDiv = styled.div `

`


export function HeaderNav(props) {

    return (
        <StyledDiv>          
          <img src={smalllogo}></img>   
        </StyledDiv>
    )
}

export default HeaderNav;