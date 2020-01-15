import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import store from './App';

function App() {
 return (
   
    
    <div>
      <h1>4Task</h1>
      <Input placeholder="O que deve ser feito?"/>
      <footer>
        <Button variant="outlined" color="primary">Marcar todas como completas</Button>
         <Button variant="outlined" color="primary" /*onClick={}*/>Todas</Button>
         <Button variant="outlined" color="primary">Pendentes</Button>
         <Button variant="outlined" color="primary">Completas</Button>
      </footer>
    </div>
  )
}

export default App;