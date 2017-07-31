import React from "react";
import App from "../App";
import AppWorkSpace from "../views/components/app-workspace";
import { Route, Router, IndexRedirect } from "react-router";

const routes = (
  <App>
    <Route path="/workspace" component={AppWorkSpace} />
  </App>
);

export default routes
