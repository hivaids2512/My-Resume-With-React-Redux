import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';

export default class SignIn extends React.Component {
  render() {
    return (
      <div
        id="loginModal"
        className="modal show "
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <TextField hintText="Email" />
              </div>
              <div className="form-group">
                <TextField hintText="Password" type="password" />
              </div>
            </div>
            <div className="modal-footer">
              <div className="col-md-12">
                <RaisedButton label="Sign in" primary={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
