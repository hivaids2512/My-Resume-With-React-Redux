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
        if(res.data.success) {
          localStorage.setItem("access-token", res.data.token)
          localStorage.setItem("user", JSON.stringify(res.data.data))
          dispatch(authenticateAction(res.data));
        }
      })
      .catch(err => {
        console.log(err)
      });
  };
}
