import React from "react";
import ResumeList from "../../containers/resume";

export default class AppWorkSpace extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ResumeList />
      </div>
    );
  }
}
