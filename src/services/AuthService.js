import axios from "axios";
import BaseService from "./BaseService";

let config = {
 // headers: { Authorization: "Au" }
};

class ResumeService {
  authenticate(user) {
      return BaseService.post("/signin", user, config);
  }
  
  register(user) {
      return BaseService.post("/signup", user, config);
  }
}

export default new ResumeService();
