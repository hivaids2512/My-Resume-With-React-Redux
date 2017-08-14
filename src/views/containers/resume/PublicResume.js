import React from "react";
import IconButton from "material-ui/IconButton";
import { publicResume } from "../../../state/actions/resume/ResumeAction";
import { connect } from "react-redux";

class PublicResume extends React.Component {
  constructor(props) {
    super(props);
    this.handlePublic = this.handlePublic.bind(this);
  }

  handlePublic = () => {
    this.props.publicResume(this.props.resume);
  };

  render() {
    return (
      <IconButton
        onTouchTap={this.handlePublic}
        tooltip="Public"
        tooltipPosition="bottom-center"
      >
        <i className="material-icons font-size-18">bubble_chart</i>
      </IconButton>
    );
  }
}

function mapStateToProps(state) {
  return {
    publicedResume: state.resumeData.publicedResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    publicResume: resume => dispatch(publicResume(resume))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicResume);
