import React from "react";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

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
          subtitle= {this.props.section.createdAt}
          expandable={true}
        />
        <CardText expandable={true}>
          {this.props.section.description}
        </CardText>
      </Card>
    );
  }
}
