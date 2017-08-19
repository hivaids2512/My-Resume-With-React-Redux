import React from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { addSection } from "../../../state/actions/section/SectionAction";

class AddSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    let resumeId = this.props.resumeId;
    if (this.refs.title.getValue() && this.refs.content.getValue()) {
      this.props.addSection(resumeId, {
        title: this.refs.title.getValue(),
        description: this.refs.description.getValue(),
        content: this.refs.content.getValue(),
        resume: this.props.resumeId
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
          label="New Section"
          primary={true}
          onTouchTap={this.handleOpen}
          fullWidth={true}
        />
        <Dialog
          title="Add new Section"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            ref="title"
            onChange={this.handleChange}
            hintText="Section title"
            fullWidth={true}
          />
          <br />
          <TextField
            ref="description"
            onChange={this.handleChange}
            hintText="Description"
            fullWidth={true}
          />
          <TextField
            ref="content"
            onChange={this.handleChange}
            hintText="Content"
            fullWidth={true}
          />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    section: state.sectionData.section
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSection: (resumeId, section) => dispatch(addSection(resumeId, section))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSection);
