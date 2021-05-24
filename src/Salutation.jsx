import React from "react";
let salute;

const dynamicCss = {
  color: ""
};

const hour = new Date(2021, 5, 24, 19).getHours();
find();
const Salutation = () => {
  return <h1 style={{ dynamicCss }}>{salute}</h1>;
};
function find() {
  if (hour < 12) {
    dynamicCss.color = "green";
    salute = "Good Morning";
  } else if (hour < 18) {
    dynamicCss.color = "blue";
    salute = "Good After Noon";
  } else {
    salute = "Good Evening";
    dynamicCss.color = "red";
  }
}

export default Salutation;
