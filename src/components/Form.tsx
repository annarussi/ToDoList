import { useState } from 'react'

interface FormProps {
  onSubmit: (title: string) => void
}

export default function Form({ onSubmit }: FormProps) {

  const [newTask, setNewTask] = useState <string>("");

  function handleSumit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (newTask === "") return

    onSubmit(newTask)

    setNewTask("") // clear the input
  }


  return (
    <form onSubmit={handleSumit}>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">New Task</label>
          <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" id="item" className="form-control" />
        </div>
        <button className="btn btn-primary">Add</button>
    </form>
  )
}
