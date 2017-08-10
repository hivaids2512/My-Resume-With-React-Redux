import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import 'mdi/css/materialdesignicons.min.css';
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store, { history } from "./state/store/StoreConfig";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router } from "react-router";
import routes from "./routes";

//Inject Tap event plugin for material ui
injectTapEventPlugin();

const target = document.querySelector("#root");

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  </MuiThemeProvider>,
  target
);
registerServiceWorker();
