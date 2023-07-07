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

      <label>
        <input type="checkbox"
          checked={completed}
          onChange={e => toggleTask(id, e.target.checked)}
        />
        {title}
      </label>

      <button
        onClick={() =>deleteTask(id)}
        className="btn btn-danger">Delete
      </button>

    </li>
  )
}
