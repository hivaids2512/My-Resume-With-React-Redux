import axios from "axios";
import BaseService from "./BaseService";

class ResumeService {
  createResume(resume) {
    return BaseService.post("/api/resumes", resume);
  }

  getResumeList() {
    return BaseService.get("/resumes", {});
  }

  removeResume(resume) {
    return BaseService.delete("/resumes/" + resume.id, {});
  }
}

export default new ResumeService();
