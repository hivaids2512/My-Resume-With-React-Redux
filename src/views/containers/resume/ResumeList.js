import React from "react";
import ResumeItem from "./ResumeItem";
import { connect } from "react-redux";
import {
  addResume,
  getResumeList
} from "../../../state/actions/resume/ResumeAction";
import RaisedButton from "material-ui/RaisedButton";

class ResumeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeList: [1, 2, 3, 4]
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
    return (
      <div>
        <div className="row">
          {this.props.appData.resumes?
            this.props.appData.resumes.map((resume, index) =>
            <div className="col-md-3">
              <ResumeItem
                key={index}
                name="CodeLynx"
                createdBy="Quy Vu"
                description="Simple enough"
              />
            </div>
          ) :""
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appData: state.appData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addResume: resume => dispatch(addResume(resume)),
    getResumeList: () => dispatch(getResumeList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);
