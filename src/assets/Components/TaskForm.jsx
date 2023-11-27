import React, { useState } from "react";
import { IoIosAddCircleOutline, IoIosAddCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ addTask }) => {
    //Constrola el estado booleano del icono añadir
    const [changeIcon, setChangeIcon] = useState(false);
    //Controla el estado de los imputs y los inicializa como vacios
    const [task, setTask] = useState({
        name: "",
        date: "",
        projectName: "",
    });
    //Controla el evento del cambio de estado de los imputs y los añade visualmente
    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };
    //Controla el evento del boton submit
    const handleSubmit = (event) => {
        //cancela el actualizado automatico del form button
        event.preventDefault();
        //agrega el evento enviado desde el taskItem
        addTask(task);
        //restaura los imputs a vacio
        setTask({
            name: "",
            date: "",
            projectName: "",
        });
        notify();
    };

    
    const notify = () => {
    toast ("Tarea añadida exitosamente ✔");
    }   


    return (
        <form onSubmit={handleSubmit} className="container">
            <label className="spacing">Tarea:
                <input
                    //Informacion y estilos
                    id="larger"
                    type="text"
                    name="name"
                    placeholder="Enter your task"
                    required
                    value={task.name}
                    //Inicia el evento
                    onChange={handleChange}
                />
            </label>
            <label className="borders date">Fecha:
                <input
                    //Informacion y estilos
                    type="date"
                    name="date"
                    value={task.date}
                    required
                    //Informacion y estilos
                    onChange={handleChange}

                />
            </label>
            <label className="borders proyect">Tipo:
                <input
                    //Informacion y estilos
                    type="text"
                    name="projectName"
                    placeholder="Put a name to your task"
                    value={task.projectName}
                    required
                    //Informacion y estilos
                    onChange={handleChange}

                />
            </label>
            <label className="borders">
                <button
                    className="button blue"
                    //controla cuando el mouse pasa por encima del button
                    onMouseEnter={() => setChangeIcon(true)}
                    onMouseLeave={() => setChangeIcon(false)}
                    onClick={notify}
                //Cambia el icono segun el parametro anterior
                >
                    {changeIcon ? <IoIosAddCircle /> : <IoIosAddCircleOutline />}
                </button>
            </label>
        </form>
    );
}

export default TaskForm;
