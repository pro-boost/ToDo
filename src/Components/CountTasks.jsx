function CountTasks({ count }) {
  return (
    <>
      <p>
        You have {count} {count === 1 ? "task" : "tasks"} left
      </p>
    </>
  );
}
export default CountTasks;
