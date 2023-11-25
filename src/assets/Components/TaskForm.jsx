import React, { useState } from "react";
import { IoIosAddCircleOutline, IoIosAddCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ addTask }) => {
    const [changeIcon, setChangeIcon] = useState(false);
    const [task, setTask] = useState({
        name: "",
        date: "",
        projectName: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(task);
        setTask({
            name: "",
            date: "",
            projectName: "",
        });
    };

    
    const notify = () => {
    toast ("Tarea añadida exitosamente ✔");
    }   


    return (
        <form onSubmit={handleSubmit} className="container">
            <label className="spacing">Tarea:
                <input
                    id="larger"
                    type="text"
                    name="name"
                    placeholder="Enter your task"
                    value={task.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="borders date">Fecha:
                <input
                    type="date"
                    name="date"
                    value={task.date}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="borders proyect">Tipo:
                <input
                    type="text"
                    name="projectName"
                    placeholder="Put a name to your task"
                    value={task.projectName}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="borders">
                <button
                    className="button blue"
                    onMouseEnter={() => setChangeIcon(true)}
                    onMouseLeave={() => setChangeIcon(false)}
                    onClick={notify}
                >
                    {changeIcon ? <IoIosAddCircle /> : <IoIosAddCircleOutline />}
                </button>
            </label>
        </form>
    );
}

export default TaskForm;
