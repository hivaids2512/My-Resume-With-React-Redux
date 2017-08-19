import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../../../state/actions/sign-in/SignInAction";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import Avatar from "material-ui/Avatar";

class AppAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: JSON.parse(localStorage.getItem("user"))};
  }

  render() {
    return (
      <List>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar>
              {this.state.user.firstName.charAt(0)}
            </Avatar>
          }
        >
          {this.state.user.firstName + " " + this.state.user.lastName}
        </ListItem>
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.signInData.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: user => dispatch(authenticate(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppAvatar);
