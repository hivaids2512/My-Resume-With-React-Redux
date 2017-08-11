import React from "react";
import { Card, CardTitle, CardText, CardActions } from "material-ui/Card";
import Moment from "react-moment";
import IconButton from "material-ui/IconButton";
import { removeSection } from "../../../state/actions/section/SectionAction";
import { connect } from "react-redux";
import EditSection from "./EditSection";

class SectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = event => {
    let resumeId = this.props.resumeId;
    this.props.removeSection(resumeId, this.props.section);
  };

  render() {
    return (
      <Card expanded={true}>
        <CardTitle
          title={this.props.section.name}
          subtitle={
            <Moment fromNow>
              {this.props.section.createdAt}
            </Moment>
          }
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.section.description}
        </CardText>
        <CardActions>
          <div className="inline">
            <EditSection
              section={this.props.section}
              resumeId={this.props.resumeId}
            />
            <IconButton
              onTouchTap={this.handleDelete}
              tooltip="delete"
              tooltipPosition="bottom-center"
            >
              <i className="material-icons font-size-18">delete</i>
            </IconButton>
          </div>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    deletedSection: state.sectionData.deletedSection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeSection: (resumeId, section) =>
      dispatch(removeSection(resumeId, section))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionItem);
