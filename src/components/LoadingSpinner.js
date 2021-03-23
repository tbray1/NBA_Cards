import React from "react";
import spinner from "../assets/spinner.gif";

const LoadingSpinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default LoadingSpinner;
