import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import RootPage from "../RootPage";
import LoginPage from "../LoginPage";
import SignUpPage from '../SignUpPage/index.js';
import HomePage from '../HomePage/index.js'

export const routes = {
    root: '/',  
    login: '/login', 
    signUp: '/signup',
    upload: '/video/upload',
    home: '/home' ,
    deleteVideo: '/video/delete',  
    videoDetails: '/video/details',
  };

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={RootPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.signup} component={SignUpPage} />
        {/* <Route exact path={routes.upload} component={UploadVideoPage} />
        <Route exact path={routes.deleteVideo} component={DeleteVideoPage} />
        <Route exact path={routes.videoDetails} component={VideoDetailsPage} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;