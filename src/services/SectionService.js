import BaseService from "./BaseService";

let config = {
 // headers: { Authorization: "Au" }
};

class SectionService {
  createSection(resumeId, section) {
    return BaseService.post(
      "/api/resumes/" + resumeId + "/sections",
      section,
      config
    );
  }

  getSectionList(resumeId) {
    return BaseService.get("/resumes/" + resumeId + "/sections", config);
  }
}

export default new SectionService();
