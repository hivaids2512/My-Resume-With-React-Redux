import React from "react";
import IconButton from "material-ui/IconButton";
import { publicResume } from "../../../state/actions/resume/ResumeAction";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from 'material-ui/FlatButton';

class PublicResume extends React.Component {
  constructor(props) {
    super(props);
    this.handlePublic = this.handlePublic.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handlePublic = () => {
    this.props.publicResume(this.props.resume);
    this.handleOpen()
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <span>
        <IconButton
          onTouchTap={this.handlePublic}
          tooltip="Public"
          tooltipPosition="bottom-center"
        >
          <i className="material-icons font-size-18">bubble_chart</i>
        </IconButton>
        <Dialog
          title="Public resume"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          This is your public resume: <a href= { '../public/' + this.props.resume._id }>here</a>
        </Dialog>
      </span>
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
