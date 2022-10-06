import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Base React App</p>;
}

render(<Hi />, document.getElementById("app"));
