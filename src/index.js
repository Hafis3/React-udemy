//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";
const name = "Hafis";
ReactDom.render(
  <div>
    <h2>Fruits {name}</h2>
    <ul>
      <li>First </li>
      <li>Second </li>
      <li>Third </li>
      <li>Fourth </li>
    </ul>
  </div>,
  document.getElementById("root")
);
