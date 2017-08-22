import BaseService from "./BaseService";

class ResumeService {
  createResume(resume) {
    return BaseService.post("/resumes", resume, BaseService.getConfigurationHeader());
  }

  getResumeList() {
    return BaseService.get("/resumes", BaseService.getConfigurationHeader());
  }

  removeResume(resume) {
    return BaseService.delete("/resumes/" + resume._id, BaseService.getConfigurationHeader());
  }

  editResume(resume) {
    return BaseService.put("/resumes/" + resume._id, resume, BaseService.getConfigurationHeader())
  }

  publicResume(resume) {
    return BaseService.put("/resumes/public/" + resume._id, resume, BaseService.getConfigurationHeader())
  }
}

export default new ResumeService();
