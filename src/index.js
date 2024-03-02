/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      color="tan"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={34}
      color="red"
      className="test"
      defaultRating={1}
      maxRating={7}
    />
  </React.StrictMode>
);
