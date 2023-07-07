import "./styles.css";
import { useState } from "react";

export default function App() {

  const [newTask, setNewTask] = useState <string>("");

  const [tasks, setTasks] = useState<object[]>([]);

  function handleSumit(e) {
    e.preventDefault()

    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        {id: crypto.randomUUID(), title: newTask, completed: false},
      ]
    })

    setNewTask("") // clear the input
  }

  function toggleTask (id, completed) {
    setTasks(currentTasks => {
      return currentTasks.map(todo => {
        if (task.id === id) {
          return {...task, completed}
        }
        return task
      })
    })
  }

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  return(
    <>
      <form onSubmit={handleSumit}>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">New Task</label>
          <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" id="item" className="form-control" />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>

      <h1 className="text-center mb-3">Tasks</h1>

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
    </>
  )
}
