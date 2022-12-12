import React, {useState, useEffect} from "react";
import StudentService from "../services/StudentService";

export default function ListStudentComponent(props){

    const[students, setStudent] = useState([]);

    useEffect(()=>{
       
        StudentService.getAllStudents()
        .then(res=>{
            console.log(res);
            setStudent(res.data);
        })
        .catch(err=>{
            console.log(err)
        })

    },[]); 

    return(
        <div>
            <h1>List Existing Students</h1>
            <ul>
                {
                    students.map(student=> <li key={student.id}>{student.firstname}</li>)
                }
            </ul>
        </div>
    );
}