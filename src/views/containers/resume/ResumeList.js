import React from "react";
import ResumeItem from "./ResumeItem";
import { connect } from "react-redux";
import {
  addResume,
  getResumeList
} from "../../../state/actions/resume/ResumeAction";
import CircularProgress from "material-ui/CircularProgress";
import AddResume from "./AddResume";

class ResumeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    this.props.getResumeList();
  }

  render() {
    return (
      <div>
        <AddResume />
        {this.props.rows  && this.props.rows.length > 0
          ? this.props.rows.map((row, index) => {
              return (
                <div className="row margin-top-bottom-15" key={index}>
                  {row.map(resume => {
                    return (
                      <div className="col-md-3" key={resume.name}>
                        <ResumeItem key={resume.name + index} resume={resume} />
                      </div>
                    );
                  })}
                </div>
              );
            })
          : <div className="center">
              <h3>You have no Reume :)</h3>
            </div>}
      </div>
    );
  }
}

function parseToRows(resumes) {
  if (resumes) {
    let size = 4
    return new Array(Math.ceil(resumes.length / size)).fill("")
    .map(function() { return this.splice(0, size) }, resumes.slice());
  }
  return [];
}

function mapStateToProps(state) {
  return {
    rows: parseToRows(state.resumeData.resumes),
    resume: state.resumeData.resume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addResume: resume => dispatch(addResume(resume)),
    getResumeList: () => dispatch(getResumeList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);
