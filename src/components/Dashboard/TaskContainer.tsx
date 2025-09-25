

import type { TaskType } from "../../App"

import { Task } from "./Task"



type TaskContainerProps = {
  icon: string,
  description: string,
  name: string
  tasks: TaskType[]
  onToggle: (id: string) => void
  deleteTask: (id: string) => void


}

export const TaskContainer = ({ tasks, onToggle, deleteTask, icon, description, name }: TaskContainerProps) => {



  const allTasks = name === 'Todas'
  const completedTasks = name === 'Completadas'

  const filteredByCompletion = completedTasks ? tasks.filter(task => task.completed) : tasks.filter(task => !task.completed)
  const filteredTasks = allTasks ? tasks : filteredByCompletion
  return (

    <div className={` flex flex-col items-center justify-center gap-6 py-2`}>

      {filteredTasks.length > 0 ?
        <div className="mt-4 space-y-2 w-full">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} onToggle={() => onToggle(task.id)} />

          ))}
        </div>
        :
        <div className='flex flex-col items-center justify-center gap-6 py-15'>
          <h3 className="text-6xl cursor-default">{icon}</h3>
          <p className="opacity-60">{description}</p>
        </div>
      }




    </div>

  )
}
