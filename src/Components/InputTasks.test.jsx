import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import InputTasks from "./InputTasks";
describe("InputTask Component", () => {
  it("should match the initial snapshot", () => {
    const { container } = render(<InputTasks />);
    expect(container).toMatchSnapshot;
  });
  it("should render input and submit button correctly", () => {
    render(
      <InputTasks task="" handleSubmit={vi.fn()} handleInputChange={vi.fn()} />
    );

    expect(screen.getByPlaceholderText(/Insert Task/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add Task/ })
    ).toBeInTheDocument();
  });
  it("should call handleInputChange when typing in the input", () => {
    const handleInputChange = vi.fn();
    render(
      <InputTasks
        task=""
        handleSubmit={() => {}}
        handleInputChange={handleInputChange}
      />
    );

    const input = screen.getByPlaceholderText("Insert Task");

    fireEvent.change(input, { target: { value: "New Task" } });

    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
  it("should call handleSubmit when clicking on submit", () => {
    const handleSubmit = vi.fn();
    render(
      <InputTasks
        task="test Task"
        handleSubmit={handleSubmit}
        handleInputChange={() => {}}
      />
    );
    const form = screen.getByRole("form"); // Or use screen.getByTagName("form")
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
