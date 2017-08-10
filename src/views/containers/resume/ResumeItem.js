import React from "react";
import {
  Card,
  CardActions,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { browserHistory } from "react-router";
import {
  removeResume,
  getResumeList
} from "../../../state/actions/resume/ResumeAction";
import { connect } from "react-redux";
import Moment from 'react-moment';

class ResumeItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
  }

  handleView = () => {
    browserHistory.push(
      "/workspace/resumes/" + this.props.resume.id + "/sections"
    );
  };

  handleDelete = () => {
    this.props.removeResume(this.props.resume);
  };

  render() {
    return (
      <Card expanded={true}>
        <CardTitle
          title={this.props.resume.name}
          subtitle={<Moment fromNow>{this.props.resume.createdAt}</Moment>}
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.resume.description}
        </CardText>
        <CardActions>
          <FlatButton
            label="View"
            onTouchTap={this.handleView}
            primary={true}
          />
          <FlatButton
            label="Delete"
            onTouchTap={this.handleDelete}
            secondary={true}
          />
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
