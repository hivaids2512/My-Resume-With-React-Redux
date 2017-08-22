import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { authenticate } from "../../../state/actions/sign-in/SignInAction";
import { browserHistory } from "react-router";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate() {
    if (this.refs.email.getValue() && this.refs.password.getValue()) {
      this.props.authenticate({
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user) {
      browserHistory.push("/workspace/resumes/")
    } else {
      alert("nit auth");
    }
  }

  render() {
    return (
      <div
        id="loginModal"
        className="modal show "
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <TextField ref="email" hintText="Email" />
              </div>
              <div className="form-group">
                <TextField ref="password" hintText="Password" type="password" />
              </div>
            </div>
            <div className="modal-footer">
              <div className="col-md-6">
                <a href="signup" style={{float: 'left'}}>Register</a>
              </div>
              <div className="col-md-6">
                <RaisedButton
                  onTouchTap={this.authenticate}
                  label="Sign in"
                  primary={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
