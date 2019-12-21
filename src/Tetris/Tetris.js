import React from "react";
import PropTypes from "prop-types";
import Grid from "./components/Grid/Grid";

import TetrisController from "./TetrisController";

class Tetris extends React.Component {
  constructor(props) {
    super(props);

    const { rows, cols, tickInterval } = props;

    this.gameController = new TetrisController(this, {
      rows,
      cols,
      tickInterval
    });
    this.gameController.initGame();

    this.state = {};
  }

  componentDidMount() {
    this.gameController.startGame();

    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);

    this.gameController.deregisterView();
  }

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 32: // SPACE
      case 38: // UP
        this.gameController.rotateShape();
        break;
      case 37: // LEFT
        this.gameController.moveShapeLeft();
        break;
      case 39: // RIGHT
        this.gameController.moveShapeRight();
        break;
      case 40: // DOWN
        this.gameController.moveShapeDown();
        break;
      default:
        break;
    }
  };

  render() {
    const { pixelMap } = this.state;

    return <div>{pixelMap && <Grid pixelMap={pixelMap} />}</div>;
  }
}

Tetris.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  tickInterval: PropTypes.number.isRequired,
  speedUpSpeed: PropTypes.number.isRequired
};

Tetris.defaultProps = {
  rows: 20,
  cols: 10,
  tickInterval: 400,
  speedUpSpeed: 5
};

export default Tetris;
