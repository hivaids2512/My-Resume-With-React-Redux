import BaseService from "./BaseService";

let config = {
 // headers: { Authorization: "Au" }
};

class PublicResumeService {
  
  getPublicResume(resumeId) {
    return BaseService.get("/public/" + resumeId, config);
  }
}

export default new PublicResumeService();
