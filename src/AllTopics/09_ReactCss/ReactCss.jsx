import React from "react";
import Navbar from "./Navbar";

const ReactCss = () => {
  return (
    <div>
      <h1>Learn Css in React</h1>

      <div style={{ backgroundColor: "red", color: "white" }}>
        style me using inline css
      </div>

      <section className="container">style me using global css</section>

      <Navbar />
    </div>
  );
};

export default ReactCss;
