import { useMemo, useState } from 'react'

export function useTasks(defaultTasks = []) {
  const [tasks, setTasks] = useState(defaultTasks)

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  )

  const addTask = (title) => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return
    }

    const id = String(Date.now() + Math.random())
    setTasks((prev) => [...prev, { id, title: trimmedTitle, completed: false }])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed))
  }

  return { tasks, addTask, toggleTask, clearCompleted, completedCount }
}
