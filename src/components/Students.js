import Student from "./Student";

const Students = (props) => {                
    return (        
        <div>
            {props.student_list.map((s)=>                
                <Student key={s.name} name={s.name} age={s.age} rank={s.rank} onDelete={props.onDelete} 
                    addAge={props.addAge}/>
            )}            
        </div>
    );
}

export default Students;