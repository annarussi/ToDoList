import { useState } from 'react'

interface FormProps {
  onSubmit: (title: string) => void
}

export default function Form({ onSubmit }: FormProps) {

  const [newTask, setNewTask] = useState <string>("");

  function handleSumit(e: { preventDefault: () => void; }) {
    e.preventDefault()
    if (newTask === "") return

    onSubmit(newTask)

    setNewTask("") // clear the input
  }


  return (
    <form onSubmit={handleSumit} className="p-3">
        <div className="mb-3">
        <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Write your new task here..." type="text" id="item" name="item" className="form-control" />
        </div>
        <button className="btn btn-outline-primary btn-sm px-3">Add</button>
    </form>
  )
}
