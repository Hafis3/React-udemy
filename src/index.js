import React from "react";
import ReactDom from "react-dom";
import Salu from "./Salutation";
import Header from "./Header";
import List from "./List";

ReactDom.render(
  <>
    <Header />
    <Salu />
    <List />
  </>,
  document.getElementById("root")
);
