function AddTaskForm ({ newTask, setNewTask, addTask }) {
    return(
      <>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input 
              value={newTask}
              // should I try to use useRef?   nope... not today.....
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn btn-lg btn-info"
            >Add Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
export default AddTaskForm;
  
  
  