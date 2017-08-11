import React from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import {
  editResume
} from "../../../state/actions/resume/ResumeAction";
import IconButton from "material-ui/IconButton";

class EditResume extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { open: false, resume: this.props.resume };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = property => event => {
    let editedResume = this.state.resume;
    editedResume[property] = event.target.value;
    this.setState({ resume: editedResume });
  };

  handleSubmit = () => {
    if (this.refs.name.getValue() && this.refs.description.getValue()) {
      this.props.editResume(this.state.resume);
      this.setState({ open: false });
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Update"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />
    ];
    return (
      <div>
        <IconButton
          onTouchTap={this.handleOpen}
          tooltip="edit"
          tooltipPosition="bottom-center"
        >
          <i className="material-icons font-size-18">border_color</i>
        </IconButton>
        <Dialog
          title="Add new Resume"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            ref="name"
            id="name"
            onChange={this.handleChange("name")}
            value={this.state.resume.name}
            fullWidth={true}
          />
          <br />
          <TextField
            ref="description"
            id="description"
            onChange={this.handleChange("description")}
            value={this.state.resume.description}
            fullWidth={true}
          />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resumeData: state.resumeData.resume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editResume: resume => dispatch(editResume(resume))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditResume);
