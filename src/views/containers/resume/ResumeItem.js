import React from "react";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class ResumeItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        expanded={true}
      >
        <CardTitle
          title= {this.props.resume.name}
          subtitle= {this.props.resume.createdBy}
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.resume.description}
          <IconButton tooltip="Font Icon">
      <FontIcon className="muidocs-icon-action-home" />
    </IconButton>
        </CardText>
      </Card>
    );
  }
}
