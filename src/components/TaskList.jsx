function TaskList({ tasks, onToggle }) {
  if (!tasks.length) {
    return <p className="muted">Görev bulunamadı.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'done' : ''}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              aria-label={`${task.title} görevini tamamla`}
            />
            <span>{task.title}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
