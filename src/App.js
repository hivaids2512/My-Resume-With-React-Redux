import React, { Component } from "react";
import "./App.css";
import AppToolBar from "./views/components/app-toolbar";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <AppToolBar />
          </div>
        </div>
        <div className="container-fluid" style={{ margin: "20px" }}>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
