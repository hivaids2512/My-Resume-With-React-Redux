import { AUTHENTICATE } from "./ActionTypes";
import AuthService from "../../../services/AuthService";

const authenticateAction = (user) => {
  return {
    type: AUTHENTICATE,
    user
  };
};

export function authenticate(user) {
  return dispatch => {
    AuthService.authenticate(user)
      .then(res => {
        dispatch(authenticateAction(res.data));
      })
      .catch(err => {
        console.log(err)
      });
  };
}
