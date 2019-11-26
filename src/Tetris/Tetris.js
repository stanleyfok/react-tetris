import React from "react";
import Tower from "./components/Tower/Tower";

import "./Tetris.css";
import TetrisController from "./TetrisController";

class Tetris extends React.Component {
  constructor(props) {
    super(props);

    this.gameController = new TetrisController(this);
    this.gameController.initGame();

    this.state = {};
  }

  componentDidMount() {
    this.gameController.startGame();

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 32: // SPACE
        this.gameController.rotateShape();
        break;
      case 37: // LEFT
        this.gameController.moveShapeLeft();
        break;
      case 39: // RIGHT
        this.gameController.moveShapeRight();
        break;
      case 40: // DOWN
        this.gameController.speedUp();
        break;
      default:
        break;
    }
  };

  handleKeyUp = e => {
    console.log("??");
    switch (e.keyCode) {
      case 40: // DOWN
        this.gameController.speedDown();
        break;
      default:
        break;
    }
  };

  render() {
    const { pixelMap } = this.state;

    return (
      <div className="tetris">
        <div className="tetris__tower-container">
          {pixelMap && <Tower pixelMap={pixelMap} />}
        </div>
      </div>
    );
  }
}

export default Tetris;
