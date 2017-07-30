import React from "react";
import ResumeItem from "./ResumeItem";
import { connect } from 'react-redux';
import { addResume } from "../../../state/actions/Resume/ResumeAction";
import RaisedButton from 'material-ui/RaisedButton';

class ResumeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeList: [1, 2, 3, 4]
    };
    this.addNewResume = this.addNewResume.bind(this)
  }

  addNewResume (event) {
    this.props.addResume({name: "quy"})
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
        <div className="row">
          <RaisedButton label="New Resume" onTouchTap={this.addNewResume} secondary={true} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.appData)
  return {
    appData: state.appData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addResume: (resume) => dispatch(addResume(resume))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);
