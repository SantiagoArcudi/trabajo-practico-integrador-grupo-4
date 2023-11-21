import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineDeleteOutline, MdOutlineDeleteForever } from "react-icons/md";

const TaskItem = ({ task, date, name, deleteTask }) => {
    const [changeItemIcon, setChangeItemIcon] = useState(false);
    const [changeDeleteIcon, setChangeDeleteIcon] = useState(false);
    const deleteItem = () => {
        const listItem = document.getElementById(`${name}-${date}-${task}`);
        if (listItem) {
            const ulElement = listItem.parentNode;
            ulElement.removeChild(listItem);
        }
        deleteTask();
    };
    return (
        <ul className="container">
            <li >
                <button className="button spacing green"
                    onClick={() => setChangeItemIcon(!changeItemIcon)}
                    id={(changeItemIcon ? 'active' : undefined)}
                >
                    {changeItemIcon ? <IoIosCheckmarkCircle /> : <IoIosCheckmarkCircleOutline />}
                </button>
            </li>
            <li className="borders spacing">{name}</li>
            <li className="borders color date">{date}</li>
            <li className="borders proyect">{task}</li>
            <li className="borders">
                <button className="button red"
                    onMouseEnter={() => setChangeDeleteIcon(true)}
                    onMouseLeave={() => setChangeDeleteIcon(false)}
                    onClick={deleteItem}
                >
                    {changeDeleteIcon ? <MdOutlineDeleteForever /> : <MdOutlineDeleteOutline />}
                </button>
            </li>
        </ul>
    );
}

export default TaskItem;
