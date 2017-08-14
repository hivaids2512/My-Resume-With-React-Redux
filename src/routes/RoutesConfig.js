import React from "react";
import App from "../App";
import AppWorkSpace from "../views/components/app-workspace";
import SignIn from "../views/containers/sign-in";
import SignUp from "../views/containers/sign-up";
import ResumeList from "../views/containers/resume";
import SectionList from "../views/containers/section";
import PublicResume from "../views/containers/public-resume";
import { Route, IndexRedirect } from "react-router";

const requireAuth = (nextState, replaceState) => {
  if (!localStorage.getItem("access-token")) {
    return replaceState("/signin");
  }
};

const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRedirect to="/workspace/resumes" />
      <Route path="workspace" component={AppWorkSpace} onEnter={requireAuth}>
        <IndexRedirect to="/workspace/resumes" />
        <Route path="resumes" component={ResumeList} />
        <Route path="resumes/:resumeId/sections" component={SectionList} />
      </Route>
    </Route>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/public/:resumeId" component={PublicResume} />
  </Route>
);

export default routes;
