import { REGISTER } from "./ActionTypes";
import AuthService from "../../../services/AuthService";

const registerAction = (user) => {
  return {
    type: REGISTER,
    user
  };
};

export function register(user) {
  return dispatch => {
    AuthService.register(user)
      .then(res => {
        dispatch(registerAction(user));
      })
      .catch(err => {
        dispatch(registerAction(user));
      });
  };
}
