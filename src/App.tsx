import "./styles.css";
import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

export default function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(title: string) {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
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
      <Form onSubmit={addTask} />
      <h1 className="text-center mb-3">Tasks</h1>
      <Tasks />
    </>
  )
}
