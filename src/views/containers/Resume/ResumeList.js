import React from "react";
import ResumeItem from "./ResumeItem";

export default class ResumeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeList: [1, 2, 3, 4]
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.resumeList.map((resume, index) =>
            <div className="col-md-3">
              <ResumeItem
                key={index}
                name="CodeLynx"
                createdBy="Quy Vu"
                description="Simple enough"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
