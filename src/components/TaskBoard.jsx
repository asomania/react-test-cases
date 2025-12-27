import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import TaskList from './TaskList'

const defaultTasks = [
  { id: '1', title: 'Dokümantasyonu oku', completed: false },
  { id: '2', title: 'Happy DOM ile render et', completed: true },
  { id: '3', title: 'API isteğini mockla', completed: false },
]

function TaskBoard() {
  const { tasks, addTask, toggleTask, clearCompleted, completedCount } =
    useTasks(defaultTasks)
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title.trim()) {
      setError('Boş görev eklenemez')
      return
    }

    addTask(title)
    setTitle('')
    setError('')
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <p className="eyebrow">Bileşen + etkileşim</p>
          <h2>Görev panosu</h2>
        </div>
        <span className="pill success">
          Tamamlanan: {completedCount}/{tasks.length}
        </span>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="taskTitle">Yeni görev</label>
        <div className="input-row">
          <input
            id="taskTitle"
            name="taskTitle"
            placeholder="Test senaryosunu yaz"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-describedby="task-help"
          />
          <button type="submit">Ekle</button>
        </div>
        <p id="task-help" className="muted">
          Form testi, user-event ve happy-dom için basit bir alan.
        </p>
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
      </form>

      <TaskList tasks={tasks} onToggle={toggleTask} />

      <div className="panel-foot">
        <button
          type="button"
          className="ghost"
          onClick={clearCompleted}
          disabled={!completedCount}
        >
          Tamamlananları temizle
        </button>
      </div>
    </div>
  )
}

export default TaskBoard
