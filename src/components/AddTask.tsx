import { useState } from "react"

type AddTaskProps = {
    onAdd: (taskValue: string) => void
};


export const AddTask = ({ onAdd }: AddTaskProps) => {
    const [taskValue, setTaskValue] = useState('');


    const handleClick = () => {
        onAdd(taskValue)
        setTaskValue("")

    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {

            onAdd(taskValue)
            setTaskValue("")
        }
    }

    return (
        <section className="text-card-foreground rounded-xl border-0 mb-6 p-6 shadow-lg bg-white/80 backdrop-blur-sm">
            <label htmlFor='task-bar' className="flex gap-3">
                <input type='text' onKeyDown={handleKeyDown} id="task-bar" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} className="flex-1 border-2 border-purple-200 focus:border-purple-400 bg-white/90 p-1 rounded-md focus-visible" placeholder="Escribe una nueva tarea..." />
                <button disabled={!taskValue.trim()} type="button" onClick={handleClick} className="inline-flex items-center justify-center disabled:opacity-50 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg gap-2 rounded-md whitespace-nowrap cursor-pointer px-3 transition duration-300 ease-in-out">

                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>

                </button>
            </label>
        </section>
    )
}
