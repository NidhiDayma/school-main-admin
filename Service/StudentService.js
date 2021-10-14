import axios from 'axios';
class StudentService {
    baseUrl = `http://localhost:8082/school-admin/student/`;

    // loginStudent(student){
    //     return axios.post(this.baseUrl + `-/login`, admin);
    // }

    getAllComplaint() {
        return axios.get(this.baseUrl + `/getAllComplaint`);
    }

    getComplaintById(complaintId) {
        return axios.get(this.baseUrl + `/getComplaintById/${complaintId}`);
    }

    addComplaint(complaint) {
        return axios.post(this.baseUrl + `/addComplaint`, complaint);
    }

    deleteComplaint(complaintId) {
        return axios.delete(this.baseUrl + `/deleteComplaint/${complaintId}`)
    }

    getAllNotice() {
        return axios.get(this.baseUrl + `/getAllNotice`);
    }

    getNoticeById(noticeId) {
        return axios.get(this.baseUrl + `/getNoticeById/${noticeId}`);
    }

    getAllCourse() {
        return axios.get(this.baseUrl + `/getAllCourse`);
    }

    getCourseById(courseId) {
        return axios.get(this.baseUrl + `/getCourseById/${courseId}`);
    }

    getAllStudyMaterial() {
        return axios.get(this.baseurl + `/getAllStudentMaterial`);
    }

    getStudyMaterialById(studyId) {
        return axios.get(this.baseUrl + `/getStudyMaterialById/${studyId}`);
    }

    getHomework() {
        return axios.get(this.baseUrl + `/getHomework`);
    }

    getHomeworkById(homeId) {
        return axios.get(this.baseUrl + `getHomeworkById/${homeId}`);
    }

    updateHomework(homeId, name){
        return axios.put(this.baseUrl +`/updateHomework/${homeId}/${name}`);
    }

    updateComplaint(complaintId, note, date){
        return axios.put(this.baseUrl +`/updateComplaint/${complaintId}/${note}/${date}`);
    }
}

export default StudentService;