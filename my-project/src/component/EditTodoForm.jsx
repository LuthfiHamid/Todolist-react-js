import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="w-full mb-4">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="ouline-none bg-transparent border border-primary px-4 py-2 mt-4 mb-8 w-72 text-white placeholder-whiteOpacity" placeholder='Update task' />
            <button type="submit" className='bg-primary text-white border-none py-2 px-3 rounded cursor-pointer'>Update Task</button>
        </form>
    )
}