

import { AddTask } from "./components/AddTask"
import { CounterTask } from "./components/CounterTask"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { Hero } from "./components/Hero"
import { Calendar } from "./components/Icons/Calendar"
import { Clock } from "./components/Icons/Clock"
import { Target } from "./components/Icons/Target"
import { useTaskWithLocalStorage } from "./hooks/useTaskWithLocalStorage"


export type TaskType = {
  id: string
  description: string
  releaseDate: Date
  completed: boolean

}

export const tabs = [
  {
    name: "Todas",
    color: "bg-purple-500",
    icon: '📝',
    description: 'No tienes tareas. ¡Agrega una nueva!'
  },

  {
    name: "Activas",
    color: "bg-orange-400",
    icon: '⚡',
    description: 'No tienes tareas pendientes. ¡Excelente trabajo!'
  },
  {
    name: "Completadas",
    color: "bg-green-500",
    icon: '🎉',
    description: 'No tienes tareas completadas aún.'
  },
]

function App() {

  const { tasks,addTask,onToggle, deleteTask,total,pending,completed } = useTaskWithLocalStorage()

  const allCounters = [total,pending,completed]

  return (
    <div className="max-w-2xl mx-auto">
      <Hero />
      <section className="grid grid-cols-3 gap-4">
        <CounterTask bgColor={'BlueCian'} iconId={<Calendar />} category={'Total'} taskCounter ={total}  />
        <CounterTask bgColor={'YellowOrange'} iconId={<Clock />} category={'Pendientes'} taskCounter ={pending} />
        <CounterTask bgColor={'GreenEsmerald'} iconId={<Target />} category={'Completadas'} taskCounter ={completed}/>
      </section>
      <AddTask onAdd={addTask} />
      <Dashboard  tasks={tasks} onToggle={onToggle} deleteTask={deleteTask}  taskCounter={allCounters}/>

    </div>
  )
}

export default App
