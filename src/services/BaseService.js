import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";
// axios.defaults.headers.common["Access-Token"] =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDE2NzY0MjYsImlzcyI6InRlc3QifQ.75Qr-YrTHPji8WIAGsoDkEDpAIGRgId55NApE8Y_qhE";

class BaseService {
  get(url, config) {
    return axios.get(url, config);
  }

  post = (url, data, config) => {
    return axios.post(url, data, config);
  };

  put = (url, data, config) => {
    return axios.put(url, data, config);
  };

  delete = (url, config) => {
    return axios.delete(url, config);
  };

  getConfigurationHeader = () => {
    return {
      headers: { Authorization: localStorage.getItem("access-token") }
    };
  };
}

export default new BaseService();
