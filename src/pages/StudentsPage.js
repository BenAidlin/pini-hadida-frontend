import Students from "../components/Students";
import AddStudent from "../components/AddStudent";
import { useState } from "react";


const StudentsPage = (props) => {
    const [student_list, setStudents] = useState(
        [
            {
                name: "Ben Aidlin",
                age: 27,
                rank: "Blue"
            },
        
            {
                name: "Slava Antipenko",
                age: 36,
                rank: "Brown"
            },
        
            {
                name: "Gabriel Maman",
                age: 25,
                rank: "White"
            },
        ]    
    )
    const [showAddStudent, setShowAddStudent] = useState(false);
    // delete student
    const deleteStudent = (name)=>{
        setStudents(student_list.filter((student)=>student.name!==name));
    };
    const addAge = (name)=>{        
        let temp_student_list =  student_list.map((student) => 
            student.name !== name ? 
                student
            :
                {name: student.name, age: student.age + 1, rank: student.rank}
        )
        setStudents(temp_student_list);
    };
    const addStudent = (name, age, rank) => {        
        let new_student = {
            name: name, age: age, rank: rank
        };
        setStudents([...student_list, new_student]);
    };
    return (
        <div>
            <h1>
                Welcome to {props.coach_name}'s website
            </h1>  
            <button onClick={()=>setShowAddStudent(!showAddStudent)} style={{cursor:"pointer"}}>
                {!showAddStudent ? "Add new student" : "Hide"}
            </button> 
            { showAddStudent ? 
                <AddStudent onAdd={addStudent}></AddStudent> 
                :
                ""
            }            
            { 
                student_list.length !== 0 ?
                    <Students student_list={student_list} onDelete={deleteStudent} addAge={addAge}/>
                :
                    <h1>No students to show!</h1>
            }
        </div>        
    );
}

export default StudentsPage;