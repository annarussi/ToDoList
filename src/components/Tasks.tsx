import TaskItem from "./TaskItem"

interface TaskProps {
  tasks: { id: string, title: string, completed: boolean }[]
  toggleTask: (id: string, completed: boolean) => void
  deleteTask: (id: string) => void
}

export default function Tasks({ tasks, toggleTask, deleteTask }: TaskProps) {
  return (
    <ul className="list-group list-group-flush border border-light rounded">
      {tasks.length === 0 && <h2>Seems you don't have any tasks to do yet!</h2>}

      {tasks.map(task => {
        return (
          <TaskItem {...task} // spread operator, pass all the properties of task
          //  id={task.id}
          //  title={task.title}
          //  completed={task.completed}
          key={task.id}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
           />
        )
      })}

  </ul>
  )
}
