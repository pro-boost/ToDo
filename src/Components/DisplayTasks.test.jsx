import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DisplayTasks from "./DisplayTasks";
describe("Display Tasks compoenent", () => {
  it("sould render without crashing", () => {
    render(<DisplayTasks tasks={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument;
  });
  it("should display the correct number of tasks", () => {
    const tasks = ["Task 1", "Task 2", "Task 3"];
    render(<DisplayTasks tasks={tasks} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(tasks.length);
  });

  it("should display the correct task text", () => {
    const tasks = ["Task 1", "Task 2", "Task 3"];
    render(<DisplayTasks tasks={tasks} />);

    tasks.forEach((task, index) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });

  it("should handle an empty tasks array", () => {
    render(<DisplayTasks tasks={[]} />);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });
});
