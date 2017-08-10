import React from "react";
import App from "../App";
import AppWorkSpace from "../views/components/app-workspace";
import SignIn from "../views/containers/sign-in";
import SignUp from "../views/containers/sign-up";
import ResumeList from "../views/containers/resume";
import SectionList from "../views/containers/section";
import { Route, IndexRedirect } from "react-router";

const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRedirect to="/workspace/resumes"/>    
      <Route path="workspace" component={AppWorkSpace}>
        <IndexRedirect to="/workspace/resumes"/>    
        <Route path="resumes" component={ResumeList} />
        <Route path="resumes/:resumeId/sections" component={SectionList} />
      </Route>
    </Route>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Route>
);

export default routes;
