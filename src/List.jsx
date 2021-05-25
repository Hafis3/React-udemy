import React from "react";
import { Add, Subtract, Multiply, Divide } from "./Calculator";

export default function List() {
  return (
    <ul>
      <li>{Add(5, 5)}</li>
      <li>{Subtract(5, 5)}</li>
      <li>{Multiply(5, 5)}</li>
      <li>{Divide(5, 5)}</li>
    </ul>
  );
}
