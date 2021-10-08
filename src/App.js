import Navbar from "./components/Navbar";
import image from "./commuter-logo-large.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="logo">
        <center>
          <img id="logo" src={image} alt="Commuter Logo" />
        </center>
      </div>
      <div className="buttons">
        <a href="#" className="btn-darkblue">
          Download for Mac OS
        </a>
        <a href="#" className="btn-lightblue">
          Download for Windows
        </a>
      </div> 
    </>
  );
}

export default App;
