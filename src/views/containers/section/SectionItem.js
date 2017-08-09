import React from "react";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Moment from 'react-moment';

export default class SectionItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        expanded={true}
      >
        <CardTitle
          title= {this.props.section.name}
          subtitle= {<Moment fromNow>{this.props.section.createdAt}</Moment>}
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.section.description}
        </CardText>
      </Card>
    );
  }
}
