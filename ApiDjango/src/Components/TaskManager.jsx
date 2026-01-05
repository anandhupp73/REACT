import React ,{ useState , useEffect } from "react";
import api from "../api";

function TaskManager(){
    const [tasks, setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCompleted, setNewCompleted] = useState(false);


    useEffect(()=>{
        api.get('task/')
        .then(res => setTasks(res.data))
        .catch(err => console.error(err));
    },[])

    const addTask = () => {
        api.post("task/" , { 
            title : newTask,
            description : newDescription,
            completed : newCompleted
         })
        .then(res => {
            setTasks([...tasks, res.data]);  
            setNewTask("");                  
            setNewDescription("");
            setNewCompleted(false);
        })
        .catch(err => console.error(err));
    }

    const updateTask = (id, updatedTitle , updatedDesciption , updatedCompleted) => {
        api.patch(`task/${id}/`, {
            title : updatedTitle,
            description : updatedDesciption,
            completed : updatedCompleted
        } )
        .then(res => setTasks(tasks.map(t => t.id === id ? res.data : t)))
        .catch(err => console.error(err))
    }

    const deleteTask = (id) => {
        api.delete(`task/${id}/`)
        .then(() => setTasks(tasks.filter(t => t.id !== id)))
    }

    return(
        <>

            <div>
                <h1>Tasks</h1>
                <input
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="New task"
                />
                <input
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                    placeholder="Task description"
                />
                <label>
                    Completed:
                <input
                        type="checkbox"
                        checked={newCompleted}
                        onChange={e => setNewCompleted(e.target.checked)}
                    />
                </label>

                <button onClick={addTask}>Add Task</button>
                <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.completed}</p>
                    <button onClick={() => {
                            const newTitle = prompt("New title:", task.title);
                            const newDesc = prompt("New description:", task.description);
                            const newCompleted = window.confirm("Mark as completed?");
                            updateTask(task.id, newTitle, newDesc, newCompleted);
                        }}>
                        Edit
                    </button>

                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
                </ul>
            </div>

        </>
    )

}

export default TaskManager