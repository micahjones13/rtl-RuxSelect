import { fireEvent, render } from "@testing-library/react";
import { screen, within } from "shadow-dom-testing-library";

import App from "./App";
import { userEvent } from "@testing-library/user-event";

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
it("should user change on input", async () => {
  const user = userEvent.setup();
  render(<App />);
  const ruxInput: HTMLRuxInputElement = screen.getByTestId("input");
  const shadowInput: HTMLInputElement = await within(
    ruxInput
  ).findByShadowLabelText("Input Time");
  //* Also works to find by role.
  //   const shadowInput: HTMLInputElement = await within(ruxInput).findByShadowRole(
  //     "textbox"
  //   );

  expect(shadowInput.value).toBe("");
  await user.type(shadowInput, "test");
  expect(shadowInput.value).toBe("test");
});
it("should use user event to change select value", async () => {
  const user = userEvent.setup();
  render(<App />);
  const resultDiv = screen.getByTestId("result");
  expect(resultDiv).toHaveTextContent("Selected option: 1");
  const selectMenu: HTMLRuxSelectElement = await screen.findByTestId(
    "select-menu"
  );
  const shadowSelect: HTMLSelectElement = await within(
    selectMenu
  ).findByShadowRole("combobox");
  await user.selectOptions(shadowSelect, "2");
  expect(resultDiv).toHaveTextContent("Selected option: 2");
});
// it("finds native select just fine", async () => {
//   render(<App />);
//   const nativeSelect = screen.getByRole("combobox");
//   expect(nativeSelect).toBeDefined();
// });
