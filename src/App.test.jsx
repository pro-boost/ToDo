import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";

describe("App component", () => {
  // Renders the App component before each test
  beforeEach(() => {
    render(<App />);
  });

  it("should match the initial snapshot", () => {
    // Capture the initial snapshot of the rendered component
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("should add a task and update the count on form submission", () => {
    // Find the input field and submit button
    const inputElement = screen.getByPlaceholderText(/Insert Task/);
    const submitButton = screen.getByText(/Add Task/);

    // Simulate user input and form submission
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(submitButton);

    // Verify the task was added
    expect(screen.getByText("New Task")).toBeInTheDocument();

    // Verify the count was updated
    expect(screen.getByText("You have 1 task left")).toBeInTheDocument();
  });
  it("should not add a task if the input is empty", () => {
    const inputElement = screen.getByPlaceholderText(/Insert Task/);
    const submitButton = screen.getByText(/Add Task/);

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(submitButton);
    expect(screen.getByText("You have 0 tasks left")).toBeInTheDocument();
    expect(screen.queryByText("New Task")).not.toBeInTheDocument();
  });
});
