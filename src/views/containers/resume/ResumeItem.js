import React from "react";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import { browserHistory } from "react-router";
import {
  removeResume,
  getResumeList
} from "../../../state/actions/resume/ResumeAction";
import { connect } from "react-redux";
import Moment from "react-moment";
import IconButton from "material-ui/IconButton";
import EditResume from "./EditResume";
import PublicResume from "./PublicResume";

class ResumeItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
  }

  handleView = event => {
    browserHistory.push(
      "/workspace/resumes/" + this.props.resume.id + "/sections"
    );
  };

  handleDelete = event => {
    this.props.removeResume(this.props.resume);
  };

  render() {
    return (
      <Card expanded={true}>
        <CardTitle
          title={this.props.resume.name}
          subtitle={
            <Moment fromNow>
              {this.props.resume.createdAt}
            </Moment>
          }
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.resume.description}
        </CardText>
        <CardActions>
          <div className="inline">
            <IconButton
              onTouchTap={this.handleView}
              tooltip="view"
              tooltipPosition="bottom-center"
            >
              <i className="material-icons font-size-18">touch_app</i>
            </IconButton>
            <EditResume resume={this.props.resume} />
            <IconButton
              onTouchTap={this.handleDelete}
              tooltip="delete"
              tooltipPosition="bottom-center"
            >
              <i className="material-icons font-size-18">delete</i>
            </IconButton>
            <PublicResume resume={this.props.resume} />
          </div>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    deletedResume: state.resumeData.deletedResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeResume: resume => dispatch(removeResume(resume)),
    getResumeList: () => dispatch(getResumeList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeItem);
