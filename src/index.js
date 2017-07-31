import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./state/store/StoreConfig";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Route, Router, IndexRedirect } from "react-router";

//Inject Tap event plugin for material ui
injectTapEventPlugin();

const target = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider>
        <Route>
          <Route path="/" component={App} />
        </Route>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  target
);
registerServiceWorker();
