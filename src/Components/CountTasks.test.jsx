import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CountTasks from "./CountTasks";
describe("CountTask Component", () => {
  it("should display '0 tasks' when count is 0", () => {
    render(<CountTasks count={0} />);
    expect(screen.getByText("You have 0 tasks left")).toBeInTheDocument;
  });
  it("should display '1 task' when count is 1", () => {
    render(<CountTasks count={1} />);
    expect(screen.getByText("You have 1 task left")).toBeInTheDocument;
  });
  it("should display '2 tasks' when count is 2", () => {
    render(<CountTasks count={2} />);
    expect(screen.getByText("You have 2 tasks left")).toBeInTheDocument();
  });
});
