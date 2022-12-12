import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/";

class StudentService{

    getAllStudents(){
        return axios.get(STUDENT_API_BASE_URL); //testing conflict
    }
    
    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL+"student", student);
    }
}

export default new StudentService()
