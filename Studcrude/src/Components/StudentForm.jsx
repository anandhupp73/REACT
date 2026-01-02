import { useState } from "react";

export default function StudentForm({ addStudent }){
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !department) return;

        addStudent({
            id: Date.now(),
            name,
            department,
        });

        setName("");
        setDepartment("");
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Student name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)}/>

                <button>Add Student</button>
            </form>
        </>
    )
}