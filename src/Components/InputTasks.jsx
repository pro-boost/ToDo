function InputTasks({ task, handleSubmit, handleInputChange }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="To Do"
          placeholder="Insert Task"
          value={task}
          onChange={handleInputChange}
        />
        <input type="submit" value="Add Task" />
      </form>
    </>
  );
}
export default InputTasks;
