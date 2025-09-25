
import { useState } from "react"
import { Navegation } from "./Navegation"
import { TaskContainer } from "./TaskContainer"

import { tabs, type TaskType } from "../../App";


type DashboardProps = {
    tasks: TaskType[]
    onToggle: (id: string) => void
    deleteTask: (id: string) => void
    taskCounter: number[]
}


export const Dashboard = ({ tasks, onToggle, deleteTask, taskCounter }: DashboardProps) => {



    //indicador de menu de botones y contenido del mismo
    const [activeButton, setActiveButton] = useState(tabs[0].name)

    return (
        <section className="flex flex-col bg-white rounded-2xl shadow-lg">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-t-xl mb-2">
                <h2 className="text-white font-bold text-xl px-1">Mis Tareas</h2>
            </div>
            <div className=" flex flex-col gap-6 p-6">
                <div className="flex items-center justify-center m-4 gap-2 bg-gray-300 rounded-xl font-bold text-xs">
                    {tabs.map((tab, i) => (
                        <Navegation
                            key={i}
                            name={tab.name}
                            color={tab.color}
                            isActive={activeButton === tab.name}
                            useColor={() => setActiveButton(tab.name)}
                            taskCounter={taskCounter[i]}
                        />
                    ))}
                </div>

                {tabs.map((tab, i) => (
                    activeButton === tab.name && <TaskContainer
                        key={i}
                        icon={tab.icon}
                        name={tab.name}
                        description={tab.description}
                        tasks={tasks}
                        onToggle={onToggle}
                        deleteTask={deleteTask}
                    />
                ))}

            </div>
        </section>
    )
}
