
import "./styles.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

interface Tasks {
  id: string,
  title: string,
  completed: boolean
}

export default function App() {


  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const localValue = localStorage.getItem("TASKS") // get the value from local storage
    if (localValue == null ) return [] // if there is no value, return an empty array

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(localValue) // return the parsed value
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks)) // convert object to string
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
      return currentTasks.map(task => {
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
    <div className="d-flex flex-column p-5">
      <Form onSubmit={addTask} />
      <h1 className="text-center mb-3 fw-bold">Tasks</h1>
      <Tasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
      <Footer link="https://github.com/annarussi/" text='See more projects on my GitHub ♥'/>
    </div>
  )
}
