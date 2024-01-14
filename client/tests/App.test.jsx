import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import EditableElement from "../src/Doc";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<EditableElement />);
    const contentEditable = screen.getByRole("heading");

    userEvent.tab(contentEditable);
    expect(contentEditable.textContent).toBe("CODING DESERT OF DESPAIR");
  });
});
