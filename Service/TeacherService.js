import axios from 'axios';

class TeacherService
{
    baseUrl= 'http://localhost:8082/teacher';

    loginTeacher(teacher) {
        return axios.post(this.baseUrl + '/loginTeacher', teacher);
    }


    getAllNotice() {
        return axios.get(this.baseUrl+`/getAllNotice`);
    }

    getNoticeById(noticeId) {
        return axios.get(this.baseUrl+`getNoticeById/${noticeId}`);
    }

    getAllCourse(){
        return axios.get(this.baseUrl+`/getAllCourse`);
    }

    getCourseById(courseId) {
        return axios.get(this.baseUrl+`/getCourseById/${courseId}`);
    }

    updateCourse(){
        return axios.get(this.baseUrl+`/updateCourse`);
    }

    deleteCourse(courseId){
        return axios.get(this.baseUrl+`/deleteCourse/${courseId}`);
    }

    addStudyMaterial(StudyMaterial) {
        return axios.post(this.baseUrl + `/addStudyMaterial`,StudyMaterial);
    }

    getAllStudyMaterial() {
        return axios.get(this.baseUrl+`/getAllStudyMaterial`);
    }

    
    getStudyMaterialById(studyId) {
        return axios.get(this.baseUrl+`/getStudyMaterialById/${studyId}`);
    }


    updateStudyMaterial(){
        return axios.get(this.baseUrl+`/updateStudyMaterial`);
    }


    deleteStudyMaterial(studyId){
        return axios.get(this.baseUrl+`/deleteStudyMaterial/${studyId}`);
    }

    addHomeWork(Homework) {
        return axios.post(this.baseUrl + `/addHomework`,Homework);
    }

    getHomeWork(){
        return axios.get(this.baseUrl+`/getHomework`);
    }

    getHomeWorkById(homeId) {
        return axios.get(this.baseUrl+`/getHomeworkById/${homeId}`);
    }

    updateHomeWork(){
        return axios.get(this.baseUrl+`/updateHomework`);
    }

    deleteHomeWork(homeId){
        return axios.get(this.baseUrl+`/deleteHomework/${homeId}`);
    }
   
}

export default TeacherService;