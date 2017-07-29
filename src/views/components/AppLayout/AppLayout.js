import React from "react";
import AppToolBar from "../AppToolBar/AppToolBar";
import AppWorkSpace from "../AppWorkSpace";

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
