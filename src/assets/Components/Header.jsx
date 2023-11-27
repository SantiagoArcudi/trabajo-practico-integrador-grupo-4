import React from "react";
import '../styles/header.css'
import img from '../img/argentinaprograma.png'


//Crea el header
const Header = () => {
    return (
        <header>
            {/* <button id="addTask"><IoAdd />Añadir tarea</button> */}
            <figure>
                <img src={img} alt="argentina-programa" />
            </figure>
            <h2>Lista de tareas</h2>
            
            {/* <button id="dayNight">Day/Night</button> */}
        </header>
    )
}

export default Header;