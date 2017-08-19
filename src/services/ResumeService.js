import BaseService from "./BaseService";

let config = {
  headers: { Authorization: localStorage.getItem("access-token") }
};

class ResumeService {
  createResume(resume) {
    return BaseService.post("/resumes", resume, config);
  }

  getResumeList() {
    return BaseService.get("/resumes", config);
  }

  removeResume(resume) {
    return BaseService.delete("/resumes/" + resume._id, config);
  }

  editResume(resume) {
    return BaseService.put("/resumes/" + resume._id, resume, config)
  }

  publicResume(resume) {
    return BaseService.put("/resumes/public/" + resume._id, resume, config)
  }
}

export default new ResumeService();
