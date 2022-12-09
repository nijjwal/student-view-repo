import React, {useState, useEffect} from "react";
import StudentService from "../services/StudentService";
import axios from "axios";


const baseURL= "http://localhost:8080/api/v1/";
//const baseURL= "http://localhost:8080/api/v1/search/2";

export default function ListStudentComponent(props){

    const[students, setStudent] = useState([]);

    useEffect(()=>{
       
        axios.get(baseURL)
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
            <ul>
                {
                    students.map(student=> <li key={student.id}>{student.firstname}</li>)
                }
            </ul>
        </div>
    );
}