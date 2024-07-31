import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

it("should have hello world", () => {
  render(<App />);
  const msg = screen.getAllByText(/Hello World/i);
  expect(msg).toBeDefined();
});
it("should fire change event", async () => {
  render(<App />);
  const selectMenu: HTMLRuxSelectElement = screen.getByTestId("select-menu");
  expect(selectMenu).toBeDefined();
  expect(selectMenu.value).toBe("1");
  fireEvent.change(selectMenu, { target: { value: "2" } });
  expect(selectMenu.value).toBe("2");
});
