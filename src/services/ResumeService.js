import axios from "axios";
import BaseService from "./BaseService";

let config = {
  //headers: { Authorization: "Au" }
};

class ResumeService {
  createResume(resume) {
    return BaseService.post("/resumes", resume, config);
  }

  getResumeList() {
    return BaseService.get("/resumes", config);
  }

  removeResume(resume) {
    return BaseService.delete("/resumes/" + resume.id, config);
  }
}

export default new ResumeService();
