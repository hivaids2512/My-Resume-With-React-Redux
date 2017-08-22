import BaseService from "./BaseService";

class SectionService {
  createSection(resumeId, section) {
    return BaseService.post(
      "/resumes/" + resumeId + "/sections",
      section,
      BaseService.getConfigurationHeader()
    );
  }

  getSectionList(resumeId) {
    return BaseService.get("/resumes/" + resumeId + "/sections", BaseService.getConfigurationHeader());
  }

  removeSection(resumeId, section) {
    return BaseService.delete("/resumes/" + resumeId + "/sections/" + section._id, BaseService.getConfigurationHeader());
  }

  editSection(resumeId, section) {
    return BaseService.put("/resumes/" + resumeId + "/sections/" + section._id, section, BaseService.getConfigurationHeader())
  }

}

export default new SectionService();
