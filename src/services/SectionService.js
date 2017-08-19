import BaseService from "./BaseService";

let config = {
 headers: { Authorization: localStorage.getItem("access-token") }
};

class SectionService {
  createSection(resumeId, section) {
    return BaseService.post(
      "/resumes/" + resumeId + "/sections",
      section,
      config
    );
  }

  getSectionList(resumeId) {
    return BaseService.get("/resumes/" + resumeId + "/sections", config);
  }

  removeSection(resumeId, section) {
    return BaseService.delete("/resumes/" + resumeId + "/sections/" + section._id, config);
  }

  editSection(resumeId, section) {
    return BaseService.put("/resumes/" + resumeId + "/sections/" + section._id, section, config)
  }

}

export default new SectionService();
