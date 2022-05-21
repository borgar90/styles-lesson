//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
let text = "";
let styles = {
  color: "red"
};

if (date.getHours() < 12) {
  text = "Good morning";
  styles.color = "red";
} else if (date.getHours() < 18) {
  text = "Good afternoon";
  styles.color = "green";
} else {
  text = "Good evening";
  styles.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={styles}>
    {text}
  </h1>,
  document.getElementById("root")
);
