import React from "react";
import ReactDom from "react-dom";
let salutation;
const dynamicCss = {
  color: ""
};
const hour = new Date(2021, 5, 24, 19).getHours();
console.log(hour);

if (hour < 12) {
  dynamicCss.color = "green";
  salutation = "Good Morning";
} else if (hour < 18) {
  dynamicCss.color = "blue";
  salutation = "Good After Noon";
} else {
  salutation = "Good Evening";
  dynamicCss.color = "red";
}

ReactDom.render(
  <h1 style={dynamicCss}> {salutation} </h1>,
  document.getElementById("root")
);
