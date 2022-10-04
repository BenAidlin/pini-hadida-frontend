import { useState } from "react";

const AddStudent = ({onAdd}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [rank, setRank] = useState('white');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name) alert("please enter name");
        else if(isNaN(age)) alert("make sure age is numeric")
        else if(!["white", "blue","purple", "brown","black"].includes(rank)) alert("invalid rank");
        else{
            onAdd(name, parseInt(age), rank);
            setName('');
            setAge('');
            setRank('');
        }        
    }
    return (
        <form>
            <div>
                <label>Student name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder="Student name"></input>
            </div>
            <div>
                <label>Age</label>
                <input onChange={(e) => setAge(e.target.value)} value={age} type='text' placeholder="Student age"></input>
            </div>
            <div>
                <label>Rank</label>
                <input onChange={(e) => setRank(e.target.value)} value={rank} type='dropdown' placeholder="Student rank"></input>
            </div>
            <input onClick={(e)=>onSubmit(e)} type='submit' value='save student' className="btn btn-block"></input>
        </form>
    );
}

export default AddStudent;