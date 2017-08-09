import axios from "axios";
import BaseService from "./BaseService";

let config = {
 // headers: { Authorization: "Au" }
};

class ResumeService {
  authenticate(user) {
      return BaseService.post("/signin", user, config);
  }
}

export default new ResumeService();
