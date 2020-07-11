import React, { useState, createContext, useContext } from 'react'

const taskContext = createContext()
export const useTasks = () => useContext(taskContext)

export default function TaskContext({ children }) {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        setTasks([
            ...tasks,
            {
                id: Math.round(Math.random(1) * 30) * 7,
                task,
                complete: false,
            },
        ])
    }

    const removeTask = id => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const setStatusTask = (id, status) => {
        setTasks(tasks.map(t => (t.id === id ? { ...t, complete: status } : t)))
    }

    return (
        <taskContext.Provider
            value={{ addTask, setStatusTask, tasks, removeTask }}
        >
            {children}
        </taskContext.Provider>
    )
}
