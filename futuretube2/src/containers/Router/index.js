import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";


export const routes = {
    root: '/',  
    signUp: '/signup/',
    upload: '/video/upload/',
    home: '/home/' ,
    deleteVideo: '/video/delete/',  
    videoDetails: '/video/details/',
  };

function Router(props) {
  return (
    <ConnectedRouter>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
            {/* <Route exact path={routes.signUp} component={SignUpPage} />
            <Route exact path={routes.upload} component={UploadVideoPage} />
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.deleteVideo} component={DeleteVideoPage} />
            <Route exact path={routes.videoDetails} component={VideoDetailsPage} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;