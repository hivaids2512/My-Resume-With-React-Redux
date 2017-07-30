import React from "react";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

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
          title= {this.props.name}
          subtitle= {this.props.createdBy}
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.description}
        </CardText>
      </Card>
    );
  }
}
