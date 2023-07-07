import "./styles.css";

export default function App() {
  return(
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">New Task</label>
          <input type="text" id="item" className="form-control" />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>

      <h1 className="text-center mb-3">Tasks</h1>

      <ul className="list-group">
        <li className="list-group-item">
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>

      </ul>
    </>
  )
}
