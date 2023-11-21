import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(storedTasks);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (
        <>
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
