import "./styles.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

export default function App() {

  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS")
    if (localValue == null ) return []
    
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
  }, [tasks]) // everytime my tasks property changes, this function will be called

  function addTask(title: string) {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTask (id: string, completed:boolean) {
    setTasks(currentTasks => {
      return currentTasks.map(todo => {
        if (task.id === id) {
          return {...task, completed}
        }
        return task
      })
    })
  }

  function deleteTask(id: string) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  return(
    <>
      <Form onSubmit={addTask} />
      <h1 className="text-center mb-3">Tasks</h1>
      <Tasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </>
  )
}
