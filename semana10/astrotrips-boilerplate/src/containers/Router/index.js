import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CriarViagem from "../CriarViagem";
import ListarViagens from "../ListarViagens";
import AdmInscricoes from "../AdmInscricoes";
import Inscricao from "../Inscricao";


export const routes = {
  root: "/",
  criarviagem: "trips/create",
  listarviagem: "trips/list",
  admininscricoes: "trips/adminscricao",
  inscricao: "form-inscricao"

  // Outras rotas aqui
}

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} exact />
        <Route path={routes.criarviagem} component={CriarViagem} exact/>
        <Route path={routes.listarviagens} component={ListarViagens} exact />
        <Route path={routes.admininscricoes} component={AdmInscricoes} exact />
        <Route path={routes.inscricao} component={Inscricao} exact />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
