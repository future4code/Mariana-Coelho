import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from '../../actions/login'

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper>
        <Button variant="outlined" onClick={this.props.vaiParaFormularioInscricao}>Inscreva-se em uma de nossas viagens!</Button> 
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.handleLoginButton}>Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email,password)),
  vaiParaListarViagens: () => dispatch(push("/trips/list")),
  vaiParaFormularioInscricao: () => dispatch(push("/form-inscricao"))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);


