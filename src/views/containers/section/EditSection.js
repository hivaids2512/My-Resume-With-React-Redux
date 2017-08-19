import React from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { editSection } from "../../../state/actions/section/SectionAction";
import IconButton from "material-ui/IconButton";

class EditSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { open: false, section: this.props.section };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = property => event => {
    let editedSection = this.state.section;
    editedSection[property] = event.target.value;
    this.setState({ section: editedSection });
  };

  handleSubmit = () => {
    if (this.refs.title.getValue() && this.refs.content.getValue()) {
      this.props.editSection(this.props.resumeId, this.state.section);
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
          tooltip="view"
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
            ref="title"
            id="title"
            onChange={this.handleChange("title")}
            value={this.state.section.title}
            fullWidth={true}
          />
          <br />
          <TextField
            ref="description"
            id="description"
            onChange={this.handleChange("description")}
            value={this.state.section.description}
            fullWidth={true}
          />
          <TextField
            ref="content"
            id="content"
            onChange={this.handleChange("content")}
            value={this.state.section.content}
            fullWidth={true}
          />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editedSection: state.sectionData.editedSection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editSection: (resumeId, section) => dispatch(editSection(resumeId, section))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSection);
