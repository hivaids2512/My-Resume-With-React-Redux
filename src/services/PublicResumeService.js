import BaseService from "./BaseService";

class PublicResumeService {
  
  getPublicResume(resumeId) {
    return BaseService.get("/resumes/public/" + resumeId, BaseService.getConfigurationHeader());
  }
}

export default new PublicResumeService();
