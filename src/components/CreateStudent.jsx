import React, {useState, useRef} from 'react';
import StudentService from '../services/StudentService';

export default function CreateStudent(props){

    const [fullName, setFullName] = useState();

    let fNameRef = useRef();
    let lNameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();


    const handleClick = (event) =>{
        console.log("Submit btn clicked!");
        event.preventDefault();

        let newFullName = fNameRef.current.value + " *** " +  lNameRef.current.value;
        console.log(newFullName);

        setFullName(newFullName);

        //Create an object for passing into axio's method.
        //Properties of the object contain the value and not reference.
        let student = {firstname: fNameRef.current.value, 
                       lastname: lNameRef.current.value,
                       email: emailRef.current.value, 
                       password: passwordRef.current.value};

       console.log('student' + JSON.stringify(student));
       StudentService.createStudent(student);
    }


    return(
        <div>
           <h1>Create Students</h1>

            <form>
                <label htmlFor="fNameRef">First Name: </label>
                <input type="text" id= "fNameRef" ref={fNameRef}/>
                <br/>

                <label>Last Name: </label>
                <input type="text" ref={lNameRef}/>
                <br/>

                <label>Email: </label>
                <input type="text" ref={emailRef}/>
                <br/>

                <label>Password: </label>
                <input type="text" ref={passwordRef}/>
                <br/>

                <button onClick={handleClick}>Submit</button>
            </form>

            <div>
                You entered {fullName}
            </div>
        </div>
    );




}