import React from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { addResume } from "../../../state/actions/resume/ResumeAction";

class AddResume extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    if (this.refs.name.getValue() && this.refs.description.getValue()) {
      this.props.addResume({
        name: this.refs.name.getValue(),
        description: this.refs.description.getValue()
      });
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
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />
    ];
    return (
      <div>
        <RaisedButton
          label="New Resume"
          primary={true}
          onTouchTap={this.handleOpen}
          fullWidth={true}
        />
        <Dialog
          title="Add new Resume"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            ref="name"
            onChange={this.handleChange}
            hintText="Resume name"
            fullWidth={true}
          />
          <br />
          <TextField
            ref="description"
            onChange={this.handleChange}
            hintText="Description"
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
    addResume: resume => dispatch(addResume(resume))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddResume);
