import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { register } from "../../../state/actions/sign-up/SignUpAction";
import { browserHistory } from "react-router";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    if (this.refs.email.getValue() && this.refs.password.getValue() && this.refs.repassword.getValue()) {
        if(this.refs.password.getValue() === this.refs.repassword.getValue()) {
            this.props.register({
                email: this.refs.email.getValue(),
                password: this.refs.password.getValue()
            });
        }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.registeredUser) {
      browserHistory.push("/signin")
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
              <h3 className="text-center">Register Account</h3>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <TextField ref="email" hintText="Email" />
              </div>
              <div className="form-group">
                <TextField ref="password" hintText="Password" type="password" />
              </div>
              <div className="form-group">
                <TextField ref="repassword" hintText="Retype Password" type="password" />
              </div>
            </div>
            <div className="modal-footer">
              <div className="col-md-6">
                <a href="signin" style={{float: 'left'}}>Signin</a>
              </div>
              <div className="col-md-6">
                <RaisedButton
                  onTouchTap={this.register}
                  label="Sign Up"
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
    console.log(state.signUpData.registeredUser)
  return {
    registeredUser: state.signUpData.registeredUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: user => dispatch(register(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
