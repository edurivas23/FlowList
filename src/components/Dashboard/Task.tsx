

import { Close } from "../Icons/Close"
import { Check } from "../Icons/Check"
import type { TaskType } from "../../App"


type TaskProps = {
    task: TaskType
    onDelete: () => void
    onToggle: () => void

}

export const Task = ({ task, onDelete, onToggle }: TaskProps) => {

    const soloFecha = task.releaseDate.toLocaleDateString()



    return (
        <div className={`flex justify-between items-center ${task.completed ? 'bg-gray-100' : 'bg-gray-50'}  rounded-2xl  border-l-4 border-blue-500 transition duration-150 hover:shadow-lg `}>
            <div className="flex gap-4 p-4 items-center w-full">
                <div className="flex gap-4 items-center">
                    <button type="button" onClick={onToggle} className={`flex items-center justify-center text-white rounded-full cursor-pointer border-2 ${task.completed ? 'bg-green-400 border-green-400' : 'bg-none border-gray-400'}  size-9 transition-all hover:border-green-400`}>{task.completed && <Check />}</button>
                </div>
                <div className=" flex-1">
                    <h1 className={`text-sm  ${task.completed ? 'line-through text-gray-500' : 'line-none text-gray-800'}`}>{task.description}</h1>
                    <p className="text-xs text-gray-400 mt-1"> {soloFecha} </p>
                </div>


                <button type="button" onClick={onDelete} className="flex items-center justify-center cursor-pointer rounded-full  bg-red-50 text-red-500 size-9  transition-all hover:bg-red-100">
                    <Close />
                </button>
            </div>
        </div>
    )
}
