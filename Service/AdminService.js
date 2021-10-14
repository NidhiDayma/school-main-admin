import axios from 'axios';

class AdminService
{
    baseUrl= 'http://localhost:8082';

    loginAdmin(admin) {
        return axios.post(this.baseUrl + '/loginAdmin', admin);
    }

    addAdmin(admin) {
        return axios.post(this.baseUrl + '/addAdmin', admin);
    }

    addCourse(course) {
        return axios.post(this.baseUrl + '/addCourse', course);
    }

    addNotice(notice) {
        return axios.post(this.baseUrl + '/addNotice', notice);
    }

    addStudent(student) {
        return axios.post(this.baseUrl + '/addStudent', student);
    }

    addTeacher(teacher) {
        return axios.post(this.baseUrl + '/addTeacher', teacher);
    }

    deleteComplaintById(complaintId){
        return axios.delete(this.baseUrl+`/deleteComplaint/${complaintId}`);
    }

    deleteNoticeById(noticeId){
        return axios.delete(this.baseUrl+`/deleteNotice/${noticeId}`);
    }

    deleteStudenttById(studentId){
        return axios.delete(this.baseUrl+`/deleteStudent/${studentId}`);
    }

    deleteStudyMaterialById(studyId){
        return axios.delete(this.baseUrl+`/deleteStudyMaterial/${studyId}`);
    }

    deleteTeacherById(teacherId){
        return axios.delete(this.baseUrl+`/deleteTeacher/${teacherId}`);
    }

    getAllAdmin() {
        return axios.get(this.baseUrl+`/getAllAdmin`);
    }

    getAllComplaint() {
        return axios.get(this.baseUrl+`/getAllComplaint`);
    }

    getAllCourse() {
        return axios.get(this.baseUrl+`/getAllCourse`);
    }

    getAllNotice() {
        return axios.get(this.baseUrl+`/getAllNotice`);
    }

    getAllStudent() {
        return axios.get(this.baseUrl+`/getAllStudent`);
    }

    getAllStudyMaterial() {
        return axios.get(this.baseUrl+`/getAllStudyMaterial`);
    }

    getAllTeacher() {
        return axios.get(this.baseUrl+`/getAllTeacher`);
    }

    getAdminById(adminId) {
        return axios.get(this.baseUrl+`/getAdmin/${adminId}`);
    }

    getComplaintById(complaintId) {
        return axios.get(this.baseUrl+`/getComplaintById/${complaintId}`);
    }

    getNoticeById(noticeId) {
        return axios.get(this.baseUrl+`/getNoticeById/${noticeId}`);
    }

    getStudentById(studentId) {
        return axios.get(this.baseUrl+`/getStudentById/${studentId}`);
    }

    getStudyMaterialById(studyId) {
        return axios.get(this.baseUrl+`/getStudyMaterialById/${studyId}`);
    }

    getTeacherById(teacherId) {
        return axios.get(this.baseUrl+`/getTeacherById/${teacherId}`);
    }

    updateNotice(noticeId, name, notice, date){
        return axios.put(this.baseUrl +`/updateNotice/${noticeId}/${name}/${notice}/${date}`);
    }

    updateStudent(studentId, studentName, studentPassword){
        return axios.put(this.baseUrl +`/updateStudent/${studentId}/${studentName}/${studentPassword}`);
    }

    updateTeacher(teacherId, teacherName, teacherPassword){
        return axios.put(this.baseUrl +`/updateTeacher/${teacherId}/${teacherName}/${teacherPassword}`);
    }
}

export default AdminService;