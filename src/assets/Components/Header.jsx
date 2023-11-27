import React from "react";
import '../styles/header.css'
import img from '../img/argentinaprograma.png'


//Crea el header
const Header = () => {
    return (
        <header>
            <figure>
                <img src={img} alt="argentina-programa" />
            </figure>
            <h2>Lista de tareas</h2>
        </header>
    )
}

export default Header;