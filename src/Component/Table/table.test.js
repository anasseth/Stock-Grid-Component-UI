import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Table from "./table";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Table Component Renders", () => {
  act(() => {
    render(<Table />, container);
  });
});

it("Toggle View of Table On Clicking Single Currency Grid Dropdown", () => {
  act(() => {
    render(<Table />, container);
  });

  const div = document.querySelector("[data-testid=toggle]");
  const table = document.querySelector("[data-testid=tableView]");

  act(() => {
    div.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(table.classList['0']).toBe("LinKContainer");

  act(() => {
    for (let i = 0; i < 5; i++) {
      div.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(table.classList['0']).toBe("hide");
});
