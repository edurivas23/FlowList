import { useEffect, useState } from "react"
import type { TaskType } from "../App"



type StoredTask = Omit<TaskType, "releaseDate"> & { releaseDate: string }


export const useTaskWithLocalStorage = () => {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const saved = localStorage.getItem("tasks")
    if (!saved) return []
    const stringtoDate: TaskType[] = JSON.parse(saved)
      .map((t: StoredTask) => ({
        ...t,
        releaseDate: new Date(t.releaseDate)
      }))

    return stringtoDate
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))

  }, [tasks])
  const addTask = (taskValue: string) => {
    if (!taskValue.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        description: taskValue,
        releaseDate: new Date(),
        completed: false
      }
    ])

  }
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggle = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  //contadores de las tareas

  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const pending = total -completed

  return { total,completed,pending, tasks, addTask, deleteTask, onToggle }
}

