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

  editResume(resume) {
    return BaseService.put("/resumes/" + resume.id, resume, config)
  }
}

export default new ResumeService();
