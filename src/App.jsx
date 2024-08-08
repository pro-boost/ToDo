import "./App.css";
import { useState } from "react";
import InputTasks from "./Components/InputTasks";
import DisplaytTasks from "./Components/displayTasks";
import CountTask from "./Components/CountTask";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
    setCount(count + 1);
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
      <CountTask count={count} />
    </>
  );
}

export default App;
