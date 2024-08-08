import "./App.css";
import InputTasks from "./Components/InputTasks";
import { useState } from "react";
import DisplaytTasks from "./Components/displayTasks";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <>
      <h1>To Do List :</h1>
      <InputTasks
        task={task}
        handleInputChange={handleInputChange}
        setTask={setTask}
        handleSubmit={handleSubmit}
      />
      <DisplaytTasks tasks={tasks} />
    </>
  );
}

export default App;
