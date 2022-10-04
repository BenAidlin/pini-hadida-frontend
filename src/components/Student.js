const Student = ({rank, name, age, onDelete, addAge}) => {
    return (
        <div style={{backgroundColor: rank, cursor: "pointer"}}>
            <h3>{name}</h3>
            <h4 onClick={ () => addAge(name) }>Age: {age}</h4>        
            <button onClick={ ()=>{onDelete(name) }} style={{cursor:"pointer"}}>remove</button>        
        </div>
    );    
}

Student.defaultProps = {
    name: "No name",
    age: 0,
    rank: "white"
}
export default Student;