import BaseService from "./BaseService";

let config = {
  headers: { Authorization: localStorage.getItem("access-token") }
};

class PublicResumeService {
  
  getPublicResume(resumeId) {
    return BaseService.get("/public/" + resumeId, BaseService.getConfigurationHeader());
  }
}

export default new PublicResumeService();
