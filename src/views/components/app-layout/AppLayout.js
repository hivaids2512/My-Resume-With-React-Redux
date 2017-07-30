import React from "react";
import AppToolBar from "../app-toolbar";
import AppWorkSpace from "../app-workspace";

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <AppToolBar />
          </div>
        </div>
        <div className="container-fluid" style={{margin: "20px"}}>
          <div className="row">
            <AppWorkSpace />
          </div>
        </div>
      </div>
    );
  }
}
