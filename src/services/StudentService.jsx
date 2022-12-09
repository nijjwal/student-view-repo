import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/";

class StudentService{

    getAllStudents(){
        return axios.get(STUDENT_API_BASE_URL); //testing conflict
    }
    
}

export default new StudentService()
