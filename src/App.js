import React from "react";
import Tetris from "./Tetris/Tetris";
import "./App.css";
import tetrisBg from "./tetris-bg.mp3";

function App() {
  return (
    <div className="app">
      <Tetris />
      <audio src={tetrisBg} type="audio/mpeg" autoPlay={true} loop={true} />
    </div>
  );
}

export default App;
