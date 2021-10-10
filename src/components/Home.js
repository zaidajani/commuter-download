import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import image from "../commuter-logo-large.png";

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className="logo">
          <center>
            <img id="logo" src={image} alt="Commuter Logo" />
          </center>
        </div>
        <div className="buttons">
          <Link to="/commuter.dmg"  target="_blank" download className="btn-darkblue">
            Download for Mac OS
          </Link>
          <Link to="/commuter-Setup-1.0.0.exe" target="_blank" download className="btn-lightblue">
            Download for Windows
          </Link>
        </div>
    </div>
  )
}
