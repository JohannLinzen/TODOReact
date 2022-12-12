import { useState } from "react";
//import three components
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";
//bootstrp css
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // Tasks (ToDo List) State hook
  //Hey maybe put it in Localstorage... hmmm wait until my headache is gone
  const [toDo, setToDo] = useState([]);

  // Temp State 暫時性資料只為容易檢視
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  //增加新toDo
  function addTask() {
    if (newTask) {
      let num = toDo.length + 1; //otherwise it begins from 0
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  }

  // Delete task
  //移除用filter留下id非所選項目
  function deleteTask(id) {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  }

  // Mark task as done or completed
  //done如果是所選的id那反轉status
  function markDone(id) {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  }

  // Cancel update
  //把set變空
  function cancelUpdate() {
    setUpdateData("");
  }

  // Change task for update
  // Hey try to use Reference hook, damn I am lazy....
  function changeTask(e) {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  }

  // Update task
  //get the new todo and put it in setToDo,why setToDo not just varible todo? because it needs tobe render!!!
  function updateTask() {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]; // sprend marke merge the old one and new one
    setToDo(updatedObject); // there two way to write it inside and this is one of it.
    setUpdateData(""); // clean it
  }

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List by React (hooks useState) bootstrap and freeicons</h2>
      <br />
      <br />

      {/* Ja I love ternary  */}
      {updateData && updateData.title ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos */}
      {/* ternary again */}
      {/* No! I don't put props. in front, that is ugly! */}
      {toDo && toDo.length ? "" : "Hey!!! you have nothing to do?..."}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
