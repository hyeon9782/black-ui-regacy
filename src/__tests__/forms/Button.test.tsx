import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/atoms/button/Button";

test("Render Button", async () => {
  render(<Button />);

  const button = await screen.findByRole("button");

  expect(button.textContent).toBe("Button");
});
