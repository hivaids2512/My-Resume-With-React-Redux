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

  removeSection(resumeId, section) {
    return BaseService.delete("/resumes/" + resumeId + "/sections/" + section.id, config);
  }

  editSection(resumeId, section) {
    return BaseService.put("/resumes/" + resumeId + "/sections/" + section.id, section, config)
  }

}

export default new SectionService();
