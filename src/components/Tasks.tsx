export default function Tasks() {
  return (
    <ul className="list-group">
      {tasks.length === 0 && <h2>Seems you don't have any tasks to do yet!</h2>}

      {tasks.map(task => {
        return (
          <li key={task.id} className="list-group-item">
            <label>
              <input type="checkbox" checked={task.completed}
                      onChange={e => toggleTask(task.id, e.target.checked)} />
              {task.title}
            </label>
            <button onClick={() =>deleteTask(task.id)}
            className="btn btn-danger">Delete</button>
          </li>
        )
      })}
  </ul>
  )
}
