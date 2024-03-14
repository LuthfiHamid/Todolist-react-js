import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="flex justify-between items-center bg-primary text-white px-4 py-3 rounded mb-4">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon className="cursor-pointer" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="cursor-pointer" icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}