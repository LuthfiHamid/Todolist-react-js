import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="w-full mb-4">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="outline-none bg-transparent border border-primary rounded-md px-4 py-2 mt-4 mb-8 w-72 text-white placeholder-whiteOpacity" placeholder="What's your task today?" />
            <button type="submit" className='bg-primary text-white border-none py-2 px-3 ml-5 rounded cursor-pointer'>Add Task</button>
        </form>
    )
}