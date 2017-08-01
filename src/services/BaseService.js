import axios from "axios";

axios.defaults.baseURL = "https://597f701cb507e60011e19292.mockapi.io";
// axios.defaults.headers.common["Access-Token"] =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDE2NzY0MjYsImlzcyI6InRlc3QifQ.75Qr-YrTHPji8WIAGsoDkEDpAIGRgId55NApE8Y_qhE";

class BaseService {
  get(url, params) {
    return axios.get(url, {
      params: params
    });
  }

  post = (url, data) => {
    return axios.post(url, data);
  };

  put = (url, data) => {
    return axios.put(url, data);
  };
}

export default new BaseService();
