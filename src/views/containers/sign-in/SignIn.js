import React from "react";

export default class SignIn extends React.Component {
  render() {
    return (
      <div>
        <p>Login</p>
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
}
