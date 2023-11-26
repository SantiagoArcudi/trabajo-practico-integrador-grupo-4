import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineDeleteOutline, MdOutlineDeleteForever } from "react-icons/md";

const TaskItem = ({ task, date, name, deleteTask }) => {
    //Inicializa los estados de los iconos
    const [changeItemIcon, setChangeItemIcon] = useState(false);
    const [changeDeleteIcon, setChangeDeleteIcon] = useState(false);
    //Funcion para eliminar item al clickear el boton delete
    const deleteItem = () => {
        const listItem = document.getElementById(`${name}-${date}-${task}`);
        //Elimina visualmente el item
        if (listItem) {
            const ulElement = listItem.parentNode;
            ulElement.removeChild(listItem);
        }
        //Llama a la funcion para eliminar el item del local storage
        deleteTask();
    };
    return (
        <ul className="container">
            <li >
                <button className="button spacing green"
                    //Controla el evento del click
                    onClick={() => setChangeItemIcon(!changeItemIcon)}
                    id={(changeItemIcon ? 'active' : undefined)
                }
                    //Agrega estilo active al clickear
                    id={(changeItemIcon ? 'active' : undefined)}
                //Cambia el icono segun el parametro anterior
                >
                    {changeItemIcon ? <IoIosCheckmarkCircle /> : <IoIosCheckmarkCircleOutline />}
                </button>
            </li>
            <li className="borders spacing">{name}</li>
            <li className="borders color date">{date}</li>
            <li className="borders proyect">{task}</li>
            <li className="borders">
                <button className="button red"
                //controla cuando el mouse pasa por encima del button y lo borra cuando es clickeado
                    onMouseEnter={() => setChangeDeleteIcon(true)}
                    onMouseLeave={() => setChangeDeleteIcon(false)}
                    onClick={deleteItem}
                //Cambia el icono segun el parametro anterior
                >
                    {changeDeleteIcon ? <MdOutlineDeleteForever /> : <MdOutlineDeleteOutline />}
                </button>
            </li>
        </ul>
    );
}

export default TaskItem;
