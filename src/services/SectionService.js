import axios from "axios";
import BaseService from "./BaseService";

class SectionService {
  createSection(resumeId, section) {
    return BaseService.post("/api/resumes/" + resumeId + "/sections", section);
  }

  getSectionList(resumeId) {
    return BaseService.get("/resumes/" + resumeId + "/sections", {});
  }
}

export default new SectionService();
