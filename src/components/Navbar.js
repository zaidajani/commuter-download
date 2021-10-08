import React, { useEffect } from "react";

export default function Navbar(props) {
  useEffect(() => {
    const burger = document.querySelector(".burger");
    const links = document.querySelector(".links");

    burger.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  });

  return (
    <div>
      <nav>      
        <div class="burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
          <h1 id="commuter">
            Commuter
          </h1>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
