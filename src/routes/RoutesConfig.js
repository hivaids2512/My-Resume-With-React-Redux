import React from "react";
import App from "../App";
import AppWorkSpace from "../views/components/app-workspace";
import SignIn from "../views/containers/sign-in";
import { Route, Router, IndexRedirect } from "react-router";
import RaisedButton from "material-ui/RaisedButton";
const routes = (
  <Route>
    <Route path="/" component={App}>
      <Route path="/workspace" component={AppWorkSpace} />
    </Route>
    <Route path="/signin" component={SignIn} />
  </Route>
);

export default routes;
