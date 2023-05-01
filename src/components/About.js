import React from "react";
import { image } from "../data/data";

function About() {
  return <div id='about'>
    <h2>About Me</h2>
    <p>I'm just learning how to use JSX</p>
    <img src = {image} alt="I made this"></img>
  </div>;
}

export default About;
