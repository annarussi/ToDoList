interface TaskItemProps {
  completed: boolean,
  id: string,
  title: string
  toggleTask: (id: string, completed: boolean) => void
  deleteTask: (id: string) => void
}

export default function TaskItem ({ completed, id, title, toggleTask, deleteTask }: TaskItemProps) {
  return (
    <li className="list-group-item">

      <div className="d-flex justify-content-between">
        <label className="me-2">
          <input type="checkbox"
            checked={completed}
            onChange={e => toggleTask(id, e.target.checked)}
            className="mx-3"
          />
          {title}
        </label>

        <button
          onClick={() =>deleteTask(id)}
          className="btn btn-outline-danger btn-sm">Delete
        </button>
      </div>
    </li>
  )
}
