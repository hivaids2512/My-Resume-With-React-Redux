import React from "react";
import ResumeItem from "./ResumeItem";
import { connect } from "react-redux";
import {
  addResume,
  getResumeList
} from "../../../state/actions/resume/ResumeAction";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';

class ResumeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
    this.addNewResume = this.addNewResume.bind(this);
  }

  componentDidMount() {
    this.props.getResumeList();
  }

  addNewResume(event) {
    this.props.addResume({
      name: "quy",
      description: "asd",
      userId: "586fd5ca161b761defc05a31"
    });
  }

  render() {
    console.log(this.props.rows);
    return (
      <div>
        {this.props.rows
          ? this.props.rows.map((row, index) => {
              return (
                <div className="row margin-top-bottom-15">
                  {row.map(resume => {
                    return (
                      <div className="col-md-3">
                        <ResumeItem key={index} resume={resume} />
                      </div>
                    );
                  })}
                </div>
              );
            })
          : <div className="center"><CircularProgress /></div>}
      </div>
    );
  }
}

function parseToRows(resumes) {
  let rows = [];
  if (resumes) {
    let row = [];
    resumes.forEach((resume, index) => {
      row.push(resume);
      if (row.length === 4) {
        rows.push(row);
        row = [];
      }
    });
  }
  return rows;
}

function mapStateToProps(state) {
  return {
    rows: parseToRows(state.resumeData.resumes)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addResume: resume => dispatch(addResume(resume)),
    getResumeList: () => dispatch(getResumeList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);
