import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

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
        <Link to="/"><h1 id="commuter">Commuter</h1></Link>
        <ul className="links">
          <li>
            <Link to="/"><a>Home</a></Link>
          </li>
          <li>
            <Link to="/about"><a>About Us</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
