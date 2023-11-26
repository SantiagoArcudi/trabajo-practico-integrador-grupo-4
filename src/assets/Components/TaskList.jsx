import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
    //Inicializa el guardado local de archivos y el state
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(storedTasks);
    //Funcion para añadir tareas que se pasa luego al taskItem
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };
    //Funcion para borrar tareas del local storage
    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
    //Almacena localmente las tareas
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (
        <>
        {/*Añade los componentes pasando los parametros necesarios*/}
            <TaskForm addTask={addTask} />
            {tasks.map((task, index) => (
                <TaskItem
                    task={task.projectName}
                    date={task.date}
                    name={task.name}
                    key={index}
                    deleteTask={() => deleteTask(index)}
                />
            ))}
        </>
    );
};

export default TaskList;
