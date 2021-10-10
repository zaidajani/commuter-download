import React from "react";
import Navbar from "./Navbar";
import image from "../commuter-logo-large.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="logo">
        <center>
          <img id="logo" src={image} alt="Commuter Logo" />
        </center>
        <br />
        <br />
        <center>
          <p id="description">
            Commuter is a web application that allows users to interact with the
            APIs and develop them.  
            <br />
            It is designed to help developers to learn how to build APIs and how
            to power them up.
            <br />
            It is developed by a group of developers who are passionate about open source 
            <br />
            and led by <a href="https://github.com/zaidajani">Zaid Ajani</a>. To contribute, head on to our <a href="https://github.com/suppersource">SupperSource</a> github page.
          </p>
        </center>
      </div>
    </div>
  );
}
