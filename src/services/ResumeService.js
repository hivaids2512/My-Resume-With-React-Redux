import axios from "axios";
import BaseService from "./BaseService";

class ResumeService {
    
    createResume(resume) {
        return BaseService.post('/api/resumes/new', resume)
    }

    getResumeList() {
        return BaseService.get('/api/resumes/list', {})
    }

}

export default new ResumeService()
