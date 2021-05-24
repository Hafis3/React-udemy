import React from "react";
import ReactDom from "react-dom";

const name = "Hafis";
const data = new Date().getFullYear();
const imgg = "https://picsum.photos/200";
ReactDom.render(
  <div>
    <h2 className="heading">Fruits {name}</h2>
    <ul>
      <img src={imgg} alt="img" />
      <li>{data} </li>
      <li>Second </li>
      <li>Third </li>
      <li>Fourth </li>
    </ul>
  </div>,
  document.getElementById("root")
);
